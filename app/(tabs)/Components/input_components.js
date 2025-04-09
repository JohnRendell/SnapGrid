import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native"

const Input_components = props =>{
    return (
        <View style={{flexDirection: "column", gap: 6}}>
            <Text style={style.input_label}>{props.label}</Text>
            <TextInput 
                style={style.input_body}
                placeholder={props.placeholder_text}
            />
        </View>
    )
}

const style = StyleSheet.create({
    input_label: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 15
    },

    input_body: {
        flex: 1,
        backgroundColor: "#D9D9D9",
        borderWidth: 1,
        borderBottomWidth: 5,
        outline: "none",
        padding: 10,
        borderRadius: 20,
        fontSize: 14,
        textAlign: "center"
    }
})
export default Input_components;