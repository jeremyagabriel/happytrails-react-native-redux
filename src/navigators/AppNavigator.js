import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import MainNavigator from './MainNavigator'
import AuthNavigator from './AuthNavigator'

const AppNavigator = () => {
  const isSignedIn = useSelector(state => state.isSignedIn)

  return (
    <NavigationContainer>
      {isSignedIn && <MainNavigator />}
      {!isSignedIn && <AuthNavigator />}
    </NavigationContainer>
  )
}

export default AppNavigator