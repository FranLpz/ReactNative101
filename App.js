/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, Alert} from 'react-native';
import {createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen'
import ProfileScreen from './ProfileScreen'
import Loading from './Loading'
import SignUp from './SignUp'
import Login from './Login'
import Main from './Main'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class ModalScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}
/*const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
});

const RootStack = createStackNavigator(
  {
    Main: {screen: MainNavigator},
    MyModal: {screen: ModalScreen}
  },
  {
    mode:'modal',
    headerMode:'none'
})

const App = createAppContainer(RootStack);
*/
const App = createAppContainer(createSwitchNavigator(
  {
    Loading: {screen: Loading},
    SignUp: {screen: SignUp},
    Login: {screen: Login},
    Main: {screen: Main},
  },
  {
    initialRouteName: 'Loading'
  }
));

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  red: {
    color: 'red',
  },
});
