import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Fontisto} from "@expo/vector-icons";
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
  import AppText from "../components/AppText/AppText";
  import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/sunset.jpg")}
            blurRadius={7}
        >
            
            <View style={styles.logocontainer}>
                <Fontisto name="sourcetree" size={200} color={colors.KUP2} ></Fontisto>
                <AppText>The Keeping Up Project</AppText>
            </View>
            <View style={styles.loginbutton}>
                <AppButton title="Login" onPress={() => console.log("tapped")}></AppButton>
            </View>
            <View style={styles.registerbutton}>
                <AppButton title="Register" color="KUP2" textColor="KUP1" onPress={() => console.log("tapped")}></AppButton>
            </View>
            <StatusBar style="auto" />
        </ImageBackground>
    );





        
}

export default WelcomeScreen;


const styles = StyleSheet.create({
    ContainerSafe: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      },

      background: {
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
          
      },
      loginbutton: {
          width: "80%",
          margin: 5,
      },
      registerbutton: {
          width: "80%",
          marginBottom: 60,
      },
      logo: {
          width: 160,
          height: 180,
      },
      logocontainer: {
        position: "absolute",
        top: 100,
        alignItems: "center"
      }
    
})