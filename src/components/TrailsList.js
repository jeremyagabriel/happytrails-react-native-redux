import React from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const TrailsList = ({ trailResults }) => {
  const navigation = useNavigation()

  return(
    <View styles={styles.container}>
      <FlatList 
        data={trailResults}
        showsVerticalScrollIndicator={false}
        keyExtractor={(trail) => trail.name} 
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Trail', {
              id: item.id
            })}
          >
            <View style={styles.resultContainer}>
              <Text style={styles.title}>{item.name}</Text>
              <Text>{item.location}</Text>
              <Image style={styles.image} source={{uri: item.imgMedium}} /> 
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  resultContainer: {
    height: 200,
    backgroundColor: 'white',
    borderRadius: 5,
    marginVertical: 10,
    padding: 15
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'cover'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20
  }
})

export default TrailsList