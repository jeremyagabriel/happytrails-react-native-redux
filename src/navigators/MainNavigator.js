import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import TrailNavigator from './TrailNavigator'
import DashboardNavigator from './DashboardNavigator'
import FavoritesNavigator from './FavoritesNavigator'
import TrackNavigator from './TrackNavigator'

const Tab = createBottomTabNavigator()
    
const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home">
        {(props) => <HomeScreen {...props} /> }
      </Tab.Screen>
      <Tab.Screen name="Search" component={TrailNavigator} />
      <Tab.Screen name="Dashboard" component={DashboardNavigator} />
      <Tab.Screen name="Favorites" component={FavoritesNavigator} />
      <Tab.Screen name="Track" component={TrackNavigator} />
    </Tab.Navigator>
  )
}

export default MainNavigator