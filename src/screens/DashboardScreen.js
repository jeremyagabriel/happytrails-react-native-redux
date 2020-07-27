import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const DashboardScreen = props => {
  return(
    <View style={styles.container}>
      <Text>Your Dashboard</Text>
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