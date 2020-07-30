import React, { useReducer } from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import { useSelector, useDispatch  } from 'react-redux'
import { increment, decrement } from '../store/actions'

const HomeScreen = props => {
  const data = useSelector(state => state)
  const { counter } = data
  const dispatch = useDispatch()

  return(
    <View style={styles.container}>
      <Text style={styles.title}>happy trails</Text>
      <Text>{counter}</Text>
      <TextInput placeholder="Add name" />
      <Button title="increment" onPress={() => dispatch(increment())} />
      <Button title="decrement" onPress={() => dispatch(decrement())} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1ba274'
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40
  }
})

export default HomeScreen