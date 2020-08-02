import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { SearchBar } from 'react-native-elements'

const SearchBarComponent = props => {
  return(
    <View>
      <SearchBar
        placeholder={props.placeholder}
        onChangeText={(e) => props.handleChange(e)}
        platform="ios"
        value={props.value}
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

export default SearchBarComponent