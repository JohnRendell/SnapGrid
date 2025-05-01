import React from "react";
import { Image, View, StyleSheet } from "react-native";

const Header_logo_components = ()=>{
    return (
        <View style={{margin: 10, flexDirection: "row", alignItems: "center", alignSelf: "center", gap: 4 }}>
            <Image style={styles.imageFormat} source={require("../Images/Logo.png")}/>
            <Image style={styles.textLogoFormat} source={require("../Images/SnapGridTextLogo.png")}/>
        </View>
    )
}

const styles = StyleSheet.create({
    imageFormat: {
        width: 60,
        height: 60
    },

    textLogoFormat: {
        width: 200,
        height: 50
    }
})

export default Header_logo_components;