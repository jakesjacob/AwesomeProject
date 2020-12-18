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

function TestScreenTwo(props) {
    return (
        <View
          style={{
            backgroundColor: "#fff",
            flex: 1,
            flexDirection: "column",
            //justifyContent: "center",
            //alignItems: "center",
            //alignContent: "center",
            //flexWrap: "wrap",
          }}
        >
          <View style={{
            backgroundColor: "dodgerblue",
            flex: 1,
            top: 10,
            position: "absolute",
            //alignSelf: "flex-start",
          }} />
          <View style={{
            backgroundColor: "gold",
            flex: 1,
          }} />
          <View style={{
            backgroundColor: "tomato",
            flex: 1,
          }} />
          <View style={{
            backgroundColor: "grey",
            flex: 1,
          }} />
          <View style={{
            backgroundColor: "green",
            flex: 1,
          }} />
        
        </View>
    );

}

export default TestScreenTwo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      },
    
})