import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import { exp } from "react-native/Libraries/Animated/src/Easing";
import AccountScreen from "../screens/AccountScreen";
import MessageScreen from "../screens/MessageScreen";
import NuggetsScreen from "../screens/NuggetsScreen";
import NuggetsSettingsScreen from "../screens/NuggetsSettingsScreen";
import NuggetsInfoScreen from "../screens/NuggetsInfoScreen";

const Stack = createStackNavigator();

const NuggetsNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Nuggets" component={NuggetsScreen} />
    <Stack.Screen
      name="NuggetsSettingsScreen"
      component={NuggetsSettingsScreen}
    />
    <Stack.Screen name="NuggetsInfo" component={NuggetsInfoScreen} />
  </Stack.Navigator>
);

export default NuggetsNavigator;
