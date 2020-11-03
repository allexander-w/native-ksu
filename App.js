import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import { Main } from './Screens/Main'

export default function App() {

  return (
    <View style={styles.global}>
      <Main />
    </View>
  )
}

const styles = StyleSheet.create({
  global: {
    backgroundColor: '#F4F1FA',
    height: '100%'
  },
  container: {
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 24
    
  }
})
