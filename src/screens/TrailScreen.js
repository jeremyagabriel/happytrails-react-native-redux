import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Button } from 'react-native-elements'
import useTrailProfile from '../hooks/useTrailProfile'
import { useSelector } from 'react-redux'

const TrailScreen = ({ route }) => {
  const [getTrail] = useTrailProfile()
  const { id } = route.params
  const trailCurrent = useSelector(state => state.trail.trailCurrent)

  useEffect(() => {
    getTrail(id)
  },[])

  return(
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: trailCurrent.imgMedium}} />
      <Text style={styles.title}>{trailCurrent.name}</Text>
      <Button
        title="Add to Favorites"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover'
  }
})

export default TrailScreen