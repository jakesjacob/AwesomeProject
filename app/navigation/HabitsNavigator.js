import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HabitsScreen from "../screens/HabitsScreen";
import ListingsScreen from "../screens/ListingsScreen";

const Stack = createStackNavigator();

const HabitsNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Habits" component={HabitsScreen} />
  </Stack.Navigator>
);

export default HabitsNavigator;
