import React from 'react';
import { View, StyleSheet, Image, } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText/AppText';

function ListItem({title, subTitle, image}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <View>
                <AppText>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>

    );
}

export default ListItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 35,
        marginRight: 10,
    },
    subTitle: {
        color: colors.medium,
    },
})