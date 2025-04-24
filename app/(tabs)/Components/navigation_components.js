import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from 'expo-router';

const Navigation_components = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bottomNav}>
      <View style={styles.buttonBox}>
        <TouchableOpacity onPress={() => { navigation.navigate("Home_screen") }}>
          <Image source={require('../Images/home.png')} style={styles.buttonImage} />
        </TouchableOpacity>

        {/* <TouchableOpacity onPress={() => {}}> */}
          <Image source={require('../Images/upload.png')} style={styles.buttonImage} />
        {/* </TouchableOpacity> */}

        {/* <TouchableOpacity onPress={() => {}}> */}
          <Image source={require('../Images/profile.png')} style={styles.buttonImage} />
        {/* </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderWidth: 2,
    borderRadius: 11,
    backgroundColor: '#D7FDF0',
    alignItems: 'center',
    paddingTop: 2,
    paddingBottom: 2,
    margin: 10,
    elevation: 10, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 4,
  },
  buttonBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
  },
  buttonImage: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },
});

export default Navigation_components;