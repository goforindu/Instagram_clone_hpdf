import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Signup from './screens/Signup';
import Login from './screens/Login';



export const SimpleApp = StackNavigator({
  Home: { screen: Signup },
  Login: { screen: Login },
});


export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}
