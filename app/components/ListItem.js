import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight, } from 'react-native';

import colors from '../config/colors';
import AppText from './AppText/AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';


function ListItem({title, subTitle, image, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight 
        underlayColor={colors.light}
        onPress={onPress}>
        <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <View>
                <AppText>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
        </TouchableHighlight>
        </Swipeable>

    );
}

export default ListItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
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