import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import Icon from "../components/Icon";
import { StatusBar } from "expo-status-bar";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ListItemSeparator from "../components/ListItemSeparator";

const KUPhabitItems = [
  {
    title: "Drink Water",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.KUP2,
    },
  },
  {
    title: "Breathing Exercises",
    icon: {
      name: "email",
      backgroundColor: colors.KUP2,
    },
    targetScreen: "Messages",
  },
  {
    title: "Practice Gratitude",
    icon: {
      name: "email",
      backgroundColor: colors.KUP2,
    },
    targetScreen: "Messages",
  },
  {
    title: "Smile at a Stranger",
    icon: {
      name: "email",
      backgroundColor: colors.KUP2,
    },
    targetScreen: "Messages",
  },
];

const userHabitItems = [
  {
    title: "Feed the cat",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.LifePhilosphy,
    },
  },
  {
    title: "30 press ups",
    icon: {
      name: "email",
      backgroundColor: colors.HabitBuilding,
    },
    targetScreen: "Messages",
  },
  {
    title: "30 Squats",
    icon: {
      name: "email",
      backgroundColor: colors.PersonalFinance,
    },
    targetScreen: "Messages",
  },
  {
    title: "Turn the heating off",
    icon: {
      name: "email",
      backgroundColor: colors.HardSkills,
    },
    targetScreen: "Messages",
  },
];

function HabitsScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <FlatList
          data={KUPhabitItems}
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
      <FlatList
        data={userHabitItems}
        keyExtractor={(menuItem) => menuItem.title}
        ItemSeparatorComponent={ListItemSeparator}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            onPress={() => navigation.navigate(item.targetScreen)}
            IconComponent={<Icon backgroundColor={item.icon.backgroundColor} />}
          />
        )}
      />
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

export default HabitsScreen;
