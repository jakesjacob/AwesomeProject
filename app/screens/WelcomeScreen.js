import { StatusBar } from "expo-status-bar";
import React from "react";
import { Fontisto } from "@expo/vector-icons";
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
  ImageBackground,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

import colors from "../config/colors";
import AppText from "../components/AppText/AppText";
import AppButton from "../components/AppButton";
import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground style={styles.background}>
      <View style={styles.logocontainer}>
        <Image
          source={require("../assets/title.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.loginbutton}>
        <AppButton
          title="Login"
          onPress={() => navigation.navigate(routes.LOGIN)}
        ></AppButton>
      </View>
      <View style={styles.registerbutton}>
        <AppButton
          title="Register"
          color="KUP2"
          onPress={() => navigation.navigate(routes.REGISTER)}
        ></AppButton>
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: colors.KUP1,
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
    width: 860,
    height: 380,
  },
  logocontainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
});
