import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'

const Stack = createStackNavigator()

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="SignIn"
        component={SignInScreen} 
        options={{
          headerShown: false,
          animationEnabled: false
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          headerShown: false,
          animationEnabled: false
        }}
      />
    </Stack.Navigator>
  )
}

export default AuthNavigator