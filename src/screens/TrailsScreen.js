import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TrailsScreen = props => {
  return(
    <View style={styles.container}>
      <Text>Trails</Text>
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

export default TrailsScreen