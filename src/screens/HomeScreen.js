import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { useSelector } from 'react-redux'

const HomeScreen = props => {
  const token = useSelector(state => state.auth.token)

  return(
    <View style={styles.container}>
      <Text>{token}</Text>
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
    fontWeight: 'bold',
    fontSize: 40
  }
})

export default HomeScreen