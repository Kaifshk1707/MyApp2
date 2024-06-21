import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Modal, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Profile = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerRight}>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Image source={require('./../images/dot.png')} style={styles.dotImage} />
                </TouchableOpacity>
            </View>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBJVUQ3-68U6WNhaDWGbo-IZk-rRJBO1SVqw&s' }} style={styles.userImage} />
                </TouchableOpacity>
                <Text style={styles.userName}>
                    Michael
                    {'\n'}
                    <Text style={styles.postTime}>Jun 25 1:47 PM</Text>
                </Text>
            </View>
            <Text style={styles.bio}>
                Dreamer by night, hustler by day.
                Chasing dreams, catching flights.
                Adventure awaits; go find it.
                Living my best life, one step at a time.
                Wanderlust and city dust.
            </Text>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS85mi3mN2yPc5vDPHsVN1kgh-bKHCbveKN4g&s' }}
                    style={styles.image}
                />
            </View>
            <Text style={styles.description}>
                As far as history goes, we’re living in charmed times — but Shakespeare never had to write an Instagram bio. Typing those fateful words into your profile is stressful, and for good reason: your Instagram bio is often the first place other users will look when they’re deciding whether or not to follow you.

                Here’s everything you need to know about Instagram bios, and how to write one worthy of a three-act play.
            </Text>

            <View style={styles.actions}>
                <TouchableOpacity style={styles.actionButton}>
                    <Icon name="thumbs-up" size={20} color="#555956" />
                    <Text style={styles.actionText}>Like 34</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton}>
                    <Icon name="comment" size={20} color="#555956" />
                    <Text style={styles.actionText}>Comment</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton}>
                    <Icon name="share" size={20} color="#555956" />
                    <Text style={styles.actionText}>Share</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.commentView}>
                <Text style={styles.commentsHeader}>67 Comments</Text>
                <TextInput placeholder='Add a comment...' style={styles.commentInput} />
            </View>

            <Modal
                animationType='fade'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}>
                <View style={styles.modalOverlay}>
                    <TouchableOpacity style={styles.modalButton} onPress={() => navigation.navigate('Message')}>
                        <Text style={{ fontSize: 20 }}>Message</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modalButton} onPress={() => navigation.navigate('Report')}>
                        <Text style={{ fontSize: 20 }}>Report</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                        {/* <Image source={require('./../images/back.png')} style={styles.backImage} /> */}
                        <Text style={{ fontSize: 20 }}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </ScrollView>
    );
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 10,
        elevation: 5,
    },
    headerRight: {
        alignSelf: 'flex-end',
    },
    dotImage: {
        width: 25,
        height: 25,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    userName: {
        fontSize: 24,
        marginLeft: 10,
    },
    postTime: {
        fontSize: 16,
        color: '#666',
    },
    bio: {
        fontSize: 18,
        marginBottom: 15,
        color: 'black',

    },
    imageContainer: {
        width: '100%',
        height: 300,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 10,
        elevation: 5,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 15,
        color: 'gray'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 15,
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionText: {
        marginLeft: 5,
        color: '#555956',
    },
    commentsHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingBottom: 15,
    },
    closeButton: {
        alignSelf: 'center',
        padding: 10,
        backgroundColor: '#cdcfd1',
        borderRadius: 20
    },
    backImage: {
        width: 20,
        height: 20,
    },
    modalButton: {
        width: '100%',
        padding: 15,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderColor: '#ddd',
        alignItems: 'center',
    },
    commentInput: {
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 5,
        fontSize: 18,
        paddingLeft: 15
    },
    commentView: {
        marginBottom: 100
    }
});
