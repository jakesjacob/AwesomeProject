import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import { exp } from "react-native/Libraries/Animated/src/Easing";
import AccountScreen from "../screens/AccountScreen";
import MessageScreen from "../screens/MessageScreen";
import NuggetsScreen from "../screens/NuggetsScreen";

const Stack = createStackNavigator();

const NuggetsNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Nuggets" component={NuggetsScreen} />
  </Stack.Navigator>
);

export default NuggetsNavigator;
