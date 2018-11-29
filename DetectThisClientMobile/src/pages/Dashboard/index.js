import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

import FlexContainer from '../../components/containers/Flex';
import MainHeader from '../../components/headers/MainHeader';
import OptionCard from '../../components/cards/option';

export default class Dashboard extends Component {

  test = (message) => {
    alert(message);
  }

  render() {
    const { menuContainer } = styles;
    const options = [
      {
        label: 'Text',
        imageSource: 'https://fsymbols.com/thumbs/95.png',
        onPress: () => this.test('text')
      },
      {
        label: 'Brand',
        imageSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQExnL_dTvPpWmOab_B_3KIRd14KSMKtgCB0D_6dc1BOBTZnqQYiQ',
        onPress: () => this.test('brand')
      },
      {
        label: 'Random',
        imageSource: 'https://i.ebayimg.com/images/g/hG8AAOSwFNZWuxqH/s-l300.jpg',
        onPress: () => this.test('random')
      },
    ];
    return (
      <FlexContainer>
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