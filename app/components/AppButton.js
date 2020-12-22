import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, } from 'react-native';
import colors from '../config/colors';


function AppButton({title, onPress, color = "KUP1", textColor = "KUP2"}) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: colors[color]} ]} onPress={onPress}>
            <Text style={[styles.text, {color: colors[textColor]}]}>{title}</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.KUP2,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: "100%",
        
    },
    text: {
        color: colors.KUP1,
        fontSize: 18,
        textTransform: "uppercase",
    },
    
})

export default AppButton;