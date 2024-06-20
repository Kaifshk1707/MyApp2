import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import feedData from './feedData';

const Feeds = ({ navigation }) => {
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
          <Text style={styles.actionText}>Like 65</Text>
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

    </View>
  );

  return (
    <FlatList
      data={feedData}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.container}
    />
  );
};

export default Feeds;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  feedItem: {
    backgroundColor: 'white',
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
});
