import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import useTrailProfile from '../hooks/useTrailProfile'
import { useSelector, useDispatch  } from 'react-redux'

const TrailScreen = ({ route }) => {
  const [getTrail, trailData] = useTrailProfile()
  const { id } = route.params
  const data = useSelector(state => state)
  const { counter } = data

  useEffect(() => {
    getTrail(id)
  },[])

  return(
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: trailData.imgMedium}} />
      <Text style={styles.title}>{trailData.name}</Text>
      <Text>{counter}</Text>
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