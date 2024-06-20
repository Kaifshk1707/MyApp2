import {View, Text, StyleSheet} from 'react-native';
import React from 'react'

const Users = () => {
  return (
    <View style={styles.vw}>
      <Text style={styles.txt}>No Users</Text>
    </View>
  );
}

export default Users;

const styles = StyleSheet.create({
  vw: {
    flex: 1,
  },
  txt: {
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    padding: 30,
  },
});