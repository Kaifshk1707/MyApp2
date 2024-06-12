import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { THEMES_COLOR } from '../common/Colors';

const Chats = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Group')} style={styles.chatButton}>
                <Image
                    source={require('./../images/Michael.jpg')}
                    style={styles.icon}
                />
                <Text style={styles.buttonText}>Group Chat</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Chats;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    chatButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: THEMES_COLOR,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    icon: {
        width: 100,
        height: 100,
    },
});
