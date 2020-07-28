import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native'
import TrailsList from '../components/TrailsList'
import SearchBar from '../components/SearchBar'
import useTrailResults from '../hooks/useTrailResults'

const SearchScreen = () => {
  const [lat, setLat] = useState()
  const [lon, setLon] = useState()
  const [getTrails, trailResults] = useTrailResults()

  const handleLatitude = e => {
    setLat(e)
  }

  const handleLongitude = e => {
    setLon(e)
  }

  const handleSubmit = e => {
    getTrails(lat, lon)
  }

  return(
    <ScrollView style={styles.container}>
      <SearchBar 
        placeholder='Latitude'
        handleChange={handleLatitude}
      />

      <SearchBar 
        placeholder='Longitude'
        handleChange={handleLongitude}
      />

      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmit}
      >
        <Text>Submit</Text>
      </TouchableOpacity>
      
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
  }
})

export default SearchScreen