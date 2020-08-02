import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import DashboardScreen from '../screens/DashboardScreen'
import TrailNavigator from './TrailNavigator'

const Tab = createBottomTabNavigator()
    
const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home">
        {(props) => <HomeScreen {...props} /> }
      </Tab.Screen>
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Search" component={TrailNavigator} />
    </Tab.Navigator>
  )
}

export default MainNavigator