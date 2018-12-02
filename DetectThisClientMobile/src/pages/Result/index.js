import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

class Result extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { loading, detectionResult, error } = this.props
    return (
      <View>
        {loading ? <Text>loading</Text> : <Text>{detectionResult}</Text>}
      </View>
    );
  }
};

const setStateToProps = (state) => ({
  detectionResult: state.detectedObjectReducer.detectedObject,
  loading: state.detectedObjectReducer.loading,
  error: state.detectedObjectReducer.error,
});

const setDispatchToProps = (dispatch) => ({
  
});

export default connect(setStateToProps, setDispatchToProps)(Result);