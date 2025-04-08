import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Platform } from "react-native";
import Helmet from "react-helmet";
import Input_components from "./input_components";

export default function index(){
  return (
    <SafeAreaView style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        {Platform.OS === "web" && (
          <Helmet>
            <title>SnapGrid</title>
          </Helmet>
        )}

        <Input_components placeholder_text="this is a placeholder" label="this is input label"/>
      
    </SafeAreaView>
  )
}

