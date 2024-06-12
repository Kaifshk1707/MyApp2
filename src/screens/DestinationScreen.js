import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native'
import React, { useState } from 'react'
import { THEMES_COLOR } from '../common/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';


const DestinationScreen = ({ navigation }) => {
    return (
        <View >
            <View style={styles.inputView}>
                <TextInput
                    placeholder="Search"
                    style={styles.textInput}
                />
                <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Search')}>
                    <Icon name="times" size={20} color='#784af7' />
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity>
                    <Text>
                        Hello
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default DestinationScreen;

const styles = StyleSheet.create({
    view: {
        flex: 1,
    },
    textInput: {
        height: 60,
        padding: 10,
        fontSize: 30,
    },
    inputView: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 8,
        borderWidth: 1,
        borderColor: THEMES_COLOR,
        borderRadius: 5,
    },
    icon: {
        position: 'absolute',
        right: 15,
    }
})