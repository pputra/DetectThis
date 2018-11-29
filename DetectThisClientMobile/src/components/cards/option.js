import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native';

export default OptionCard = ({ onPress, label, imageSource }) => {
  const { cardContainer, imageContainer, labelContainer, labelStyle } = styles
  return (
    <TouchableOpacity onPress={ () => onPress()}>
      <View style={ cardContainer }>
        {
          imageSource ? <Image source={ { uri: imageSource } } style={ imageContainer }/> : <View style={ imageContainer }/>
        }
        <View style={ labelContainer }>
          <Text style={ labelStyle }>{ label }</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  cardContainer: {
    borderColor: 'black',
    borderWidth: 0.3,
    width: Dimensions.get('window').width - 30,
    height: 100,
    flexDirection: 'row',
    borderRadius: 0
  },
  imageContainer: {
    width: 100,
    height: 90,
    borderRadius: 10,
    margin: 5
  },
  labelContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelStyle: {
    fontSize: 40
  },
});
