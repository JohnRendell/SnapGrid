import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import Header_logo_components from "./Components/header_logo_components";
import { MasonryFlashList } from "@shopify/flash-list";
import Navigation_components from "./Components/navigation_components";
import { useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

{/*Alisin pagka may backend na*/}
import { DummyData_Home_Page } from "./dummyData (aalisin pagka may backend na)"

const ImageDisplay = ({img, userID}) =>{
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={{ borderRadius: 5, margin: 5, alignItems: "center", justifyContent: "center", overflow: "hidden" }} onPress={()=> navigation.replace("Image_Viewer_UserPage", { userID: userID }) }>
            <Image source={img} resizeMode="contain" />
        </TouchableOpacity>
    )
}


const Home_screen = ()=>{
    return(
        <SafeAreaView style={{flex: 1, width: "100%", height: "100%", backgroundColor: "#4A90E2" }}>

            {/* Logo on top */}
            <Header_logo_components />

            {/* Contents*/}
            <View style={styles.body_view}>
                {/*sort*/}
                <View style={{flexDirection: "row", alignContent: "center", alignSelf: "flex-end"}}>
                    <View style={{backgroundColor: "#D7FDF0", padding: 5, borderWidth: 2, borderBottomWidth: 10, alignContent: "center",  justifyContent: "center" }}>
                        <Text style={{fontFamily: "Lexend-Deca", fontSize: 12 }}>Sort by: </Text>
                    </View>
                    <TouchableOpacity style={{backgroundColor: "#D7FDF0", padding: 5, borderWidth: 2, borderBottomWidth: 10, alignContent: "center",  justifyContent: "center" }}><Text tyle={{fontFamily: "Lexend-Deca", fontSize: 12 }}>Ascending</Text></TouchableOpacity>
                </View>

                <MasonryFlashList 
                    data={DummyData_Home_Page} 
                    renderItem={({item}) => <ImageDisplay img={item.img} userID={item.userID} />} 
                    keyExtractor={item => item.id} 
                    numColumns={2} 
                    contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 10 }}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
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