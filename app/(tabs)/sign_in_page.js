import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Input_components from "./Components/input_components";
import { useNavigation } from '@react-navigation/native';

const sign_in_page = ()=>{
    const navigation = useNavigation();
    return (
        <View style={{flex: 1, width: "100%", height: "100%", backgroundColor: "#4A90E2"}}>
            <View style={style.body_view}>
                {/*Header*/}
                <View style={{flexDirection: "row", alignContent: "center", alignItems: "center", padding: 10}}>
                    <View style={{flex: 1}}><Text style={{textAlign: "center", fontSize: 40, fontWeight: "bold", color: "#001524", fontFamily: "Lexend-Deca"}}>Sign Up</Text></View>

                    {/*Close button*/}
                    <TouchableOpacity onPress={()=> navigation.navigate("landing_page")}>
                        <View style={{width: 30, height: 30, backgroundColor: "red", borderRadius: "100%"}}></View>
                    </TouchableOpacity>
                </View>

                {/*Contents*/}
                <View style={{flexDirection: "column", gap: 30, justifyContent: "center", padding: 20}}>
                    <Input_components label="Username" placeholder_text="Type your username..."/>
                    <Input_components label="Password" placeholder_text="Type your password..."/>
                    <Input_components label="Confirm Password" placeholder_text="Re-type your password..."/>
                </View>

                <TouchableOpacity style={{width: "100%", height: "auto", position: "absolute", bottom: 10}}>
                    <Text style={{textAlign: "center", fontSize: 15, textDecorationLine: "underline", fontFamily: "Lexend-Deca"}}>Create Account</Text>
                </TouchableOpacity>
            </View>
        </View>
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

export default sign_in_page;