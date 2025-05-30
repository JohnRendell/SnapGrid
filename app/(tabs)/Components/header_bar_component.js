import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const Header = ({ label, onPress, backgroundColor = '#D7FDF0', textColor = '#000', textSize = 40, width = Dimensions.get('window').width - 60, borderRadius = 26,  margin = 10}) => {
  return (
    <View
      style={[styles.button, { backgroundColor, width, borderRadius, margin }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor, fontSize: textSize }]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#D9D9D9",
    borderWidth: 1,
    borderBottomWidth: 5,
    outlineStyle: "none",
    padding: 5,
    height: "auto",
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: "Lexend-Deca"
  },
});

export default Header;
