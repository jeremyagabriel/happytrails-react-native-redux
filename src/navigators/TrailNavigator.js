import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SearchScreen from '../screens/SearchScreen'
import TrailScreen from '../screens/TrailScreen'
import MapScreen from '../screens/MapScreen'

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
      <Stack.Screen
        name="Map"
        component={MapScreen}
      />
    </Stack.Navigator>
  )
}

export default TrailNavigator