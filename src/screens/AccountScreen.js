import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text } from 'react-native-elements'
import useSignOut from '../hooks/useSignOut'
import useAuthorize from '../hooks/useAuthorize'
// import { signOutCall } from '../hooks/test'

const AccountScreen = props => {
  const [signOutCall] = useSignOut()
  // const [signOutCall] = useAuthorize()
  // const [signOutCall] = test()
  // const signOut = signOutCall()

  return(
    <View style={styles.container}>
      <Button
        title="Sign Out"
        onPress={()=>signOutCall()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default AccountScreen