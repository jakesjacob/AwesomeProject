import React from 'react';
import { StyleSheet, View, FlatList  } from 'react-native';
import Icon from '../components/Icon';
import { StatusBar } from 'expo-status-bar';

import ListItem from '../components/ListItem';
import Screen from "../components/Screen";
import colors from "../config/colors";
import ListItemSeparator from '../components/ListItemSeparator';


const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.KUP2
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.KUP2
        }
    },
]


function AccounScreen(props) {
    return (
        <Screen style={styles.screen}>
            <StatusBar style="auto" />
            <View style={styles.container}>
                <ListItem 
                    title="Jacob Horgan" 
                    subTitle="jacob_horgan@hotmail.com"
                    image={require("../assets/five-dice.png")}
                />
            </View>
            <View style={styles.container}>
                <FlatList 
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) => 
                        <ListItem 
                            title={item.title}
                            IconComponent={
                                <Icon 
                                name={item.icon.name} 
                                backgroundColor={item.icon.backgroundColor} 
                                />
                            }
                        />
                    }
                />
            </View>
            <ListItem 
                title="Log Out"
                IconComponent={
                    <Icon name="logout" backgroundColor="#ffe66d" />
                }
            />
            <Text> {firstName} </Text>
            <TextInput
                secureTextEntry={true}
                clearButtonMode="always"
                keyboardType="numeric"
                maxLength={20} 
                onChangeText={text => setFirstName(text)}
                placeholder="First name"
                style={{
                borderBottomColor: "#ccc",
                borderBottomWidth: 1,
                }}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    screen: {
        backgroundColor: colors.KUP1,
    }
})

export default AccounScreen;