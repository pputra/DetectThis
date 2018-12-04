import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

import FlexContainer from '../../components/containers/Flex';
import PaperContainer from '../../components/containers/Paper';
import TextCard from '../../components/cards/text';

class Result extends Component {
  renderResult = () => {
    const { navigation, detectionResult } = this.props
    const { cardContainer } = styles
    const detectionType = navigation.getParam('detectionType');
    
    if (detectionType === 'Text') {
      return <PaperContainer textContent={ detectionResult }/>;
    } else if (detectionType === 'Brand') {
      return (
        <View style={cardContainer}>
          <TextCard textContent={ detectionResult }/>
        </View>
      );
    } else if (detectionType === 'Object') {
      return (
        <View style={cardContainer}>
          {
            detectionResult.map((result, i) => (
              <TextCard textContent ={ result } key={i}/>
            ))
          }
        </View>
      );
    }
  }
  
  render() {
    const { loading } = this.props
    const { cardContainer } = styles
    
    return (
      <FlexContainer>
        {
          loading ? 
          <View style={ cardContainer }>
            <ActivityIndicator size={'large'}/>
          </View>
          : 
          this.renderResult()
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