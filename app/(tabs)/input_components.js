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
        textAlign: "center"
    },

    input_body: {
        flex: 1,
        backgroundColor: "white",
        borderWidth: 1,
        outline: "none",
        padding: 10,
        borderRadius: 20,
        fontSize: 15
    }
})
export default Input_components;