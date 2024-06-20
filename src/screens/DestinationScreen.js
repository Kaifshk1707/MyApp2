import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { THEMES_COLOR } from '../common/Colors';
import Feeds from '../materialTabs/Feeds';
import Groups from '../materialTabs/Groups';
import Users from '../materialTabs/Users';

const Tab = createMaterialTopTabNavigator();

const DestinationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput placeholder="Search" style={styles.textInput} />
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.navigate('Search')}>
          <Icon name="search" size={25} color="#555956" />
        </TouchableOpacity>
      </View>
      
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#555956',
          tabBarInactiveTintColor: 'gray',
          tabBarIndicatorStyle: { backgroundColor: '#555956' },
          tabBarStyle: { backgroundColor: 'white' },
        }}>
        <Tab.Screen name="Feeds" component={Feeds} />
        <Tab.Screen name="Groups" component={Groups} />
        <Tab.Screen name="Users" component={Users} />
      </Tab.Navigator>
    </View>
  );
};

export default DestinationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  textInput: {
    height: 60,
    padding: 10,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#555956',
    borderRadius: 5,
    flex: 1,
  },
  inputView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 7,
  },
  icon: {
    padding: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: THEMES_COLOR,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
});
