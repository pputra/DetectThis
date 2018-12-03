import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';

export default TextCard = ({textContent}) => {
  const { cardContainer, text } = styles;
  return (
    <View style={cardContainer}>
      <Text style={text} selectable={true}>{textContent}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    width: Dimensions.get('window').width - 30,
    height: 100,
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  }
});