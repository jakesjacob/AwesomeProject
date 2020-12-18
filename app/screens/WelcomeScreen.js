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

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/sunset.jpg")}
        >
            <View style={styles.logocontainer}>
                <Fontisto name="sourcetree" size={200} color={colors.KUPblue} ></Fontisto>
                <AppText>The Keeping Up Project</AppText>
            </View>
            <View style={styles.loginbutton}>
                <Button 
                    title="Login"
                    color={colors.KUPblue}
                ></Button>
            </View>
            <View style={styles.registerbutton}>
            <Button 
                    title="Register"
                    color={colors.KUPgreen}
                ></Button>
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
        //alignItems: 'center',
        //justifyContent: 'center',
        
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      },

      background: {
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
          
      },
      loginbutton: {
          width: "100%",
          height: 70,
          backgroundColor: colors.KUPgreen,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 15,
      },
      registerbutton: {
          width: "100%",
          height: 70,
          backgroundColor: colors.KUPblue,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 15,
          marginBottom: 30,
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