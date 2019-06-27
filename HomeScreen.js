import React, {Component} from 'react';
import {Button, View} from 'react-native';
export default class HomeScreen extends Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Go to Jane's profile"
          onPress={() => navigate('Profile', {name: 'Jane'})}
        />
        <Button
          title="Info Modal"
          onPress={() => navigate('MyModal')}
        />
        </View>
      );
    }
  }