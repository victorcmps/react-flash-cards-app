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
        auth.signInWithEmailAndPassword(email, password).then(() => {
            navigation.navigate("Home");
        }).catch(err => alert(err.message))
    }

    const colors = {
        primary: '#338af2',
        secondary: '#19b0ec',
        neutralGrey: '#89898f'
    }

    return (
        <KeyboardAvoidingView style={styles.login.container}>
            <LinearGradient
                colors={[colors.primary, colors.secondary]}
                style={styles.login.background}
            />
            <View style={styles.login.logoWrapper}>
                <Image style={styles.login.logo} source={logo} accessibilityLabel="Logo" />
            </View>
            <Text style={styles.login.title}>Login</Text>
            <View style={styles.login.card}>
                <TextInput activeUnderlineColor={colors.primary} selectionColor={colors.primary} onChangeText={text => setEmail(text)} value={email} style={styles.login.input} textContentType="username" keyboardType="email-address" label="E-mail"></TextInput>
                <TextInput activeUnderlineColor={colors.primary} selectionColor={colors.primary} right={<TextInput.Icon color={colors.neutralGrey} name={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} />} onChangeText={text => setPassword(text)} value={password} style={styles.login.input} textContentType="password" secureTextEntry={passwordVisible} label="Password"></TextInput>

                <View style={styles.login.buttons}>
                    <Button contentStyle={{ flexDirection: 'row-reverse' }} icon="arrow-right-thin" mode="contained" label="Login" onPress={handleLogin} />
                </View>
            </View>
            <View style={styles.login.register}>
                <View style={styles.login.register.line} />
                <View>
                    <Text style={styles.login.register.text}>Don't have an account?</Text>
                </View>
                <View style={styles.login.register.line} />
            </View>

            <View style={styles.login.buttons}>
                <Button icon="account-plus-outline" mode="outlined" label="Register" variation="buttonSecondary" onPress={() => navigation.navigate("Cadastre-se")} />
            </View>
            <Text style={styles.login.forgotPassword}>Forgot your password?</Text>
            <StatusBar style="auto" />
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    login: {
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 24,
            backgroundColor: 'white'
        },
        title: {
            fontWeight: 'bold', color: 'white', fontSize: 28, marginBottom: 32
        },
        logoWrapper: {
            shadowColor: "#eee",
            shadowOffset: {
                width: 1,
                height: 5,
            },
            shadowOpacity: 0.10,
            shadowRadius: 20.22,
            elevation: 6
        },
        logo: {
            width: 60,
            height: 60,
            borderRadius: 12,
            marginBottom: 24,
        },
        card: {
            width: '100%',
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 10.22,
            elevation: 6, backgroundColor: 'white', padding: 32, borderRadius: 12
        },
        register: {
            flexDirection: 'row', alignItems: 'center', marginTop: 32, marginBottom: 24,
            line: {
                flex: 1, height: 1, backgroundColor: '#89898f'
            },
            text: {
                textAlign: 'center', marginHorizontal: 12, color: '#89898f'
            }
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
        forgotPassword: { marginTop: 24, color: '#338af2', fontSize: 14 }
    },

})
export default Login;