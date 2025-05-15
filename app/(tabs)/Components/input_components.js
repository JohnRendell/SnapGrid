import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const Input_components = props =>{
    return (
        <View style={{flexDirection: "column", gap: 6, justifyContent: "center", alignItems: "center"}}>
            <Text style={style.input_label}>{props.label}</Text>
            <TextInput 
                style={style.input_body}
                placeholder={props.placeholder_text}
                secureTextEntry={props.isPassword}
                maxLength={props.maxLength}
                placeholderTextColor="#9B9B9B"
                onChangeText={props.text_value}
            />
        </View>
    )
}

const style = StyleSheet.create({
    input_label: {
        textAlign: "center",
        fontFamily: "Lexend-Deca",
        fontSize: 15,
    },

    input_body: {
        width: 300,
        height: 40,
        backgroundColor: "#D9D9D9",
        borderWidth: 1,
        borderColor: "#001524",
        borderBottomWidth: 5,
        outlineStyle: "none",
        padding: 10,
        borderRadius: 20,
        fontSize: 14,
        textAlign: "left",
        color: "black",
        fontFamily: "Lexend-Deca",
    }
})
export default Input_components;