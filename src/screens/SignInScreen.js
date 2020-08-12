import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Input, Text } from 'react-native-elements'
import { useSelector } from 'react-redux'
import useSignIn from '../hooks/useSignIn'
import useAuthorize from '../hooks/useAuthorize'
import test from '../hooks/test'

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const errorMessage = useSelector(state => state.auth.signInError)
  // const [signInCall] = useSignIn()
  const [signInCall] = test()
  // const [signInCall] = useAuthorize()

  return(
    <View style={styles.container}>
      <Text h4>Welcome back, explorer.</Text>
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      {errorMessage.length > 0 && <Text style={styles.errorMessage}>{errorMessage}</Text>}
      <Button 
        title="Sign In"
        onPress={()=>signInCall({ email, password })}
      />
      <Button
        title="Don't have an account? Sign up."
        onPress={() => navigation.navigate('SignUp')}  
        type="clear"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginBottom: 15,
    textAlign: 'center'
  }
})

export default SignInScreen