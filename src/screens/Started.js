import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

const Started = ({ navigation }) => {
  return (
    <View style={styles.view}>
      <Image source={require('./../images/line5.png')} />
      <Image source={require('./../images/Frame5.png')} style={styles.image} />
      <Text style={styles.title}>Safer community</Text>
      <Text style={styles.description}>
        Legitimacy prioritized, unauthorized activities rejected, user privacy
        emphasized.
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('Main')}>
        <Image source={require('./../images/getStarted.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'black'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#7a7a7a',
    marginTop: 20,
    alignSelf: 'flex-start',
  },
  description: {
    fontSize: 20,
    marginBottom: 40,
    alignSelf: 'flex-start',
    color: '#555956',
  },
  button: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'red'
  },
  buttonText: {
    color: 'white',
    fontSize: 23,
  },
  image: {
    width: 380,
    height: 510,
  },

});
export default Started;
