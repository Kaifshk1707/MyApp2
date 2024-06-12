import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { THEMES_COLOR } from '../common/Colors';

const Profile = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                source={require('./../images/Michael.jpg')}
                style={styles.avatar}
            />
            <Text style={styles.name}>kaif Shaikh</Text>
            <Text style={styles.title}>React Native Developer</Text>
            <Text style={styles.bio}>
                Experienced in building and maintaining cross-platform mobile applications using React Native. Passionate about creating intuitive and performant user experiences.
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MyDetails')}>
                <Text style={styles.buttonText}>View My Details</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#555',
        marginBottom: 15
    },
    bio: {
        fontSize: 16,
        color: '#777',
        textAlign: 'center',
        marginBottom: 20,
        paddingHorizontal: 20
    },
    button: {
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
        elevation: 5
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
});
