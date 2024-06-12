import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { THEMES_COLOR } from '../common/Colors';

const Menu = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                Menu
            </Text>
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Qoneqt')}>
                <Icon name="home" size={24} color={THEMES_COLOR} style={styles.icon} />
                <Text style={styles.menuText}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Search')}>
                <Icon name="search" size={24} color={THEMES_COLOR} style={styles.icon} />
                <Text style={styles.menuText}>Search</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Group')}>
                <Icon name="group" size={24} color={THEMES_COLOR} style={styles.icon} />
                <Text style={styles.menuText}>Group</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Chats')}>
                <Icon name="comments" size={24} color={THEMES_COLOR} style={styles.icon} />
                <Text style={styles.menuText}>Chat</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}>
                <Icon name="user" size={24} color={THEMES_COLOR} style={styles.icon} />
                <Text style={styles.menuText}>Profile</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Menu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: THEMES_COLOR,
        marginBottom: 20,
        textAlign: 'center',
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: THEMES_COLOR,
    },
    icon: {
        marginRight: 15,
    },
    menuText: {
        fontSize: 18,
        color: '#333',
    },
});