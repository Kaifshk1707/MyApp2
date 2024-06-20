import { View, StyleSheet, TouchableOpacity, TextInput, Text } from 'react-native'
import React from 'react'
import { THEMES_COLOR } from '../common/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const Search = ({ navigation }) => {
  return (
    <View style={styles.view}>
      <View style={{ margin: 7 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <Icon name="bars" size={35} color="#555956" />
        </TouchableOpacity>
      </View>

      <View style={styles.inputView}>
        <TextInput placeholder="Search" style={styles.textInput} />
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.navigate('Search')}>
          <Icon name="search" size={25} color="#555956" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('DestinationScreen')}
        style={styles.touch}>
        <Text style={styles.txt}>#T20WorldCup</Text>
        <Text style={styles.txt1}>
          Discussed in <Text style={styles.txt2}>CSK_Forever News</Text>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('DestinationScreen')}
        style={styles.touch1}>
        <Text style={styles.txt}>#PrimeMinisterofBharat</Text>
        <Text style={styles.txt1}>
          Discussed in <Text style={styles.txt2}>News</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
export default Search;
const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingVertical: 15
  },
  text: {
    fontSize: 40,
    color: THEMES_COLOR,
    textAlign: 'center'
  },
  txt: {
    fontSize: 20,
    margin: 6,
    color: 'gray',
  },
  txt1: {
    fontSize: 18,
    marginLeft: 10,
  },
  txt2: {
    fontSize: 18,
    color: '#4fa8f0'
  },
  touch: {
    paddingHorizontal: 13,
    borderBottomWidth: 0.1,
    borderBottomRightRadius: 10
  },
  touch1: {
    paddingHorizontal: 13,
    borderBottomRightRadius: 10,
    marginBottom: 10
  },
  textInput: {
    height: 60,
    padding: 10,
    fontSize: 30,
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 8,
    borderWidth: 0.8,
    borderColor: 'gray',
    borderRadius: 5,
  },
  icon: {
    position: 'absolute',
    right: 15,
  }
});
