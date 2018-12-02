import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import FlexContainer from '../../components/containers/Flex';
import PaperContainer from '../../components/containers/Paper';

class Result extends Component {
  render() {
    const { loading, detectionResult, error } = this.props
    return (
      <FlexContainer>
        {
          loading ? 
          <Text>loading</Text> : 
          <PaperContainer textContent={ detectionResult }/>
        }
      </FlexContainer>
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