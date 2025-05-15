import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input_components from "./Components/input_components";
import { useNavigation } from '@react-navigation/native';
import MyButton from "./Components/button_components";

import AsyncStorage from '@react-native-async-storage/async-storage';

const Login_page = ()=>{
    const navigation = useNavigation();
    const [getUsername, setUsername] = useState("")
    const [getPassword, setPassword] = useState("")

    const validate_login = async ()=>{
        if(!getUsername || !getPassword){
            alert("Fields must be filled.")
        }
        else{
            try {
               await AsyncStorage.setItem('user_login', JSON.stringify({ username: getUsername, password: getPassword}));

                navigation.replace("Home_screen")
            } 
            
            catch (e) {
                console.error('Failed to save', e);
            }
        }
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex: 1, backgroundColor: "#001524"}}>
            <SafeAreaView style={style.body_view}>
                {/*Header*/}
                <Text style={{position: "absolute", top: 15, justifyContent: "center", alignSelf: "center", fontSize: 40, fontWeight: "Bold", color: "#001524", fontFamily: "Lexend-Deca" }}>Login</Text>

                {/*Close button*/}
                <TouchableOpacity onPress={()=> navigation.replace("landing_page")}>
                    <View style={{position: "absolute", top: 10, right: 10, width: 30, height: 30, backgroundColor: "red", borderWidth: 1, borderRadius: "100%"}}></View>
                </TouchableOpacity>

                {/*Contents*/}
                <View style={{flexDirection: "column", gap: 40, flex: 1, width: "100%", alignSelf: "center", justifyContent: "center", padding: 20}}>
                    <Input_components label="Username" placeholder_text="Enter Username..." isPassword={false} maxLength={20} text_value={(text)=>setUsername(text)}/>
                    <Input_components label="Password" placeholder_text="Enter Password..." isPassword={true} maxLength={20} text_value={(text)=>setPassword(text)}/>

                    <TouchableOpacity onPress={()=> navigation.replace("sign_in_page")} style={{width: "100%", height: "auto"}}>
                        <Text style={{textAlign: "center", fontSize: 15, textDecorationLine: "underline", fontFamily: "Lexend-Deca", color: "#6584FF", width: 200, alignSelf: "center"}}>Dont have an account yet? Sign Up here!</Text>
                    </TouchableOpacity>
                </View>

                <View style={{width: "100%", height: "auto", position: "absolute", bottom: 10}}>
                    <MyButton onPress={()=> validate_login() } label="Proceed" backgroundColor="#47B129" textColor="white" textSize={15} width={100} />
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

const style = StyleSheet.create({
    body_view: {
        flex: 1,
        margin: 10,
        backgroundColor: "#D7FDF0",
        borderRadius: 30,
        gap: 40
    }
})

export default Login_page;