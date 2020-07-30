import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './src/screens/HomeScreen'
import DashboardScreen from './src/screens/DashboardScreen'
import SearchStackScreen from './src/stacks/SearchStackScreen'
import { Provider } from 'react-redux'
import { store } from './src/store/store'
import axios from 'axios'

const Tab = createBottomTabNavigator()
    
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home">
            {(props) => <HomeScreen {...props} /> }
          </Tab.Screen>
          <Tab.Screen name="Dashboard" component={DashboardScreen} />
          <Tab.Screen name="Search" component={SearchStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
