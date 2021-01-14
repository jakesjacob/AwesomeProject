import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import Icon from "../components/Icon";
import { StatusBar } from "expo-status-bar";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ListItemSeparator from "../components/ListItemSeparator";

const KUPcategories = [
  {
    title: "Habit Building",
    value: 1,
    icon: {
      name: "floor-lamp",
      backgroundColor: colors.HabitBuilding,
    },
  },
  {
    title: "Personal Finance",
    value: 2,
    icon: {
      name: "cash-100",
      backgroundColor: colors.PersonalFinance,
    },
  },
  {
    title: "Mindfulness",
    value: 3,
    icon: {
      name: "brain",
      backgroundColor: colors.Mindfulness,
    },
  },
  {
    title: "Soft Skills",
    value: 4,
    icon: {
      name: "account-multiple",
      backgroundColor: colors.SoftSkills,
    },
  },
  {
    title: "Hard Skills",
    value: 5,
    icon: {
      name: "book-open-page-variant",
      backgroundColor: colors.HardSkills,
    },
  },
  {
    title: "Literacy",
    value: 6,
    icon: {
      name: "script-text-outline",
      backgroundColor: colors.Literacy,
    },
  },
  {
    title: "Life Philosphy",
    value: 7,
    icon: {
      name: "thought-bubble-outline",
      backgroundColor: colors.LifePhilosphy,
    },
  },
];

function NuggetsScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <FlatList
          data={KUPcategories}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              onPress={() => navigation.navigate(item.targetScreen)}
              IconComponent={
                <Icon backgroundColor={item.icon.backgroundColor} />
              }
            />
          )}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.KUP1,
  },
});

export default NuggetsScreen;
