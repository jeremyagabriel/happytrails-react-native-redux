import AsyncStorage from '@react-native-community/async-storage'
import { useDispatch } from 'react-redux'
import { signin, addSignUpError, signUp } from '../store/actions'


export default () => {
  const dispatch = useDispatch()

  const signUp = async (signUpData) => {
    try {
      let response = await fetch(`http://localhost:3000/signup`, {
        body: JSON.stringify(signUpData),
        headers: {
        "Content-Type": "application/json"
        },
        method: "POST"
      })
      let data = await response.json()
  
      if (response.ok) {
        await AsyncStorage.setItem('token', data.token)
        console.log("Signup Data:", data)
        dispatch(signUp(data.token))
      }
    } catch (err) {
      console.log(err)
      dispatch(addSignUpError('Something went wrong with signing up.'))
    }
  }

  return [signUp]
}