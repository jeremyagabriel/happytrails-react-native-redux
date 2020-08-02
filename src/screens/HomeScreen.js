import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Button } from 'react-native-elements'
import { useSelector, useDispatch  } from 'react-redux'
import { signout } from '../store/actions'

const HomeScreen = props => {
  const data = useSelector(state => state)
  const { isSignedIn } = data
  const dispatch = useDispatch()

  return(
    <View style={styles.container}>
      <Text style={styles.title}>happy trails</Text>

      <Button
        title="Sign Out"
        onPress={()=>dispatch(signout())}
      />

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