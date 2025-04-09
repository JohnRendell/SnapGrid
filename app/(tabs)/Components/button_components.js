import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const MyButton = ({ label, onPress, backgroundColor = '#D7FDF0', textColor = '#000' }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor }]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#D9D9D9",
    borderWidth: 1,
    borderBottomWidth: 5,
    outline: "none",
    padding: 5,
    borderRadius: 26,
    fontSize: 14,
    width: Dimensions.get('window').width - 60,
    margin: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default MyButton;
