import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {
    TextInput,
    StyleSheet,
    KeyboardAvoidingView,
    View,
    Text
} from 'react-native';
import { auth } from '../../firebase.js';
import Button from '../components/Button.js';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged(user => {
    //         if (user) {
    //             navigation.navigate("Home");
    //         }
    //     });

    //     return unsubscribe;
    // }, [])

    const handleLogin = () => {
        auth.signInWithEmailAndPassword(email, password).then(credentials => {
            const user = credentials.user;
            console.log(user.email, user.uid)
        }).catch(err => alert(err.message))
    }
    return (
        <KeyboardAvoidingView style={styles.container}>
            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 32, marginBottom: 8 }}>Olá! 👋</Text>
            <Text style={{ color: 'black', fontSize: 18, marginBottom: 32 }}>Faça login para ver os seus cards</Text>

            <TextInput onChangeText={text => setEmail(text)} value={email} style={styles.input} textContentType="username" keyboardType="email-address" placeholder="Digite seu usuário"></TextInput>
            <TextInput onChangeText={text => setPassword(text)} value={password} style={styles.input} textContentType="password" secureTextEntry={true} placeholder="Digite sua senha"></TextInput>

            <View style={styles.buttons}>
                <Button label="Login" onPress={handleLogin} />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 32 }}>
                <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                <View>
                    <Text style={{ textAlign: 'center', marginHorizontal: 12 }}>Não tem uma conta?</Text>
                </View>
                <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
            </View>

            <View style={styles.buttons}>
                <Button label="Cadastre-se" variation="secondary" onPress={() => navigation.navigate("Cadastre-se")} />
            </View>
            <StatusBar style="auto" />

        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24
    },
    input: {
        borderWidth: '1px',
        borderRadius: '12px',
        borderColor: '#b6b7bf',
        padding: 12,
        width: '100%',
        marginBottom: 12,
        color: '#0d1317'
    },
    buttons: {
        flexDirection: 'row',
        width: '100%',
    },
})
export default Login;