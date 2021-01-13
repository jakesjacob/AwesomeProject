import React from "react";
import { Image, View, StyleSheet } from "react-native";
import AppText from "../components/AppText/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <View>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>£{listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/fire-logo.png")}
            title="Jacob Horgan"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 5,
  },
  title: {
    fontSize: 24,
  },
  price: {
    color: colors.primary,
  },
  userContainer: {
    marginVertical: 40,
  },
});
