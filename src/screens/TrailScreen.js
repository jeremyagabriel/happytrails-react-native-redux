import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Button } from 'react-native-elements'
import useTrailProfile from '../hooks/useTrailProfile'
import useFavorite from '../hooks/useFavorite'
import { useSelector, useDispatch } from 'react-redux'
import { setTrailLocation } from '../store/trail/actions'

const TrailScreen = ({ route, navigation }) => {
  const [getTrailCall] = useTrailProfile()
  const { id } = route.params
  const trailCurrent = useSelector(state => state.trail.trailCurrent)
  const { latitude, longitude } = trailCurrent
  const [addToFavorites, removeFromFavorites] = useFavorite()
  const dispatch = useDispatch()

  // if (trailCurrent === null || trailFavoriteIds === null) {
  //   return (
  //     <Text>Loading...</Text>
  //   )
  // }

  useEffect(() => {
    console.log("On trail screen")
    getTrailCall(id)
  },[])

  return(
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: trailCurrent.imgMedium}} />
      <Text style={styles.title}>{trailCurrent.name}</Text>
      <Button
        title="Add to Favorites"
      />
      <Button
        title="Open Map"
        onPress={() => {
          dispatch(setTrailLocation(latitude, longitude))
          navigation.navigate('Map')
        }}
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