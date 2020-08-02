import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Input, Text } from 'react-native-elements'
import { useDispatch } from 'react-redux'
import { signin } from '../store/actions'

const SignInScreen = ({ navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

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
      <Button 
        title="Sign In"
        onPress={()=>dispatch(signin())}
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
  }
})

export default SignInScreen