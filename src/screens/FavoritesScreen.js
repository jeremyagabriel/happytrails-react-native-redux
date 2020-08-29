import React, { useState, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
import TrailsList from '../components/TrailsList'
import { setTrailCurrent } from '../store/trailFavorite/actions'
import useFetchFavoriteTrails from '../hooks/favorites/useFetchFavoriteTrails'

const FavoritesScreen = props => {
  const [message, setMessage] = useState('Loading...')
  const trailFavorites = useSelector(state => state.favorites.trailFavorites)
  const [getFavoriteTrails] = useFetchFavoriteTrails()
  const dispatch = useDispatch()

  useFocusEffect(
    useCallback(() => {
      setMessage('Loading...')
      getFavoriteTrails()
        .then(() => setMessage(''))
      dispatch(setTrailCurrent(null))
    }, [])
  )

  return(
    <View style={styles.container}>
      <Text>{message}</Text>
      <TrailsList 
        trailResults={trailFavorites}
      />
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

export default FavoritesScreen