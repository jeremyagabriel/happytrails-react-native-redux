import React, { useState, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { StyleSheet, ScrollView } from 'react-native'
import TrailsList from '../components/TrailsList'
import SearchBarComponent from '../components/SearchBar'
import ButtonComponent from '../components/Button'
import useTrailResults from '../hooks/useTrailResults'
import { useSelector, useDispatch } from 'react-redux'
import { apiGetCoordinates } from '../services/mapbox'
import { setTrailCurrent } from '../store/trail/actions'

const SearchScreen = () => {
  const [location, setLocation] = useState('')
  const [getTrailResultsCall] = useTrailResults()
  const trailResults = useSelector(state => state.search.trailResults)
  const dispatch = useDispatch()

  useFocusEffect(
    useCallback(() => {
      dispatch(setTrailCurrent(null))
    }, [])
  )

  const handleSubmit = async () => {
    if (location.length <= 1) return
    try {
      const coords = await apiGetCoordinates(location)
      
      getTrailResultsCall(coords.lat, coords.lon)
    } catch (err) {
      console.log('Unable to submit location to server:',err)
    }
  }

  return(
    <ScrollView style={styles.container}>
      <SearchBarComponent
        placeholder='Location'
        handleChange={setLocation}
        value={location}
      />

      <ButtonComponent 
        title='Submit'
        handleSubmit={handleSubmit}
      />
      
      <TrailsList 
        trailResults={trailResults}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 5,
    flex: 1
  }
})

export default SearchScreen