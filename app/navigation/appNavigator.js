import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingEditScreen from "../screens/ListingEditScreen";
import ListingsScreen from "../screens/ListingsScreen";
import AccounScreen from "../screens/AccountScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";
import routes from "../navigation/routes";
import colors from "../config/colors";
import HabitsNavigator from "./HabitsNavigator";
import NuggetsNavigator from "./NuggetsNavigator";

const Tab = createBottomTabNavigator();

const appNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: colors.KUP2,
      activeTintColor: colors.white,
    }}
  >
    <Tab.Screen
      name="Habits"
      component={HabitsNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="floor-lamp" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Wisdom"
      component={NuggetsNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="brain" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default appNavigator;
