import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TrackScreen = props => {
  return(
    <View style={styles.container}>
      <Text>Track Your Hikes</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 5,
    flex: 1
  }
})

export default TrackScreen