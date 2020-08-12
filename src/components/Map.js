import React from 'react'
import { StyleSheet } from 'react-native'
import MapView, { Polyline } from 'react-native-maps'
import { useSelector } from 'react-redux'

const Map = () => {
  let points = []
  const data = useSelector(state=>state.trail)
  const { trailLat, trailLon } = data

  return(
    <MapView 
      style={styles.map}
      initialRegion={{
        latitude: trailLat,
        longitude: trailLon,
        latitudeDelta: 0.03,
        longitudeDelta: 0.03
      }}
    >
        <Polyline />
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    height: '100%'
  }
})

export default Map