import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import firebase  from "react-native-firebase";

export default class Loading extends React.Component {
  componentDidMount (){
      const {navigate} = this.props.navigation;
      firebase.auth().onAuthStateChanged((user)=>{
        navigate(user ? 'Main' : 'SignUp')
      })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})