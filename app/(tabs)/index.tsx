import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Platform } from "react-native";
import Helmet from "react-helmet";
import ButtonComponents from "./Components/button_components";
import InputComponents from "./Components/input_components"

export default function index(){
  return (
    <SafeAreaView style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        {Platform.OS === "web" && (
          <Helmet>
            <title>SnapGrid</title>
          </Helmet>
        )}
      
      <ButtonComponents label="Test button" onPress={()=>function(){}} />
      <InputComponents label="Test label" placeholder_text={"test placeholder"} />
    </SafeAreaView>
  )
}

