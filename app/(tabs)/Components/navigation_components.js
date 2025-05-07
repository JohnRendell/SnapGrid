import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from 'expo-router';
import User_profile from '../user_profile';
import { LinearGradient } from 'expo-linear-gradient';

const Navigation_components = () => {
  const navigation = useNavigation();
  const [showPanel, setShowPanel] = useState(false);

  return (
    <>

    
      
      <View style={styles.bottomNav}>
          <LinearGradient
                    colors={['transparent', '#D7FDF0']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 0.9  }}
                    style={StyleSheet.absoluteFill} 
      />
       
        <View style={styles.buttonBox}>
            
        <TouchableOpacity onPress={() => { navigation.replace("Home_screen") }}>
          <Image source={require('../Images/home.png')} style={styles.buttonImage} />
        </TouchableOpacity>

        {/* <TouchableOpacity onPress={() => {}}> */}
          <Image source={require('../Images/upload.png')} style={styles.buttonImage} />
        {/* </TouchableOpacity> */}

        <TouchableOpacity onPress={() => {setShowPanel(true)}}>
          <Image source={require('../Images/profile.png')} style={styles.buttonImage} />
            </TouchableOpacity>
            
           
          </View>
          
      </View>
      

      {showPanel && (
        <User_profile 
          isOpen={showPanel}
          isClose={()=>setShowPanel(false)}
        />
      )}

    </>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingTop: 30,
  },
  buttonBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    paddingBottom: 20
  },
  buttonImage: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },
});

export default Navigation_components;