import React from "react";
import { Image, View, StyleSheet } from "react-native";

const Header_logo_components = ()=>{
    return (
        <View style={{position: "absolute", top: 10, flexDirection: "row", alignItems: "center", alignSelf: "center", gap: 4 }}>
            <Image style={styles.imageFormat} source={require("../Images/Logo.png")}/>
            <Image style={styles.textLogoFormat} source={require("../Images/TextLogo.png")}/>
        </View>
    )
}

const styles = StyleSheet.create({
    imageFormat: {
        width: 150,
        height: 150
    },

    textLogoFormat: {
        width: 400,
        height: 90
    }
})

export default Header_logo_components;