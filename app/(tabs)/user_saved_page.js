import React from "react";
import { SafeAreaView, StyleSheet, View, Image } from "react-native";
import Header_logo_components from "./Components/header_logo_components";
import { MasonryFlashList } from "@shopify/flash-list";
import Navigation_components from "./Components/navigation_components";
import Header_bar_component from "./Components/header_bar_component";
import ButtonComponents from "./Components/button_components";

{/*Alisin pagka may backend na*/}
import { DummyData_Home_Page } from "./dummyData (aalisin pagka may backend na)"

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
            <Header_logo_components/>

            {/* Header bar */}
            <Header_bar_component label="Your Saved Photos" textSize={26} width="85%" borderRadius={6} />

            <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                <ButtonComponents label="FAVORITES" textSize={13} width="35%" borderRadius={6} margin={0} />
                <ButtonComponents label="POSTED BY YOU" textSize={13} width="35%" borderRadius={6} margin={0}/>
            </View>


            {/* Contents*/}
            <View style={styles.body_view}>
                <MasonryFlashList 
                    data={DummyData_Home_Page} 
                    renderItem={({item}) => <ImageDisplay img={item.img} />} 
                    keyExtractor={item => item.id} 
                    numColumns={2} 
                    contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 10 }}
                    showsHorizontalScrollIndicator={false}
                    estimatedItemSize={200}
                />
            </View>

            {/* Footer nav */}

            <Navigation_components />
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    body_view: {
        flex: 1,
        margin: 10,
        marginBottom: 80,
        backgroundColor: "#D7FDF0",
        borderWidth: 2,
        borderRadius: 30,
        borderColor: "#001524",
        padding: 10
    },


})

export default Home_screen;