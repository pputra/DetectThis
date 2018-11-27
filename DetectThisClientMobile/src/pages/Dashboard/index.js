import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export default class Dashboard extends Component {
  render() {
    const { container } = styles
    return (
    <View style={ container }>
        <Text>This is Dashboard</Text>
    </View>
    );
  }
};