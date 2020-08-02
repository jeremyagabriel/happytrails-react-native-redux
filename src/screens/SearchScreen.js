import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import TrailsList from '../components/TrailsList'
import SearchBarComponent from '../components/SearchBar'
import useTrailResults from '../hooks/useTrailResults'
import { useSelector } from 'react-redux'

const SearchScreen = () => {
  const [lat, setLat] = useState()
  const [lon, setLon] = useState()
  const [getTrails] = useTrailResults()
  const trailResults = useSelector(state => state.trailResults)

  return(
    <ScrollView style={styles.container}>
      <SearchBarComponent
        placeholder='Latitude'
        handleChange={setLat}
        value={lat}
      />

      <SearchBarComponent
        placeholder='Longitude'
        handleChange={setLon}
        value={lon}
      />
      
      <View style={styles.submitWrapper}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => getTrails(lat, lon)}
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