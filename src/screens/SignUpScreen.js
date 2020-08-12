import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'
import { Button, Input, Text } from 'react-native-elements'
import useSignUp from '../hooks/useSignUp'
import useAuthorize from '../hooks/useAuthorize'

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const errorMessage = useSelector(state => state.auth.signUpError)
  const [signUp] = useSignUp()
  // const [signUpCall] = useAuthorize()

  return(
    <View style={styles.container}>
      <Text h4>Find your happy place.</Text>
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
        title="Sign Up"
        onPress={()=>signUp({email, password})}
      />
      <Button
        title="Already have an account? Sign in."
        onPress={() => navigation.navigate('SignIn')}
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

export default SignUpScreen