import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

class Result extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>This is Result Page</Text>
      </View>
    );
  }
};

export default Result;