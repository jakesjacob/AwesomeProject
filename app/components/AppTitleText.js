import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../config/colors";

function AppTitleText({ children, style }) {
  return <Text style={[styles.titleText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 64,
    fontWeight: "600",
    color: colors.KUP2,
    margin: 5,
    alignSelf: "center",
    marginVertical: 10,
    textDecorationLine: "underline",
  },
});

export default AppTitleText;
