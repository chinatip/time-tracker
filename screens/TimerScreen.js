import Expo from 'expo';
import React from 'react';
import {
  Text,
  View,
} from 'react-native';

export default class TimerScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Timer',
    }
  }

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text onPress={this._handlePress}>Timer!</Text>
      </View>
    )
  }
}