import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const HomeScreen = props => {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>happy trails</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1ba274'
  },
  title: {
    color: 'white',
    fontWeight: 'bold'
  }
})

export default HomeScreen