import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({ onPress, label, variation, buttonStyle, textStyle }) => {
    return (
        <TouchableOpacity style={[buttonStyle, styles.button, variation === 'secondary' ? styles.buttonSecondary : styles.buttonPrimary]} onPress={onPress}>
            <Text style={[textStyle, styles.buttonText, variation === 'secondary' ? styles.buttonTextSecondary: styles.buttonTextPrimary]}>{label}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        elevation: 8,
        paddingHorizontal: 16,
        borderRadius: 10,
        paddingVertical: 12,
        borderRadius: '12px',
        width: '100%',
        flex: 1
    },
    buttonPrimary: {
        backgroundColor: '#0d1317',
    },
    buttonSecondary: {
        borderWidth: '1px',
        borderColor: '#0d1317',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        alignSelf: "center",
    },
    buttonTextPrimary: {
        color: "#fff",
    },
    buttonTextSecondary: {
        color: '#0d1317'
    }
})