import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import TrailNavigator from './TrailNavigator'
import DashboardNavigator from './DashboardNavigator'
import AccountNavigator from './AccountNavigator'

const Tab = createBottomTabNavigator()
    
const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home">
        {(props) => <HomeScreen {...props} /> }
      </Tab.Screen>
      <Tab.Screen name="Search" component={TrailNavigator} />
      <Tab.Screen name="Dashboard" component={DashboardNavigator} />
      <Tab.Screen name="Account" component={AccountNavigator} />
    </Tab.Navigator>
  )
}

export default MainNavigator