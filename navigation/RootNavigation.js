import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Notifications } from 'expo';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem,
} from '@expo/ex-navigation';
import { FontAwesome } from '@expo/vector-icons';

export default class RootNavigation extends React.Component {

  render() {
    return (
      <TabNavigation tabBarHeight={56} initialTab="timer">
        <TabNavigationItem
          id="timer"
          renderIcon={isSelected => this._renderIcon('Timer', 'clock-o', isSelected)}
        >
          <StackNavigation initialRoute="timer" />
        </TabNavigationItem>
        <TabNavigationItem
          id="dashboard"
          renderIcon={isSelected => this._renderIcon('Dashboard', 'list-alt', isSelected)}
        >
          <StackNavigation initialRoute="dashboard" />
        </TabNavigationItem>
        <TabNavigationItem
          id="goal"
          renderIcon={isSelected => this._renderIcon('Goal', 'clock-o', isSelected)}
        >
          <StackNavigation initialRoute="goal" />
        </TabNavigationItem>
      </TabNavigation>
    );
  }

  _renderIcon(tabName, iconName, isSelected) {
    return (
        
      <FontAwesome
        name={iconName} 
        size={32}
      />
    );
  }
}

