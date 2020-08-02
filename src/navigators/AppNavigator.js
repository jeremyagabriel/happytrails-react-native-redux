import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { NavigationContainer } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import MainNavigator from './MainNavigator'
import AuthNavigator from './AuthNavigator'
import { signIn } from '../store/actions'

const AppNavigator = () => {
  const token = useSelector(state => state.token)
  const dispatch = useDispatch()

  useEffect(() => {
    tryLocalStorage()
  },[])

  const tryLocalStorage = async () => {
    const localToken = await AsyncStorage.getItem('token')
    if (localToken) {
      console.log("Logging in via local token")
      dispatch(signIn(localToken))
    }
  }

  return (
    <NavigationContainer>
      {token !== null ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  )
}

export default AppNavigator