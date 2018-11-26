import React, {Component} from 'react';
import {StyleSheet,} from 'react-native';

import { createSwitchNavigator } from 'react-navigation'

import InitialLogInStack from './src/Screens/InitialLogInStack'
import AppDrawerStack from './src/Screens/MainAppStack/index'

export default class App extends Component {
  render() {
    return <Switchings />
}
}

const Switchings = createSwitchNavigator(
  {
    Initial: InitialLogInStack,
    AppDrawer: AppDrawerStack
  },
  {
    initialRouteName:'Initial'
  }
)


