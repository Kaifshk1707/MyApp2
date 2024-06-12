import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { THEMES_COLOR } from '../common/Colors';

const Group = ({ navigation }) => {
    return (
        <View style={styles.view}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Text style={styles.text}>Group</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Group;
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