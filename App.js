import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {observer} from 'mobx-react/native';
import {Provider} from 'mobx-react';
import store from './application/stores';
import GuestNavigation from './application/navigations/guest';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <GuestNavigation/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
