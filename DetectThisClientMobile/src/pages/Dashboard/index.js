import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

import detectObject from '../../store/actions/detectObject';

import FlexContainer from '../../components/containers/Flex';
import MainHeader from '../../components/headers/MainHeader';
import OptionCard from '../../components/cards/option';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  test = () => {
    this.props.navigation.navigate({routeName: 'Result'}); 
  }

  render() {
    const { detectObject } = this.props
    const { menuContainer } = styles;
    const options = [
      {
        label: 'Text',
        imageSource: 'https://fsymbols.com/thumbs/95.png',
        onPress: () => detectObject('text')
      },
      {
        label: 'Brand',
        imageSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQExnL_dTvPpWmOab_B_3KIRd14KSMKtgCB0D_6dc1BOBTZnqQYiQ',
        onPress: () => this.test()
      },
      {
        label: 'Object',
        imageSource: 'https://i.ebayimg.com/images/g/hG8AAOSwFNZWuxqH/s-l300.jpg',
        onPress: () => this.test()
      },
    ];
    return (
      <FlexContainer>
        {this.props.loading ? <Text>loading</Text> : <Text>{this.props.detectionResult}</Text>}
        <MainHeader 
          headerTitle={ 'DetectThis' } 
          backgroundColor={ '#000000' }
          color={ '#FFFFFF' }
          fontSize={ 60 }
        />
        <View style={ menuContainer }>
            {
              options.map(({ label, imageSource, onPress }, i) => 
                <OptionCard 
                  key={i}
                  label={label} 
                  imageSource={ imageSource } 
                  onPress={ onPress } 
                />)
            }
        </View>
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
  detectObject: (type) => dispatch(detectObject(type))
});

export default connect( setStateToProps, setDispatchToProps)(Dashboard);