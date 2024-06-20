import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AnotherReport = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Another Report</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 20,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default AnotherReport;
