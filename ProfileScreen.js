import React, {Component} from 'react';
import {Button} from 'react-native';
type Props = {};
export default class ProfileScreen extends Component<Props> {
    static navigationOptions = {
      title: 'Profile View! '
    };
    render() {
      const { navigation } = this.props;
      const name = navigation.getParam('name', 'profile');
      return (
        <Button
          title={`Go Back! ${name}`}
          onPress={() => navigation.navigate('Home')}
        />
      );
    }
  }