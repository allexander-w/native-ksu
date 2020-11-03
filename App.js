import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.timerNums}>00:02</Text>
      <TouchableOpacity style={styles.btn} onPress={() => alert('ok')}>
        <Text style={styles.textBtn}>Start!</Text>
      </TouchableOpacity>
    </View>
  );
}

const screen = Dimensions.get('screen')

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24
  },
  btn: {
    width: 100, 
    height: 100,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: screen.width / 2,
    borderWidth: 3,
    borderColor: '#fff'
  },
  textBtn: {
    color: '#fff',
    fontWeight: 'bold'
  },
  timerNums: {
    color: '#fff',
    fontSize: 64
  },


})
