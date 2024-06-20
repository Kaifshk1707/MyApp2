import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Groups = () => {
  return (
    <View style={styles.vw}>
      <Text style={styles.txt}>No Groups</Text>
    </View>
  )
}

export default Groups;

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