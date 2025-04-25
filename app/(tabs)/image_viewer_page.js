import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import Navigation_components from "./Components/navigation_components";
import { useNavigation } from "expo-router";
import { MasonryFlashList } from "@shopify/flash-list";

import { DummyData_User_Profile, DummyData_Home_Page } from "./dummyData (aalisin pagka may backend na)";

const ImageDisplay = ({img, userID}) =>{
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={{ borderRadius: 5, margin: 5, alignItems: "center", justifyContent: "center", overflow: "hidden" }} onPress={()=> navigation.replace("Image_Viewer_UserPage", { userID: userID }) }>
            <Image source={img} resizeMode="contain" />
        </TouchableOpacity>
    )
}

const Image_Viewer_Page = () =>{
    const route = useRoute();
    const { userID } = route.params;
    const postData = DummyData_Home_Page.find(data => userID == data.userID)
    const profileData = DummyData_User_Profile.find(data => userID == data.userID);

    return (
        <>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#4A90E2", padding: 10, gap: 10, alignItems: "center" }}>
            {/* User preview post */}
            <View style={styles.previewImg}>
                <Image style={{ borderRadius: 20 }} source={postData.img} resizeMode="cover" />
            </View>

            {/*User info*/}
            <View style={{width: "100%", height: "auto", flexDirection: "row", padding: 10, alignItems: "center", gap: 10, justifyContent: "space-between" }}>
                <View style={{flexDirection: "row", gap: 5, alignItems: "center"}}>
                    <Image style={styles.userProfileLogo} source={profileData.profile}/>
                    <Text style={{ fontFamily: "Lexend-Deca", fontSize: 20, fontWeight: "bold" }}>{profileData.username}</Text>
                </View>

                <View style={{flexDirection: "row", gap: 5}}>
                    {/*Download and heart button*/}
                    <TouchableOpacity onPress={()=>{}}>
                        <Image style={styles.buttonImage} source={require("./Images/Download.png")}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>{}}>
                        <Image source={require('./Images/Favorite.png')} style={styles.buttonImage} />
                    </TouchableOpacity>
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
                    showsVerticalScrollIndicator={false}
                    estimatedItemSize={200}
                />
            </View>
        </SafeAreaView>

        {/*Footer nav */}
        <Navigation_components />
        </>
    )
}

const styles = StyleSheet.create({
    previewImg: {
        width: 325,
        height: 300,
        overflow: "hidden",
        backgroundColor: "#D7FDF0",
        borderWidth: 2,
        borderRadius: 30,
        borderColor: "#001524",
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },

    userProfileLogo: {
        width: 30,
        height: 30,
        borderRadius: 100
    },

    contentView: {
        width: 325,
        height: 250,
        backgroundColor: "#D7FDF0",
        borderWidth: 2,
        borderRadius: 30,
        borderColor: "#001524",
        padding: 10
    },

    buttonImage: {
        width: 40,
        height: 40,
    },
})

export default Image_Viewer_Page