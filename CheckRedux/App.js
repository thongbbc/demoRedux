/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Header} from './header'
import List from './body/body'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducer'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store = {createStore(reducer)}>
        <View style={{flex:1}}>
          <Header title='Thong'/>
          <List style={{flex:1}}/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({

});
