import React from 'react';
import { StyleSheet, Text, View, Image, } from 'react-native';
import colors from '../config/colors';


function Card({ image, title, subtitle,}) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image}/>
            <View style={styles.detailsContainer}>
                <Text style={styles.text}>{title}</Text>
                <Text style={styles.text2}>{subtitle}</Text>
            </View>
        </View>

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
    
})