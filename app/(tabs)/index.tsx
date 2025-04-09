import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Platform, Image, View, StyleSheet } from "react-native";
import Helmet from "react-helmet";
import ButtonComponents from "./Components/button_components";
import InputComponents from "./Components/input_components";

export default function index() {
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
      <ButtonComponents label="Login" onPress={() => {}} />
      <ButtonComponents label="Sign Up" onPress={() => {}} />
    </SafeAreaView>
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