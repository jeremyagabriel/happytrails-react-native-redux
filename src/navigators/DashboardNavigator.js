import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ActivityScreen from '../screens/ActivityScreen'
import DashboardScreen from '../screens/DashboardScreen'
import AccountScreen from '../screens/AccountScreen'

const Stack = createStackNavigator()

const DashboardNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
      />
      <Stack.Screen
        name="Activity"
        component={ActivityScreen}
      />
      <Stack.Screen
        name="Account"
        component={AccountScreen}
      />
    </Stack.Navigator>
  )
}

export default DashboardNavigator