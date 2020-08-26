import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FavoritesScreen from '../screens/FavoritesScreen'
import TrailScreen from '../screens/TrailScreen'
import MapScreen from '../screens/MapScreen'

const Stack = createStackNavigator()

const FavoritesNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
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

export default FavoritesNavigator