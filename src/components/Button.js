import { StyleSheet, Text} from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';

const DefaultButton = ({ ...props }) => {

    return (
        <Button contentStyle={props.contentStyle} labelStyle={styles.buttonLabel} style={styles.button} color="#338af2" buttonColor="#338af2" mode={props.mode} icon={props.icon} onPress={props.onPress}>
            <Text style={{fontSize: 16}}>{props.label}</Text>
        </Button>
    )
}

export default DefaultButton

const styles = StyleSheet.create({
    button: {
        elevation: 8,
        borderRadius: 10,
        borderRadius: '12px',
        width: '100%',
        flex: 1,
    },
    buttonLabel: {
        paddingVertical: 8, 
        paddingHorizontal: 16, 
        fontSize: 24, 
        letterSpacing: 0, 
        textTransform: 'none'
    },
    buttonPrimary: {
        backgroundColor: '#338af2',
    },
    buttonSecondary: {
        borderWidth: '1px',
        borderColor: '#338af2',
    }
})