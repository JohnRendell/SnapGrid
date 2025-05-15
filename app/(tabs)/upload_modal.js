import React,{ useState,useEffect, useRef } from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity, Animated } from "react-native";
import { BlurView } from "expo-blur";
import { useNavigation } from "expo-router";
import MyButton from "./Components/button_components";
import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MasonryFlashList } from "@shopify/flash-list";
import { DummyData_Home_Page } from "./dummyData (aalisin pagka may backend na)"

const Upload_modal = ({ isOpen, isClose })=>{
    const navigate = useNavigation();
    const screenHeight = parseInt(Dimensions.get("window").height);
    const data = DummyData_Home_Page
    
    const slideAnim = useRef(new Animated.Value(screenHeight)).current;
    const opacityAnim = useRef(new Animated.Value(0)).current;

    const ImageDisplay = ({img, userID}) =>{
       const [randomHeight, setRandomHeight] = useState(200);
        const navigation = useNavigation();
    
        useEffect(() => {
            const min = 200;
            const max = 100;
            const height = Math.floor(Math.random() * (max - min + 1)) + min;
            setRandomHeight(height);
        }, []); 
    
        return (
            <TouchableOpacity style={{ borderRadius: 5, flexGrow: 1, margin: 3, alignItems: "center", justifyContent: "center", overflow: "hidden" }} >
                <Image source={img} resizeMode="cover" style={{height: randomHeight, aspectRatio: 1}} />
            </TouchableOpacity>
        )
    }

     useEffect(() => {
    if (isOpen) {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: screenHeight - 1000,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: screenHeight,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [isOpen]);

    return (
        <SafeAreaView style={style.user_view}>
          <BlurView intensity={100} tint="dark">
            {/*Clickable outside to close the panel*/}
            <TouchableOpacity style={{width: Dimensions.get("window").width, height: Dimensions.get("window").height, backgroundColor: "transparent"}} onPress={isClose}/>

            {/*Profile Panel*/}
            <Animated.View style={[style.user_container, { transform: [{ translateY: slideAnim }], opacity: opacityAnim }]}>
                    <View style={{ alignItems: "center" }}>
                        
    
                        {/* Panu un ditu?? hjahahah */}


                        <Text style={{ fontFamily: "Lexend-Deca", fontSize: 20, fontWeight: "bold", color: "white" }}>All Photos</Text>
                     </View>
                             <MasonryFlashList 
                                 data={data} 
                                 renderItem={({item}) => <ImageDisplay img={item.img} userID={item.userID} />} 
                                 keyExtractor={item => item.id} 
                                 numColumns={3} 
                                 contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 10 }}
                                 showsHorizontalScrollIndicator={false}
                                 showsVerticalScrollIndicator={false}
                                 estimatedItemSize={200}
                        />
                
                        
            </Animated.View>
        </BlurView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    user_view:{
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        zIndex: 10
    },

    user_container: {
        alignSelf: "stretch",
        backgroundColor: "#001524", 
        padding: 10,
    },

    user_profile: {
        width: 100,
        height: 100,
        borderRadius: 100
    }
})

export default Upload_modal;