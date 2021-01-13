import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import colors from "../config/colors";

function Card({ image, title, subtitle, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <Text numberOfLines={1} style={styles.text}>
            {title}
          </Text>
          <Text numberOfLines={2} style={styles.text2}>
            {subtitle}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 25,
    width: "100%",
    overflow: "hidden",
    marginBottom: 20,
  },
  text: {
    color: colors.KUP2,
    fontSize: 18,
    textTransform: "uppercase",
    marginBottom: 7,
  },
  text2: {
    color: "green",
    fontSize: 14,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
});
