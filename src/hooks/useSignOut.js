import AsyncStorage from '@react-native-community/async-storage'
import { useDispatch } from 'react-redux'
import { signOut } from '../store/auth/actions'

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

  return [signOutCall]
}