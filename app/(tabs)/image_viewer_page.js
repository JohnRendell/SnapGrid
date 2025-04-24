import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import Navigation_components from "./Components/navigation_components";
import { useNavigation } from "expo-router";
import { MasonryFlashList } from "@shopify/flash-list";

import { DummyData_User_Profile, DummyData_Home_Page } from "./dummyData (aalisin pagka may backend na)";

const ImageDisplay = ({img, userID}) =>{
    const navigation = useNavigation();
    const randomHeight = Math.floor(Math.random() * 50) + 450;

    return (
        <TouchableOpacity style={{flex: 1, margin: 10 }} onPress={()=> navigation.navigate("Image_Viewer_UserPage", { userID: userID }) }>
            <Image style={{borderRadius: 20, height: randomHeight }} source={img} resizeMode="cover" />
        </TouchableOpacity>
    )
}

const Image_Viewer_Page = () =>{
    const route = useRoute();
    const { userID } = route.params
    const profile = DummyData_User_Profile.find(data => userID == data.userID)

    return (
        <View style={{ flex: 1, backgroundColor: "#4A90E2", padding: 10, gap: 10 }}>
            {/* User profile */}
            <View style={styles.userProfileView}>
                <View style={{flexGrow: 1, width: "100%", overflow: "hidden"}}>
                    <Image style={styles.userProfile} source={profile.img} resizeMode="cover" />
                </View>

                <View style={{width: "100%", height: "auto", flexDirection: "row", padding: 10, alignItems: "center", gap: 10, justifyContent: "center" }}>
                    <Image style={styles.userProfileLogo} source={profile.img}/>
                    <Text style={{ fontFamily: "Lexend-Deca", fontSize: 20, fontWeight: "bold" }}>{profile.username}</Text>

                    {/*Add touchable opacity */}
                    <Image style={{ width: 40, height: 40 }} source={require("./Images/Download.png")}/>
                    <Image style={{ width: 40, height: 40 }} source={require("./Images/Favorite.png")}/>
                </View>
            </View>

            {/*Related Images */}
            <View style={styles.contentView}>
                <MasonryFlashList 
                    data={DummyData_Home_Page} 
                    renderItem={({item}) => <ImageDisplay img={item.img} userID={item.userID} />} 
                    keyExtractor={item => item.id} 
                    numColumns={2} 
                    contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 10 }}
                    showsHorizontalScrollIndicator={false}
                    estimatedItemSize={200}
                />
            </View>

            {/*Footer nav */}
            <Navigation_components />
        </View>
    )
}

const styles = StyleSheet.create({
    userProfileView: {
        width: "100%",
        height: "40%",
        backgroundColor: "#D7FDF0",
        borderWidth: 2,
        borderRadius: 30,
        borderColor: "#001524",
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 10
    },

    userProfile: {
        width: "100%",
        height: "100%",
        borderRadius: 20,
    },

    userProfileLogo: {
        width: 50,
        height: 50,
        borderRadius: "100%"
    },

    contentView: {
        width: "100%",
        height: "45%",
        backgroundColor: "#D7FDF0",
        borderWidth: 2,
        borderRadius: 30,
        borderColor: "#001524",
        padding: 10
    }
})

export default Image_Viewer_Page