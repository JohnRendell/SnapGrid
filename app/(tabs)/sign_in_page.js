import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import Input_components from "./Components/input_components";
import { useNavigation } from '@react-navigation/native';
import MyButton from "./Components/button_components";

const Sign_in_page = ()=>{
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{flex: 1, width: "100%", height: "100%", backgroundColor: "#4A90E2"}}>
            <View style={style.body_view}>
                {/*Header*/}
                <Text style={{position: "absolute", top: 15, justifyContent: "center", alignSelf: "center", fontSize: 40, fontWeight: "bold", color: "#001524", fontFamily: "Lexend-Deca"}}>Sign Up</Text>

                {/*Close button*/}
                <TouchableOpacity onPress={()=> navigation.navigate("landing_page")}>
                    <View style={{position: "absolute", top: 10, right: 10, width: 30, height: 30, backgroundColor: "red", borderWidth: 1, borderRadius: "100%"}}></View>
                </TouchableOpacity>

                {/*Contents*/}
                <View style={{flexDirection: "column", gap: 40, flex: 1, width: "100%", alignSelf: "center", justifyContent: "center", padding: 20}}>
                    <Input_components label="Username" placeholder_text="Type your username..."/>
                    <Input_components label="Password" placeholder_text="Type your password..."/>
                    <Input_components label="Confirm Password" placeholder_text="Re-type your password..."/>

                    <TouchableOpacity onPress={()=> {navigation.navigate("login_page")}} style={{width: "100%", height: "auto"}}>
                        <Text style={{textAlign: "center", fontSize: 15, textDecorationLine: "underline", fontFamily: "Lexend-Deca"}}>Already have an account? Log In here!</Text>
                    </TouchableOpacity>
                </View>

                <View style={{width: "100%", height: "auto", position: "absolute", bottom: 10}}>
                    <MyButton onPress={()=> navigation.navigate("Home_screen")} label="Proceed" backgroundColor="#47B129" textColor="white" textSize={15} width={"20%"} />
                </View>
            </View>
        </SafeAreaView>
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