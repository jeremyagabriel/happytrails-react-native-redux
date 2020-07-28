import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const SearchBar = props => {
  return(
    <View>
      <TextInput
        style={styles.searchBox} 
        placeholder={props.placeholder}
        onChangeText={props.handleChange}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  searchBox: {
    backgroundColor: 'white',
    padding: 10,
    height: 40,
    marginVertical: 10,
    borderRadius: 5
  }
})

export default SearchBar