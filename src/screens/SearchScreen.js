import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Button } from 'react-native'
import TrailsList from '../components/TrailsList'
import SearchBarComponent from '../components/SearchBar'
import useTrailResults from '../hooks/useTrailResults'
import { useSelector } from 'react-redux'
import { apiGetCoordinates } from '../services/mapbox'

const SearchScreen = () => {
  const [location, setLocation] = useState('')
  const [getTrailResultsCall] = useTrailResults()
  const trailResults = useSelector(state => state.search.trailResults)

  const handleSubmit = async () => {
    if (location.length === 0) return

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
      <View style={styles.submitWrapper}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit}
        >
          <Text style={styles.submit}>Submit</Text>
        </TouchableOpacity>
      </View>
      
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
  },
  title: {
    fontSize: 30
  },
  submit: {
    fontSize: 20,
    backgroundColor: '#1ba274',
    borderRadius: 5,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10
  },
  submitWrapper: {
    alignItems: 'center'
  }
})

export default SearchScreen