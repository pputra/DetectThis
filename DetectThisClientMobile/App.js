import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Store from './src/store';
import AppContainer from './src/navigations';

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <AppContainer/>
      </Provider>
    );
  }
}