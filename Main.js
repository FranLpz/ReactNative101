import React from 'react'
import { StyleSheet, Platform, Image, Text, View, Button } from 'react-native'
import { GoogleSignin } from 'react-native-google-signin';
import firebase from 'react-native-firebase'

export default class Main extends React.Component {
  state = { currentUser: null }
  async componentDidMount() {
    const googleUser = await GoogleSignin.getCurrentUser();
    const currentUser = googleUser.user || firebase.auth();
    console.log('cu ',currentUser)
    this.setState({ currentUser })
  }
  handleSignout = async() => {
    try {
      firebase.auth().signOut()
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.setState({ user: null }); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  }

render() {
    const { currentUser } = this.state
    const photoProfile = currentUser && currentUser.photo
return (
      <View style={styles.container}>
        <Image
          style={{width: 80, height: 80}}
          source={{uri:photoProfile}}
        />
        <Text>
          Hi {currentUser && currentUser.email}!
        </Text>
        <Button
          title="Go Back"
          onPress={this.handleSignout }
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})