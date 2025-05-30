import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const MyButton = ({ label, onPress, backgroundColor = '#D7FDF0', borderBottomWidth = 5, textColor = '#000', textSize = 40, width = Dimensions.get('window').width - 60, borderRadius = 26 ,margin= 10,}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor, width, borderRadius, margin, borderBottomWidth }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor, fontSize: textSize }]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#D9D9D9",
    borderColor: "#001524",
    borderWidth: 1,
    outlineStyle: "none",
    padding: 5,
    height: "auto",
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 600,
    textAlign: 'center',
    fontFamily: "Lexend-Deca"
  },
});

export default MyButton;
