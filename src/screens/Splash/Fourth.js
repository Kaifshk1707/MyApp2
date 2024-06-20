import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react'

const Fourth = ({ navigation }) => {
  return (
    <View style={styles.view}>
      <Image source={require('./../../images/line4.png')} />
      <Image source={require('./../../images/Frame4.png')} style={styles.image} />
      <Text style={styles.title}>Tokenize, Vote, Control</Text>
      <Text style={styles.description}>
        "Take control on our Web 3.0 social media: vote, create, manage your
        social token."
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Started')}>
        <Text style={styles.buttonText}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};


export default Fourth;

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
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
  },
  image: {
    width: 380,
    height: 510,
  },
});