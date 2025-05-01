import React,{ useEffect, useRef } from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity, Animated } from "react-native";
import { BlurView } from "expo-blur";
import { useNavigation } from "expo-router";
import MyButton from "./Components/button_components";
import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const User_profile = ({ isOpen, isClose })=>{
    const navigate = useNavigation();
    const screenHeight = parseInt(Dimensions.get("window").height);
    
    const slideAnim = useRef(new Animated.Value(screenHeight)).current;
    const opacityAnim = useRef(new Animated.Value(0)).current;

     useEffect(() => {
    if (isOpen) {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: screenHeight - 840,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: screenHeight,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [isOpen]);

    return (
        <BlurView intensity={100} tint="dark" style={style.user_view}>
            {/*Clickable outside to close the panel*/}
            <TouchableOpacity style={{width: Dimensions.get("window").width, height: Dimensions.get("window").height, backgroundColor: "transparent"}} onPress={isClose}/>

            {/*Profile Panel*/}
            <Animated.View style={[style.user_container, { transform: [{ translateY: slideAnim }], opacity: opacityAnim }]}>
              <SafeAreaView>
                {/*Profile */}
                <View style={{ width: "100%", flexDirection: "row", gap: 10, alignItems: "center", justifyContent: "center" }}>
                    <Image style={style.user_profile} source={require("./Dummy_Images_(Aalisin pagka may backend na)/bruh.jpg")} resizeMode="cover" />

                    <View style={{ flexGrow: 1, justifyContent: "center", gap: 10, alignItems: "center", padding: 10 }}>
                        {/*User name tag*/}
                        <View style={{backgroundColor: "#D7FDF0", padding: 10, borderWidth: 2, borderBottomWidth: 10 }}>
                            <Text style={{fontFamily: "Lexend-Deca", fontSize: 15 }}>staticUsername_Placeholder34</Text>
                        </View>

                        {/*Edit profile button*/}
                        <View style={{alignSelf: "flex-start"}}>
                            <MyButton width={100} label={"Edit Profile"} textSize={12} borderRadius={0} />
                        </View>
                    </View>
                </View>

                {/**Buttons */}
                <MyButton onPress={()=> navigate.replace("User_Saved_Page") } label={"Your Saved Photos"} textSize={18} borderRadius={0} />
                  
                <MyButton width={200} onPress={()=> navigate.replace("landing_page")} label={"Log out"} textSize={18} borderRadius={0} backgroundColor="red" />
              </SafeAreaView>
            </Animated.View>
        </BlurView>
    )
}

const style = StyleSheet.create({
    user_view:{
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        zIndex: 10
    },

    user_container: {
        alignSelf: "stretch",
        backgroundColor: "#4A90E2", 
        padding: 10,
    },

    user_profile: {
        width: 100,
        height: 100,
        borderRadius: 100
    }
})

export default User_profile;