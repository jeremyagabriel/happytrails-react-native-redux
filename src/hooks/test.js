import AsyncStorage from '@react-native-community/async-storage'
import { useDispatch } from 'react-redux'
import { signIn, signOut, signUp, addSignUpError, addSignInError } from '../store/auth/actions'

export default () => {
  const dispatch = useDispatch()

  const signOutCall = async () => {
  
    try {
      console.log("Signing Out")
      dispatch(signOut())
      await AsyncStorage.removeItem('token')
    } catch (err) {
      console.log(err)
    }
  }

  const signInCall = async (signInData) => {
    try {
      let response = await fetch(`http://localhost:3000/signin`, {
        body: JSON.stringify(signInData),
        headers: {
        "Content-Type": "application/json"
        },
        method: "POST"
      })
      let data = await response.json()
  
      if (response.ok) {
        await AsyncStorage.setItem('token', data.token)
        console.log("SignIn Data:", data)
        dispatch(signIn(data.token))
      }
    } catch (err) {
      console.log(err)
      dispatch(addSignInError('Invalid password or email.'))
    }
  }


  return [signInCall, signOutCall]
}