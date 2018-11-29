import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default MainHeader = ({ backgroundColor, headerTitle, color }) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
        <Text style={[styles.text, { color }]}>{ headerTitle }</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex:1,
    alignItems: 'center',
    borderBottomWidth: 0.5,
  },
  text: {
    fontSize: 40,
  }
});
