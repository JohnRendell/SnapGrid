import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import Navigation_components from "./Components/navigation_components";
import { useNavigation } from "expo-router";
import { MasonryFlashList } from "@shopify/flash-list";
import { DummyData_User_Profile, DummyData_Home_Page } from "./dummyData (aalisin pagka may backend na)";

const ImageDisplay = ({img, userID}) =>{
   const [randomHeight, setRandomHeight] = useState(200);
    const navigation = useNavigation();

    useEffect(() => {
        const min = 200;
        const max = 400;
        const height = Math.floor(Math.random() * (max - min + 1)) + min;
        setRandomHeight(height);
    }, []); 

    return (
        <TouchableOpacity style={{ borderRadius: 5, flexGrow: 1, margin: 3, alignItems: "center", justifyContent: "center", overflow: "hidden" }} onPress={()=> navigation.replace("Image_Viewer_UserPage", { userID: userID }) }>
            <Image source={img} resizeMode="cover" style={{height: randomHeight, aspectRatio: 1}} />
        </TouchableOpacity>
    )
}

const Image_Viewer_Page = () =>{
    const route = useRoute();
    const { userID } = route.params;
    const postData = DummyData_Home_Page.find(data => userID == data.userID)
    const profileData = DummyData_User_Profile.find(data => userID == data.userID);
    const [isToggle, setToggle] = useState(true)

    return (
        <>
        <SafeAreaView style={styles.contentView}>
            {/*Related Images */}
            <MasonryFlashList 
                data={DummyData_Home_Page} 
                renderItem={({item}) => <ImageDisplay img={item.img} userID={item.userID} />} 
                keyExtractor={item => item.id} 
                numColumns={2} 
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                estimatedItemSize={200}
                ListHeaderComponent={
                    <View style={styles.previewImg}>
                        <Image style={{ borderRadius: 20, width: 340, height: 300 }} source={postData.img} resizeMode="contain" />

                        <View style={{alignSelf: 'stretch', flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                            {/*User info*/}
                            <View style={{flexDirection: "row", gap: 10, alignItems: "center"}}>
                                <Image style={styles.userProfileLogo} source={profileData.profile}/>
                                <Text style={{ fontFamily: "Lexend-Deca", fontSize: 20, fontWeight: "bold", color: "white" }}>{profileData.username}</Text>
                            </View>

                            <View style={{flexDirection: "row", gap: 5}}>
                                {/*Download and heart button*/}
                                <TouchableOpacity onPress={()=>{}}>
                                    <Image style={styles.buttonImage} source={require("./Images/Download.png")}/>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={()=>{setToggle(isToggle => !isToggle)}}>
                                    <Image source={isToggle ? require('./Images/Favorite.png') : require('./Images/FavoriteToggle.png')} style={styles.buttonImage} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                }
            />
        </SafeAreaView>

        {/*Footer nav */}
        <Navigation_components />
        </>
    )
}

const styles = StyleSheet.create({
    previewImg: {
        alignSelf: "stretch",
        overflow: "hidden",
        backgroundColor: "#001524",
        padding: 10,
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderBottomWidth: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderColor: "#4A90E2",
    },

    userProfileLogo: {
        width: 50,
        height: 50,
        borderRadius: 100
    },

    contentView: {
        flex: 1,
        backgroundColor: "#D7FDF0",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },

    buttonImage: {
        width: 40,
        height: 40,
    },
})

export default Image_Viewer_Page