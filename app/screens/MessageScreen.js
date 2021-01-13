import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import AppTitleText from "../components/AppTitleText";

import ListItem from "../components/ListItem";
import ListItemDeletAction from "../components/ListItemDeletAction";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title: "Liam Bacon",
    description: "We are going to rule the world!",
    image: require("../assets/five-dice.png"),
  },
  {
    id: 2,
    title: "Jacob Horgan",
    description:
      "I know. We are the best of the best and will be millionaires soon. Lets gooooo.",
    image: require("../assets/five-dice.png"),
  },
];

function MessageScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
  };

  return (
    <Screen>
      <AppTitleText>Messages</AppTitleText>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeletAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/five-dice.png"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessageScreen;
