import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const MyButton = ({ label, onPress, backgroundColor = '#007bff', textColor = '#fff' }) => {
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
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default MyButton;