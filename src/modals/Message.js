import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Message = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Enter your message</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Type your message here"
                />
                <TouchableOpacity style={styles.imageContainer}>
                    <Image source={require('./../images/attach.png')} style={styles.image} />
                </TouchableOpacity>
            </View>
            <Button title="Send" onPress={() => { }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    label: {
        marginBottom: 10,
        fontSize: 16,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
    },
    input: {
        flex: 1,
        height: 40,
        paddingHorizontal: 10,
    },
    imageContainer: {
        padding: 5,
    },
    image: {
        width: 20,
        height: 20,
    },
});

export default Message;
