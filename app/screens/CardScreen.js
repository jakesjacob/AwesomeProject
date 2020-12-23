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
import Card from '../components/Card';

export default function App() {
  return (
    <View style={styles.container} >
      <Card title="Red Jacket" subtitle="£100" image={require("../assets/sunset.jpg")} />
      <Card title="Red Jacket" subtitle="£100" image={require("../assets/sunset.jpg")} />
    </View> 
  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f4f4',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 100,
    padding: 20,
  },
});