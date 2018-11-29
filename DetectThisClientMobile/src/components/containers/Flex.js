import React from 'react';
import { View, StyleSheet } from 'react-native'

export default FlexContainer = ({ children, backgroundColor }) => {
  return (
		<View style={ [styles.container, { backgroundColor }] }>
			{ children }
		</View>
  )
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
});