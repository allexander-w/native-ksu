
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { AppContext } from './context/appContext'

import { NavBar } from './components/main/NavBar'

import { Main } from './screens/Main'
import { Authenticate } from './screens/Authenticate'
import { Settings } from './screens/Settings'
import { StBook } from './screens/StBook'



export default function App() {

  const [isAuth, setIsAuth] = useState(false)

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
    <AppContext.Provider value={{ setScreen, tab, setIsAuth }}>
      { isAuth &&
      <View style={styles.global}>
        {content}
        <NavBar />
      </View>
      }
      { !isAuth &&
      <View style={styles.global}>
        <Authenticate />
      </View>
      }
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
