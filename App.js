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
  TextInput
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
import AppButton from './app/components/AppButton';
import CardScreen from './app/screens/CardScreen';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessageScreen from './app/screens/MessageScreen';
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';

export default function App() {
  return (
    <Screen>
      <TextInput />
    </Screen>

  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f4f4',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 100,
    padding: 20,
  },
});
