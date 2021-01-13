import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListingEditScreen from "../screens/ListingEditScreen";
import ListingsScreen from "../screens/ListingsScreen";
import AccounScreen from "../screens/AccountScreen";

const Tab = createBottomTabNavigator();

const appNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Listings" component={ListingsScreen} />
    <Tab.Screen name="ListingEdit" component={ListingEditScreen} />
    <Tab.Screen name="Account" component={AccounScreen} />
  </Tab.Navigator>
);

export default appNavigator;
