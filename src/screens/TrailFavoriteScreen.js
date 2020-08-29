import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Button } from 'react-native-elements'
import useTrailProfile from '../hooks/useTrailProfile'
import useFavorite from '../hooks/useFavorite'
import useAddToFavorites from '../hooks/favorites/useAddToFavorites'
import useRemoveFromFavorites from '../hooks/favorites/useRemoveFromFavorites'
import useGetFavoriteIds from '../hooks/favorites/useGetFavoriteIds'
import { useSelector, useDispatch } from 'react-redux'
import { setTrailLocation } from '../store/trail/actions'

const TrailFavoriteScreen = ({ route, navigation }) => {
  const [getTrailCall] = useTrailProfile()
  const [addToFavorites] = useAddToFavorites()
  const [removeFromFavorites] = useRemoveFromFavorites()
  const [getFavoriteIds] = useGetFavoriteIds()
  const { id } = route.params
  const trailCurrent = useSelector(state => state.trailFavorite.trailCurrent)
  const trailFavoriteIds = useSelector(state => state.favorites.trailFavoriteIds)

  const dispatch = useDispatch()

  useEffect(() => {
    console.log("On favorite trail screen")
    getTrailCall(id)
  },[])

  useEffect(() => {
    getFavoriteIds()
  }, [trailFavoriteIds])

  const handleFavorite = () => {
    trailFavoriteIds.includes(id) ? removeFromFavorites(id) : addToFavorites(id)
  }
  
  if (trailCurrent === null || trailFavoriteIds === null) {
    return (
      <Text>Loading...</Text>
    )
  }

  const { latitude, longitude } = trailCurrent
  

  return(
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: trailCurrent.imgMedium}} />
      <Text>{trailFavoriteIds.join(", ")}</Text>
      <Text style={styles.title}>{trailCurrent.name}</Text>
      <Button
        title={trailFavoriteIds.includes(id) ? "Favorited" : "Favorite"}
        onPress={handleFavorite}
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

export default TrailFavoriteScreen