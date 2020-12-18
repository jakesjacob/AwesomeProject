import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    SafeAreaView, 
    Image, 
    TouchableWithoutFeedback, 
    TouchableOpacity, 
    TouchableHighlight, 
    Button,
    Alert,
    Platform,
    Dimensions,
    ImageBackground
  } from 'react-native';
  import {
    useDimensions,
    useDeviceOrientation
  } from '@react-native-community/hooks';

  import colors from "../config/colors";

function ImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image 
                resizeMode="contain" 
                style={styles.image} 
                source={require("../assets/five-dice.png")} 
            />
        </View>
    );
}

export default ImageScreen;




const styles = StyleSheet.create({
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position: "absolute",
        top: 40,
        left: 30,
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: "absolute",
        top: 40,
        right: 30,
    },
    container: {
        backgroundColor: colors.black,
        flex: 1,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    
})