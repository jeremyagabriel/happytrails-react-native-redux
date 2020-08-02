import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SearchScreen from '../screens/SearchScreen'
import TrailScreen from '../screens/TrailScreen'

const Stack = createStackNavigator()

const TrailNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
      />
      <Stack.Screen
        name="Trail"
        component={TrailScreen}
      />
    </Stack.Navigator>
  )
}

export default TrailNavigator