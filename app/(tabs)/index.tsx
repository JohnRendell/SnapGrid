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
      <Text>Hello Guys</Text>
      <Text>Hello world</Text>

      <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis mollitia ea, aliquam ex, perferendis repudiandae aperiam, nobis iusto unde perspiciatis debitis minima. Voluptatibus iusto aliquid quia mollitia sequi odio architecto.</Text>

      <Text>This is for testing</Text>

      
      

      
    </SafeAreaView>
  )
}

