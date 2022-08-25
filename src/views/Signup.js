import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Signup = () => {
    const handleSignUp = () => {
        auth.createUserWithEmailAndPassword(email, password).then(credentials => {
            const user = credentials.user;
            console.log(user.email);
        }).catch(err => alert(err.message));
    }

  return (
    <View>
      <Text>Signup</Text>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({})