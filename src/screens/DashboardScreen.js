import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import ButtonComponent from '../components/Button'

const DashboardScreen = ({ navigation }) => {
  return(
    <View style={styles.container}>
      <Text>Your Dashboard</Text>
      <ButtonComponent 
        title='See More Activity'
        handleSubmit={()=> navigation.navigate('Activity')}
      />
      <ButtonComponent 
        title='See More Favorites'
        handleSubmit={()=> navigation.navigate('Favorites')}
      />
      <ButtonComponent 
        title='Account'
        handleSubmit={()=> navigation.navigate('Account')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15
  }
})

export default DashboardScreen