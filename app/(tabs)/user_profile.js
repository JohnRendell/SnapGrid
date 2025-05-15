import React,{ useEffect, useRef, useState } from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity, Animated } from "react-native";
import { BlurView } from "expo-blur";
import { useNavigation } from "expo-router";
import MyButton from "./Components/button_components";
import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AsyncStorage from '@react-native-async-storage/async-storage';

const getUser_credentials = async ()=>{
  try {
      const user = await AsyncStorage.getItem('user_login');
      return JSON.parse(user);
  } catch (e) {
    console.error('Failed to load', e);
    return null;
  }
}

const User_profile = ({ isOpen, isClose })=>{
    const navigate = useNavigation();
    const screenHeight = parseInt(Dimensions.get("window").height);
    
    const slideAnim = useRef(new Animated.Value(screenHeight)).current;
    const opacityAnim = useRef(new Animated.Value(0)).current;

    const [username, setUsername] = useState("")

    useEffect(()=> {
      const fetchUser = async () => {
        const user = await getUser_credentials();
        if (user) {
          setUsername(user.username);
        }
      };
      fetchUser();
    }, [])

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
        <SafeAreaView style={style.user_view}>
          <BlurView intensity={100} tint="dark">
            {/*Clickable outside to close the panel*/}
            <TouchableOpacity style={{width: Dimensions.get("window").width, height: Dimensions.get("window").height, backgroundColor: "transparent"}} onPress={isClose}/>

            {/*Profile Panel*/}
            <Animated.View style={[style.user_container, { transform: [{ translateY: slideAnim }], opacity: opacityAnim }]}>
                {/*Profile */}
                <View style={{ width: "100%", flexDirection: "row", gap: 10, alignItems: "center", justifyContent: "center" }}>
                    <Image style={style.user_profile} source={require("./Dummy_Images/Profile/man_suit_profile.jpg")} resizeMode="cover" />

                    <View style={{ flexGrow: 1, justifyContent: "center", gap: 10, alignItems: "center", padding: 10 }}>
                        {/*User name tag*/}
                        <View style={{width: 200, backgroundColor: "#D7FDF0", padding: 10, borderWidth: 2, borderBottomWidth: 10 }}>
                            <Text style={{textAlign: "center", fontFamily: "Lexend-Deca", fontSize: 15 }}>{username}</Text>
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
            </Animated.View>
        </BlurView>
        </SafeAreaView>
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