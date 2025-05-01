import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Platform, Image, StyleSheet } from "react-native";
import Helmet from "react-helmet";
import ButtonComponents from "./Components/button_components";
import Login_Page from "./login_page";
import Sign_in_Page from "./sign_in_page";
import Home_screen from "./home_screen";
import Image_Viewer_Page from "./image_viewer_page";
import User_saved_page from "./user_saved_page";
import { LinearGradient } from 'expo-linear-gradient';

import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

const Landing_Page = ()=>{
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>

         {/* Gradient background */}
        <LinearGradient
          colors={['#001524', '#D7FDF0']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 2.5  }}
          style={StyleSheet.absoluteFill} 
        />


          {Platform.OS === "web" && (
            <Helmet>
              <title>SnapGrid</title>
            </Helmet>
          )}

          {/* Logo Image */}
          <Image
            source={require("./Images/Logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />

          {/* SnapGrid Text Image */}
          <Image
            source={require("./Images/SnapGridTextLogo.png")}
            style={styles.textlogo}
            resizeMode="contain"
          />
      
          {/* Buttons */}
      <ButtonComponents label="Login" textSize={20} width={170} borderRadius={13} onPress={() => { navigation.replace('login_page') }} />
      
      <ButtonComponents label="Sign up" textSize={20} width={170} borderRadius={13} onPress={() => { navigation.replace('sign_in_page') }} />
      
    

     
      
        </SafeAreaView>
  )
}

export default function index() {
  const [loaded, error] = useFonts({
    'Lexend-Deca': require('@/assets/fonts/Lexend Deca/static/LexendDeca-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }


  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="landing_page" component={Landing_Page} />
      <Stack.Screen name="login_page" component={Login_Page} />
      <Stack.Screen name="sign_in_page" component={Sign_in_Page} />
      <Stack.Screen name="Home_screen" component={Home_screen} />
      <Stack.Screen name="Image_Viewer_UserPage" component={Image_Viewer_Page} />
      <Stack.Screen name="User_Saved_Page" component={User_saved_page} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#001524",
  },
  logo: {
    marginTop: 120,
    width: 120,
    height: 120,
  },
   textlogo: {
    width: 300,
    height: 200,
  },
});