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
    const profile = DummyData_User_Profile.img

    return (
        <View style={{ flex: 1, backgroundColor: "#4A90E2", padding: 10, gap: 10 }}>
            <Text>ID: {userID}</Text>

            {/* User profile */}
            <View style={styles.userProfileView}>
                <Image style={styles.userProfile} source={require("./Dummy_Images_(Aalisin pagka may backend na)/Patrick.webp")} />

                <Image style={styles.userProfileLogo} source={require("./Dummy_Images_(Aalisin pagka may backend na)/Patrick.webp")}/>
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
        alignItems: "center"
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
        height: "40%",
        marginBottom: 80,
        backgroundColor: "#D7FDF0",
        borderWidth: 2,
        borderRadius: 30,
        borderColor: "#001524",
        padding: 10
    }
})

export default Image_Viewer_Page