import React from 'react'
import {
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

export default PaperContainer = ({textContent}) => {
  const { text, scrollContainer } = styles;
  return (
    <ScrollView style={ scrollContainer }>
      <Text style={ text }  selectable={ true }>{textContent}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    margin: 50,
    marginBottom: 150,
    padding: 5,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
  text: {
    fontSize: 20,
    textAlign: 'center'
  },
});


