import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TrackScreen from '../screens/TrackScreen'

const Stack = createStackNavigator()

const TrackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Track"
        component={TrackScreen}
      />
    </Stack.Navigator>
  )
}

export default TrackNavigator