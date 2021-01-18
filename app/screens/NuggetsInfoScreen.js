import React from "react";
import { Image, View, StyleSheet, ImageBackground } from "react-native";
import AppText from "../components/AppText/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

function NuggetsInfoScreen({ route }) {
  const KUPcateogryItem = route.params;

  return (
    <View>
      <View style={{ backgroundColor: KUPcateogryItem.color }}>
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{KUPcateogryItem.title}</AppText>
          <AppText style={styles.price}>{KUPcateogryItem.value}</AppText>
          <View style={styles.userContainer}></View>
        </View>
      </View>
    </View>
  );
}

export default NuggetsInfoScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    top: 100,
    padding: 5,
  },
  title: {
    fontSize: 44,
  },
  price: {
    color: colors.primary,
  },
  userContainer: {
    marginVertical: 40,
  },
});
