import { View, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyGroup from '../materialTabs/GroupTabs/MyGroup';
import FollowingGroup from '../materialTabs/GroupTabs/FollowingGroup';

const Tab = createMaterialTopTabNavigator();
const Chats = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Search" />
                <TouchableOpacity style={styles.searchButton}>
                    <Image source={require('./../images/search.png')} style={styles.searchIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.tabContainer}>
                <Tab.Navigator>
                    <Tab.Screen name="Groups" component={MyGroup} />
                    <Tab.Screen name="Following Group" component={FollowingGroup} />
                </Tab.Navigator>
            </View>
        </View>
    );
};

export default Chats;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        padding: 5,
    },
    input: {
        flex: 1,
        height: 40,
        fontSize: 18,
        paddingHorizontal: 10,
    },
    searchButton: {
        padding: 5,
    },
    searchIcon: {
        width: 20,
        height: 20,
    },
    tabContainer: {
        flex: 1,
    },
});