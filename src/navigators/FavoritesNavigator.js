import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FavoritesScreen from '../screens/FavoritesScreen'
import TrailFavoriteScreen from '../screens/TrailFavoriteScreen'
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
        name="TrailFavorite"
        component={TrailFavoriteScreen}
      />
      <Stack.Screen
        name="Map"
        component={MapScreen}
      />
    </Stack.Navigator>
  )
}

export default FavoritesNavigator