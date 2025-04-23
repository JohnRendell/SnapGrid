import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Navigation_components = () => {
  return (
    <View style={styles.bottomNav}>
      <View style={styles.buttonBox}>
        <TouchableOpacity onPress={() => {}}>
          {/* <Image source={require('./path/to/image1.png')} style={styles.buttonImage} /> */}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          {/* <Image source={require('./path/to/image2.png')} style={styles.buttonImage} /> */}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          {/* <Image source={require('./path/to/image3.png')} style={styles.buttonImage} /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 10,
    elevation: 10, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 4,
  },
  buttonBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '90%',
  },
  buttonImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});

export default Navigation_components;