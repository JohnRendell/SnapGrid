import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import Input_components from "./Components/input_components";
import { useNavigation } from '@react-navigation/native';
import MyButton from "./Components/button_components";
import { SafeAreaView } from "react-native-safe-area-context"

const Sign_in_page = ()=>{
    const navigation = useNavigation();
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex: 1, backgroundColor: "#4A90E2"}}>
            <SafeAreaView style={style.body_view}>
                {/*Header*/}
                <Text style={{position: "absolute", top: 15, justifyContent: "center", alignSelf: "center", fontSize: 40, fontWeight: "Bold", color: "#001524", fontFamily: "Lexend-Deca"}}>Sign Up</Text>

                {/*Close button*/}
                <TouchableOpacity onPress={()=> navigation.replace("landing_page")}>
                    <View style={{position: "absolute", top: 10, right: 10, width: 30, height: 30, backgroundColor: "red", borderWidth: 1, borderRadius: "100%"}}></View>
                </TouchableOpacity>

                {/*Contents*/}
                <View style={{flexDirection: "column", gap: 40, flex: 1, width: "100%", alignSelf: "center", justifyContent: "center", padding: 20}}>
                    <Input_components label="Username" placeholder_text="Type your username..." isPassword={false} maxLength={20}/>
                    <Input_components label="Password" placeholder_text="Type your password..." isPassword={true} maxLength={20}/>
                    <Input_components label="Confirm Password" placeholder_text="Re-type your password..." isPassword={true} maxLength={20}/>

                    <TouchableOpacity onPress={()=> {navigation.replace("login_page")}} style={{width: "100%", height: "auto"}}>
                        <Text style={{textAlign: "center", fontSize: 15, textDecorationLine: "underline", fontFamily: "Lexend-Deca"}}>Already have an account? Log In here!</Text>
                    </TouchableOpacity>
                </View>

                <View style={{width: "100%", height: "auto", position: "absolute", bottom: 10}}>
                    <MyButton onPress={()=> navigation.replace("Home_screen")} label="Proceed" backgroundColor="#47B129" textColor="white" textSize={15} width={"20%"} />
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
        borderWidth: 2,
        borderRadius: 30,
        borderColor: "#001524",
        gap: 40
    }
})

export default Sign_in_page;