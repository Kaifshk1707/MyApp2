import { View, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const Chats = () => {
    const handleSearch = () => {
        console.log('Search button pressed');
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Search"
            />
            <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                <Image source={require('./../images/search.png')} style={styles.searchIcon} />
            </TouchableOpacity>
        </View>
    );
};

export default Chats;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        padding: 15,
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
});
