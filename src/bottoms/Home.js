import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { THEMES_COLOR } from '../common/Colors';

const Home = ({ navigation }) => {
    return (
        <View style={styles.view}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Text style={styles.text}>Home</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;
const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    text: {
        fontSize: 40,
        color: THEMES_COLOR,
        justifyContent: 'center',
        textAlign: 'center'
    }
})