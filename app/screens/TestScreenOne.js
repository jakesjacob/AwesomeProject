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

function TestScreenOne(props) {
    const {landscape} = useDeviceOrientation();

    const handlePress = () => console.log("Text clicked");
    
    return (
        <SafeAreaView style={styles.container}>
      <View 
      style={{
        backgroundColor: "orange",
        width: "100%",
        height: landscape ? "100%" : "30%",
      }}
      ></View>

      <Text numberOfLines={2} onPress={handlePress}>Open up App.js to start working on your app!</Text>
      
      <TouchableHighlight onPress={() => console.log("image tapped")}>
        <Image 
        //resizeMode={"center"}
        blurRadius={0 }
        source={{ 
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300",
        }} />
      </TouchableHighlight>
      <Button 
      color="orange"
      title="PRESS THIS BUTTON!" onPress={() => Alert.alert("The truth teller", "Will Jake and Jake get a Warzone win soon?", [
        {text: "yes", onPress:() => console.log("yes")},
        {text: "no"},
      ])} />
      <Button 
      title="button 2"
      onPress={() =>
      Alert.prompt("Hi Mum", "Write your message", text => console.log(text))
      }
      />
      <StatusBar style="auto" />
    </SafeAreaView>

        
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      },
})

export default TestScreenOne;