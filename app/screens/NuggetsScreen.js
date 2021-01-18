import React, { useState } from "react";
import { StyleSheet, View, FlatList, Text, Image } from "react-native";
import Icon from "../components/Icon";
import { StatusBar } from "expo-status-bar";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ListItemSeparator from "../components/ListItemSeparator";
import routes from "../navigation/routes";
import ListItemDeletAction from "../components/ListItemDeletAction";
import ListEnable from "../components/ListEnable";
import ListDisable from "../components/ListDisable";

const KUPcategories = [
  {
    title: "Habit Building",
    value: 1,
    icon: {
      name: "floor-lamp",
      backgroundColor: colors.HabitBuilding,
    },
    targetScreen: "NuggetsInfoScreen",
    color: colors.HabitBuilding,
    active: true,
  },
  {
    title: "Personal Finance",
    value: 2,
    icon: {
      name: "cash-100",
      backgroundColor: colors.PersonalFinance,
    },
    targetScreen: "NuggetsInfoScreen",
    color: colors.PersonalFinance,
    active: true,
  },
  {
    title: "Mindfulness",
    value: 3,
    icon: {
      name: "brain",
      backgroundColor: colors.Mindfulness,
    },
    targetScreen: "NuggetsInfoScreen",
    color: colors.Mindfulness,
    active: true,
  },
  {
    title: "Soft Skills",
    value: 4,
    icon: {
      name: "account-multiple",
      backgroundColor: colors.SoftSkills,
    },
    targetScreen: "NuggetsInfoScreen",
    color: colors.SoftSkills,
    active: true,
  },
  {
    title: "Hard Skills",
    value: 5,
    icon: {
      name: "book-open-page-variant",
      backgroundColor: colors.HardSkills,
    },
    targetScreen: "NuggetsInfoScreen",
    color: colors.HardSkills,
    active: true,
  },
  {
    title: "Literacy",
    value: 6,
    icon: {
      name: "script-text-outline",
      backgroundColor: colors.Literacy,
    },
    targetScreen: "NuggetsInfoScreen",
    color: colors.Literacy,
    active: true,
  },
  {
    title: "Life Philosphy",
    value: 7,
    icon: {
      name: "thought-bubble-outline",
      backgroundColor: colors.LifePhilosphy,
    },
    targetScreen: "NuggetsInfoScreen",
    color: colors.LifePhilosphy,
    active: true,
  },
  {
    title: "Wisdom Settings",
    value: 8,
    icon: {
      name: "microsoft-xbox-controller-menu",
      backgroundColor: "grey",
    },
    targetScreen: "NuggetsSettingsScreen",
    active: true,
  },
];

function NuggetsScreen({ navigation }) {
  const [active, setActive] = useState(KUPcategories);

  const RightActions = (category) => {
    const newActive = (category.active = false);
    setActive(newActive);
  };

  const LeftActions = (category) => {
    const newActive = (category.active = true);
    setActive(newActive);
  };

  return (
    <Screen style={styles.screen}>
      <StatusBar style="auto" />
      <Image
        source={require("../assets/banner.png")}
        style={styles.banner}
        resizeMode="contain"
      />
      <View style={styles.container}>
        <FlatList
          data={KUPcategories}
          keyExtractor={(KUPcateogryItem) => KUPcateogryItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              onPress={() => navigation.navigate(routes.NUGGETS_INFO, item)}
              IconComponent={
                <Icon
                  backgroundColor={item.icon.backgroundColor}
                  name={item.icon.name}
                />
              }
              renderRightActions={() => (
                <ListEnable onPress={() => RightActions(item)} />
              )}
              renderLeftActions={() => (
                <ListDisable onPress={() => LeftActions(item)} />
              )}
              active={item.active}
            />
          )}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: -11,
  },
  screen: {
    backgroundColor: colors.KUP1,
  },
  banner: {
    width: "100%",
    height: 150,
  },
});

export default NuggetsScreen;
