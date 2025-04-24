import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Platform, Image, StyleSheet } from "react-native";
import Helmet from "react-helmet";
import ButtonComponents from "./Components/button_components";
import Login_Page from "./login_page";
import Sign_in_Page from "./sign_in_page";
import Home_screen from "./home_screen";
import Image_Viewer_Page from "./image_viewer_page";

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
            source={require("./Images/TextLogo.png")}
            style={styles.textlogo}
            resizeMode="contain"
          />
      
          {/* Buttons */}
          <ButtonComponents label="Login" onPress={()=>{navigation.navigate('login_page')}} />
        </SafeAreaView>
  )
}

export default function index() {
  const [loaded, error] = useFonts({
    'Lexend-Deca': require('../../assets/fonts/Lexend Deca/static/LexendDeca-Regular.ttf'),
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
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4A90E2",
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 10,
  },
   textlogo: {
    width: 250,
    height: 100,
    marginBottom: 10,
  },
});