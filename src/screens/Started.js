import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { THEMES_COLOR } from '../common/Colors';
const Started = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Welcome</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Main')} style={styles.button}>
                <Text style={styles.text}> Get Started</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        paddingBottom: 100,
        backgroundColor: THEMES_COLOR
    },
    button: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 80,

    },
    text: {
        color: '#000',
        fontSize: 30
    },
    txt: {
        color: '#fff',
        fontSize: 40,
        fontWeight: '800',
        padding: 10,
    }
});
export default Started;
