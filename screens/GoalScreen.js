import Expo from 'expo';
import React from 'react';
import {
  Text,
  View,
} from 'react-native';

export default class GoalScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Goal',
    }
  }

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text onPress={this._handlePress}>Goal!</Text>
      </View>
    )
  }
}