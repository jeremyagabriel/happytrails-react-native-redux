import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text } from 'react-native-elements'
import AsyncStorage from '@react-native-community/async-storage'

const DashboardScreen = ({ navigation }) => {
  return(
    <View style={styles.container}>
      <Text>Your Dashboard</Text>
      <Button
        title="See More Activity"
        onPress={()=> navigation.navigate('Activity')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default DashboardScreen