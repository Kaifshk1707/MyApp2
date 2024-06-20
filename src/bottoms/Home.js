import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, Modal } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import feedData from './../materialTabs/feedData';

const Home = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const handled = () => {
        console.log('Image Clicked');;
    }

    const renderItem = ({ item }) => (
        <View style={styles.feedItem}>
            <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
                <View style={styles.header}>
                    <Image source={{ uri: item.userImage }} style={styles.userImage} />
                    <View style={styles.headerText}>
                        <Text style={styles.user}>{item.user}</Text>
                        <Text style={styles.time}>{item.time}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <Text style={styles.content}>{item.content}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
                {item.image && <Image source={{ uri: item.image }} style={styles.image} />}
            </TouchableOpacity>

            <View style={styles.actions}>
                <TouchableOpacity style={styles.actionButton}>
                    <Icon name="thumbs-up" size={20} color="#555956" />
                    <Text style={styles.actionText}>Like 134</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton}>
                    <Icon name="comment" size={20} color="#555956" />
                    <Text style={styles.actionText}>Comment</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton} onPress={() => setModalVisible(true)}>
                    <Icon name="share" size={20} color="#555956" />
                    <Text style={styles.actionText}>Share</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <>
            <FlatList
                data={feedData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.container}
            />

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Share To</Text>
                        <View style={styles.shareOptions}>
                            <TouchableOpacity style={styles.shareOption}>
                                <Icon name="instagram" size={30} color="#E1306C" />
                                <Text style={styles.shareText}>Instagram</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.shareOption}>
                                <Icon name="whatsapp" size={30} color="#25D366" />
                                <Text style={styles.shareText}>WhatsApp</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.shareOption}>
                                <Icon name="linkedin" size={30} color="#0077B5" />
                                <Text style={styles.shareText}>LinkedIn</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.shareOption}>
                                <Icon name="share-alt" size={30} color="#000" />
                                <Text style={styles.shareText}>Others</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal >
            <TouchableOpacity style={styles.fab} onPress={handled}>
                <Icon name="image" size={20} color='White' />
            </TouchableOpacity >
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    feedItem: {
        backgroundColor: '#e3e8e6',
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
        shadowColor: '#000',
        elevation: 1,
    },
    header: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    headerText: {
        flex: 1,
    },
    user: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    time: {
        color: 'gray',
    },
    content: {
        fontSize: 14,
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 5,
        marginBottom: 10,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 0.5,
        borderTopColor: '#000',
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
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        width: 300,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    shareOptions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 20,
    },
    shareOption: {
        alignItems: 'center',
    },
    shareText: {
        marginTop: 5,
        fontSize: 12,
    },
    closeButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#555956',
        borderRadius: 5,
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
    },
    fab: {
        position: 'absolute',
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        bottom: 15,
        backgroundColor: '#c2c4c3',
        borderRadius: 30,
        borderColor: 'gray',
        borderWidth: 1,
        elevation: 8,
    },
});

export default Home;
