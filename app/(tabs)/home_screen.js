import React from "react";
import { SafeAreaView } from "react-native";
import Header_logo_components from "./Components/header_logo_components";
import Navigation_components from "./Components/navigation_components";

const Home_screen = ()=>{
    return(
        <SafeAreaView style={{flex: 1}}>
            <Header_logo_components />

            <Navigation_components/>
        </SafeAreaView>
    )
}

export default Home_screen;