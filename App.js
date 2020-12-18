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
  Dimensions
} from 'react-native';
import {
  useDimensions,
  useDeviceOrientation
} from '@react-native-community/hooks';
import TestScreenOne from './app/screens/TestScreenOne';
import TestScreenTwo from './app/screens/TestScreenTwo';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ImageScreen from './app/screens/ImageScreen';
import BordersShadows from './app/screens/BordersShadows';

export default function App() {
  return <WelcomeScreen />
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
