import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from './src/screens/HomeScreen'
import DashboardScreen from './src/screens/DashboardScreen'
import TrailsScreen from './src/screens/TrailsScreen'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home">
          {(props) => <HomeScreen {...props} /> }
        </Tab.Screen>
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Trails" component={TrailsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
