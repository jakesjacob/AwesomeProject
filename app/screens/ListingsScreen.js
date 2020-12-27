import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Card from '../components/Card';

import Screen from "../components/Screen";
import colors from "../config/colors";

const listings = [
    {
        id: 1,
        title: "Sunset",
        price: 100,
        image: require("../assets/sunset.jpg"),
    },
    {
        id: 2,
        title: "Boomtown",
        price: 1155,
        image: require("../assets/boom.jpg"),
    },
];

function ListingsScreen(props) {
    return (
        <Screen style={styles.screen}>
            <FlatList 
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) => 
                    <Card 
                        title={item.title}
                        subtitle={"£" + item.price}
                        image={item.image}
                    />
            }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.KUP1,
    }
})

export default ListingsScreen;