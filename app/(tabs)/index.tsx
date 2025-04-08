import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Platform } from "react-native";
import Helmet from "react-helmet";
import MyButton from "./Components/button";

export default function index(){
  return (
    <SafeAreaView style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        {Platform.OS === "web" && (
          <Helmet>
            <title>SnapGrid</title>
          </Helmet>
        )}
      
      <MyButton label="test" onPress={()=>function(){}} />

      
      

      
    </SafeAreaView>
  )
}

