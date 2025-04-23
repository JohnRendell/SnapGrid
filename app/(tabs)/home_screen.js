import React from "react";
import { SafeAreaView, StyleSheet, View, Image } from "react-native";
import Header_logo_components from "./Components/header_logo_components";
import { MasonryFlashList } from "@shopify/flash-list";
import Navigation_components from "./Components/navigation_components";

const imageDataSample = [
    { id: 1, img: require("./Images/shrek.png") },
    { id: 2, img: require("./Images/shrek.png") },
    { id: 3, img: require("./Images/shrek.png") },
    { id: 4, img: require("./Images/shrek.png") },
    { id: 5, img: require("./Images/shrek.png") },
    { id: 6, img: require("./Images/shrek.png") },
    { id: 7, img: require("./Images/shrek.png") },
    { id: 8, img: require("./Images/shrek.png") },
    { id: 9, img: require("./Images/shrek.png") },
    { id: 10, img: require("./Images/shrek.png") },
    { id: 11, img: require("./Images/shrek.png") },
    { id: 12, img: require("./Images/shrek.png") }
]

const ImageDisplay = ({img}) =>{
    const randomHeight = Math.floor(Math.random() * 200) + 450;

    return (
        <View style={{flex: 1, margin: 10 }}>
            <Image style={{borderRadius: 20, height: randomHeight }} source={img} resizeMode="cover" />
        </View>
    )
}


const Home_screen = ()=>{
    return(
        <SafeAreaView style={{flex: 1, width: "100%", height: "100%", backgroundColor: "#4A90E2" }}>

            {/* Logo on top */}
            <Header_logo_components />

            {/* Contents*/}
            <View style={styles.body_view}>
                <MasonryFlashList 
                    data={imageDataSample} 
                    renderItem={({item}) => <ImageDisplay img={item.img} />} 
                    keyExtractor={item => item.id} 
                    numColumns={2} 
                    contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 10 }}
                    showsHorizontalScrollIndicator={false}
                    estimatedItemSize={200}
                />
            </View>

            {/* Footer nav */}

            <Navigation_components/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    body_view: {
        flex: 1,
        margin: 10,
        backgroundColor: "#D7FDF0",
        borderWidth: 2,
        borderRadius: 30,
        borderColor: "#001524",
        padding: 10
    },
})

export default Home_screen;