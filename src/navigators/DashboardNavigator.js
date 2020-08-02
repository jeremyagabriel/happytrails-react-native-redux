import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ActivityScreen from '../screens/ActivityScreen'
import DashboardScreen from '../screens/DashboardScreen'

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
    </Stack.Navigator>
  )
}

export default DashboardNavigator