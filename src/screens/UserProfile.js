import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Profile = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <ScrollView style={styles.feedItem}>
            <View>
                <TouchableOpacity style={{ alignSelf: 'flex-end', flexDirection: 'row' }} onPress={() => setModalVisible(true)}>
                    {/* <Image source={require('./../images/share.png')} style={{ width: 21, height: 21 }} /> */}
                    <Image source={require('./../images/dot.png')} style={{ width: 25, height: 25 }} />
                </TouchableOpacity>
            </View>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBJVUQ3-68U6WNhaDWGbo-IZk-rRJBO1SVqw&s' }} style={styles.userImage} />
                    <Text style={styles.text}>Michael</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.time}>Jun 25 1:47 PM</Text>
            <Text style={styles.bio}>
                Bio :
            </Text>
            <Text style={styles.text1}>
                🌟 Dreamer by night, hustler by day. 🌙💼
                Chasing dreams, catching flights. ✈️🌟
                Adventure awaits; go find it. 🌍✨
                Living my best life, one step at a time. 👣🌟
                Wanderlust and city dust. 🌆🌟
            </Text>
            <Image
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS85mi3mN2yPc5vDPHsVN1kgh-bKHCbveKN4g&s' }}
                style={styles.image}
            />
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
            <Text style={styles.comments}>
                Comment
            </Text>
            <View style={styles.commentview}>
                <Text style={styles.comments}>
                    No Comments
                </Text>
            </View>

            <Modal
                animationType='fade'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}>

                <View style={styles.modalOverlay}>
                    <TouchableOpacity style={styles.button}>
                        <Image source={require('./../images/back.png')} style={{ width: 20, height: 20 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modalButton} onPress={() => navigation.navigate('Message')}>
                        <Text >Message</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modalButton} onPress={() => navigation.navigate('Report')}>
                        <Text >Report</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </ScrollView>
    );
}

export default Profile;

const styles = StyleSheet.create({
    feedItem: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        elevation: 1,
        marginBottom: -10
    },
    header: {
        flexDirection: 'row',
    },
    image: {
        width: 393,
        height: 230,
        borderRadius: 10,
    },
    text: {
        fontSize: 30,
        marginLeft: 10,
    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginLeft: 10,
    },
    text1: {
        fontSize: 16,
        marginBottom: 10
    },
    bio: {
        fontSize: 25,
        fontWeight: '500',
        paddingBottom: 10
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 10,
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionText: {
        marginLeft: 5,
        color: '#555956',
    },
    commentview: {
        alignSelf: 'center'
    },
    comments: {
        fontSize: 20,
        padding: 10,
        fontWeight: '500',
    },
    time: {
        fontSize: 16,
        marginLeft: 50
    },
    description: {
        fontSize: 20,
        padding: 5
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'flex-end', // Changed from 'center' to 'flex-end'
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingBottom: 20,
    },
    modalButton: {
        width: '100%',
        padding: 10,
        paddingLeft: 30,
        marginVertical: 5,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
    }
});
