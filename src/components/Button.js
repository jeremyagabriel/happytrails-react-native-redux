import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const ButtonComponent = props => {
  return(
    <TouchableOpacity
      style={styles.buttonWrapper}
      onPress={props.handleSubmit}
    >
      <Text style={styles.buttonTitle}>{props.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonTitle: {
    fontSize: 20,
    borderRadius: 5,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    alignItems: 'center'
  },
  buttonWrapper: {
    borderRadius: 5,
    backgroundColor: '#1ba274',
    width: '100%'
  }
})

export default ButtonComponent