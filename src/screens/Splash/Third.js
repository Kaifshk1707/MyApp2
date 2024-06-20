import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react'

const Third = ({ navigation }) => {
  return (
    <View style={styles.view}>
      <Image source={require('./../../images/line3.png')} />
      <Image
        source={require('./../../images/Frame3.png')}
        style={styles.image}
      />

      <Text style={styles.title}>Get Blue Tick Verification</Text>
      <Text style={styles.description}>
        Optimize your Qoneqt profile by verifying yourself and unlocking a blue
        checkmark!
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Fourth')}>
        <Text style={styles.buttonText}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};


export default Third;

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