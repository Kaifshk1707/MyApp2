import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';

const MyDetails = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require('./../images/Michael.jpg')}
                style={styles.avatar}
            />
            <Text style={styles.name}>Kaif Shaikh</Text>
            <Text style={styles.email}>kaifshaikh17@gmail.com</Text>
            <View style={styles.detailsContainer}>
                <Text style={styles.detailTitle}>Bio:</Text>
                <Text style={styles.detailText}>
                    Aspiring software developer currently interning with a focus on building cross-platform mobile applications using React Native. Passionate about learning new technologies and improving my coding skills. Enjoys hiking and photography in my free time.
                </Text>
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.detailTitle}>Location:</Text>
                <Text style={styles.detailText}>Thane Mumbai, Maharashtra</Text>
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.detailTitle}>Skills:</Text>
                <Text style={styles.detailText}>
                    - React Native{'\n'}
                    - JavaScript{'\n'}
                    - HTML & CSS{'\n'}
                    - Git & GitHub
                </Text>
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.detailTitle}>Education:</Text>
                <Text style={styles.detailText}>
                    Bsc.IT, XYZ University
                </Text>
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.detailTitle}>Projects:</Text>
                <Text style={styles.detailText}>
                    - Project 1: {'\n'}
                    Description: A mobile application for task management. Developed using React Native with Redux for state management. Implemented features include task creation, deletion, and editing. {'\n'}
                    Technologies: React Native, Redux, JavaScript{'\n'}
                    {'\n'}
                    - Project 2: {'\n'}
                    Description: A social media app for sharing photos and connecting with friends. Built using React Native and Firebase for real-time data synchronization. Features include user authentication, photo uploading, and commenting. {'\n'}
                    Technologies: React Native, Firebase, JavaScript
                </Text>
            </View>
        </ScrollView>
    );
}

export default MyDetails;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5'
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10
    },
    email: {
        fontSize: 16,
        color: '#777',
        marginBottom: 20
    },
    detailsContainer: {
        width: '100%',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    detailTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5
    },
    detailText: {
        fontSize: 16,
        color: '#555'
    }
});
