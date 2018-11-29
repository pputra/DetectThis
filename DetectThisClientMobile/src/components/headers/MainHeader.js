import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Header = ({ backgroundColor, headerTitle }) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
        <Text style={styles.text}>{ headerTitle }</Text>
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
    color: 'white',
  }
});

export default Header;