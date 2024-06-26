import { View, TextInput, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';


const Tab = createMaterialTopTabNavigator();

const Chats = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                />
                <TouchableOpacity style={styles.searchButton} onPress={() => navigation.navigate('DestinationScreen2')}>
                    <Image source={require('./../images/search.png')} style={styles.searchIcon} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity  >
                <Icon name="chevron-up" size={25} color="#555956" alignSelf={'center'} onPress={() => navigation.navigate('DestinationScreen2')} />

            </TouchableOpacity>
        </View>
    );
};

export default Chats;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 20,
    },
    input: {
        flex: 1,
        height: 40,
        fontSize: 18,
    },
    searchButton: {
        marginLeft: 10,
    },
    searchIcon: {
        width: 20,
        height: 20,
    },
    viewGroupsText: {
        fontSize: 18,
        alignSelf: 'center',
    },
});
