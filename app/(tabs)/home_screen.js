import React, {useState, useEffect} from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import Header_logo_components from "./Components/header_logo_components";
import { MasonryFlashList } from "@shopify/flash-list";
import Navigation_components from "./Components/navigation_components";
import { useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

{/*Alisin pagka may backend na*/}
import { DummyData_Home_Page } from "./dummyData"

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


const Home_screen = ()=>{
    const [getSort, setSort] = useState(false)
    const [sortedData, setSortedData] = useState(DummyData_Home_Page)

    const sort_page = () => {
        const sorted = [...DummyData_Home_Page].sort((a, b) =>
          getSort ? a.id - b.id : b.id - a.id
        );
        setSortedData(sorted);
      };
      

    return(
        <SafeAreaView style={{flex: 1, width: "100%", height: "100%", backgroundColor: "#4A90E2" }}>

            {/* Logo on top */}
            <Header_logo_components />

            {/* Contents*/}
            <View style={styles.body_view}>

                {/*sort*/}
                <View style={{position: "absolute", bottom: 80, left: 20, zIndex: 10, flexDirection: "row", alignContent: "center", alignSelf: "flex-start"}}>
                    <View style={{backgroundColor: "#D7FDF0", padding: 5, borderWidth: 2, borderBottomWidth: 10, alignContent: "center",  justifyContent: "center" }}>
                        <Text style={{fontFamily: "Lexend-Deca", fontSize: 15 }}>Sort by: </Text>
                    </View>
                    <TouchableOpacity 
                        style={{backgroundColor: "#D7FDF0", padding: 5, borderWidth: 2, borderBottomWidth: 10, alignContent: "center",  justifyContent: "center" }} 
                        onPress={()=>{
                            setSort(!getSort)
                            sort_page()
                        }} 
                        activeOpacity={1}>
                            <Text style={{fontFamily: "Lexend-Deca", fontSize: 15 }}>{getSort ? "Descending" : "Ascending"}</Text>
                    </TouchableOpacity>
                </View>

                <MasonryFlashList 
                    data={sortedData} 
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
        backgroundColor: "#D7FDF0",
    },
})

export default Home_screen;