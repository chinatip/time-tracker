import Expo from 'expo';
import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import {
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';
import { FontAwesome } from '@expo/vector-icons';

import Router from './navigation/Router';
import rootNavigation from './navigation/RootNavigation';

class App extends React.Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation 
          initialRoute="root"
          initialRoute={Router.getRoute('rootNavigation')}
        />
      </NavigationProvider>
    );
  }
}

Expo.registerRootComponent(App);