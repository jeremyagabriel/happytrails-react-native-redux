import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './src/screens/HomeScreen'
import DashboardScreen from './src/screens/DashboardScreen'
import SearchStackScreen from './src/stacks/SearchStackScreen'

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
        <Tab.Screen name="Search" component={SearchStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
