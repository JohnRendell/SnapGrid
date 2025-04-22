import React from "react";
import { SafeAreaView } from "react-native";
import Header_logo_components from "./Components/header_logo_components";

const Home_screen = ()=>{
    return(
        <SafeAreaView style={{flex: 1}}>
            <Header_logo_components />
        </SafeAreaView>
    )
}

export default Home_screen;