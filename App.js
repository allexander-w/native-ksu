
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { AppContext } from './context/appContext'

import { Main } from './screens/Main'
import { NavBar } from './components/main/NavBar'

import { Settings } from './screens/Settings'
import { StBook } from './screens/StBook'



export default function App() {

  const [screen, setScreen] = useState(null)
  let tab = screen
  let content

  switch (screen) {
    case 'Settings':
      content = <Settings />
      break;

    case 'StBook':
      content = <StBook />
      break;

    default:
      content = <Main />
      break;
  }

  return (
    <AppContext.Provider value={{ setScreen, tab}}>
      <View style={styles.global}>
        {content}
        <NavBar />
      </View>
    </AppContext.Provider>
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
