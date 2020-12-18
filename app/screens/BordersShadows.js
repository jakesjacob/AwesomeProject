import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, } from 'react-native';
import {Fontisto} from "@expo/vector-icons";

import colors from "../config/colors";
import AppText from "../components/AppText/AppText";

function BordersShadows(props) {
    return (
        <SafeAreaView style={styles.container}>

            <AppText>dtrh</AppText>
        
            <Fontisto name="sourcetree" size={200} color={colors.KUPblue} ></Fontisto>

            <Text style={styles.font}>The Keeping Up Project</Text>

        
            <View style={styles.circle}>
                <View style={styles.redDot} />
            </View>
            <View style={styles.borderBox}></View>
            <View style={styles.shadowBox}></View>
        
        </SafeAreaView>
    );
}

export default BordersShadows;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    circle: {
        width: 100,
        height: 100,
        backgroundColor: colors.KUPgreen,
        borderRadius: 50,
        borderWidth: 10,
        borderColor: colors.KUPblue,
        padding: 30,
    },
    borderBox: {
        width: 100,
        height: 100,
        borderRadius: 10,
        borderWidth: 10,
        backgroundColor: "gold",
        margin: 20,
    },
    shadowBox: {
        width: 100,
        height: 100,
        backgroundColor: colors.KUPblue,
        borderRadius: 30,
        borderWidth: 5,
        borderColor: "gold",
        shadowColor: colors.KUPgreen,
        shadowOffset: { width: 20, height: 20},
        shadowOpacity: 10,
        shadowRadius: 1,
    },
    redDot: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: "red",
    },
    font: {
        fontSize: 30,
        fontStyle: "italic",
        fontWeight: "600",
        color: "tomato",
        padding: 20,
    },
    

    
})