import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
    StyleSheet,
    KeyboardAvoidingView,
    View,
    Text,
    Image
} from 'react-native';
import { auth } from '../../firebase.js';
import Button from '../components/Button.js';
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput } from 'react-native-paper';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(true);
    const navigation = useNavigation();
    const logo = require("../../assets/logo.jpg");
    const handleLogin = () => {
        auth.signInWithEmailAndPassword(email, password).then(credentials => {
            navigation.navigate("Home");
        }).catch(err => alert(err.message))
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <LinearGradient
                colors={['#456fe8', '#19b0ec']}
                style={styles.background}
            />
            <View style={{
                shadowColor: "#eee",
                shadowOffset: {
                    width: 1,
                    height: 5,
                },
                shadowOpacity: 0.10,
                shadowRadius: 20.22,

                elevation: 6
            }}>
                <Image style={styles.logo} source={logo} />
            </View>
            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 28, marginBottom: 32 }}>Login</Text>
            <View style={{
                width:'100%',
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 10.22,

                elevation: 6, backgroundColor: 'white', padding: 32, borderRadius: 12
            }}>
                <TextInput activeUnderlineColor='#338af2' selectionColor='#338af2' onChangeText={text => setEmail(text)} value={email} style={styles.input} textContentType="username" keyboardType="email-address" label="Digite seu usuário"></TextInput>
                <TextInput  activeUnderlineColor='#338af2' selectionColor='#338af2' right={<TextInput.Icon color="#89898f" name={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} />} onChangeText={text => setPassword(text)} value={password} style={styles.input} textContentType="password" secureTextEntry={passwordVisible} label="Digite sua senha"></TextInput>

                <View style={styles.buttons}>
                    <Button contentStyle={{flexDirection: 'row-reverse'}} icon="arrow-right-thin" mode="contained" label="Acesse sua conta" onPress={handleLogin} />
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 32, marginBottom: 24 }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#89898f' }} />
                    <View>
                        <Text style={{ textAlign: 'center', marginHorizontal: 12, color: '#89898f' }}>Não tem uma conta?</Text>
                    </View>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#89898f' }} />
                </View>

                <View style={styles.buttons}>
                    <Button icon="account-plus-outline" mode="outlined" label="Cadastre-se" variation="buttonSecondary" onPress={() => navigation.navigate("Cadastre-se")} />
                </View>
            <Text style={{ marginTop: 24, color: '#338af2', fontSize: 14 }}>Esqueceu sua senha?</Text>
            <StatusBar style="auto" />
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24,
        backgroundColor: 'white'
    },
    logo: {
        width: 60,
        height: 60,
        borderRadius: 12,
        marginBottom: 24,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '50%',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
    },
    input: {
        marginBottom: 24,
        backgroundColor: 'white'
    },
    buttons: {
        flexDirection: 'row',
        width: '100%',
    },
})
export default Login;