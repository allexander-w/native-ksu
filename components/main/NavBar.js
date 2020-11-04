import React, { useContext, useState } from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'
import { AppContext } from '../../context/appContext'

export const NavBar = props => {

  const [activeTab, setActiveTab] = useState(1)
  const { setScreen, tab } = useContext( AppContext )

  const changeScreen = (param) => {
    setScreen(param)
  }

  return (
    <View style={s.navbar}>
      <TouchableOpacity style={[s.btn, tab === 'Settings' ? s.active : null]} onPress={ () => { changeScreen('Settings', 1) } } > settings</TouchableOpacity>
      <TouchableOpacity style={[s.btn, tab === 'StBook' ? s.active : null]} onPress={ () => { changeScreen('StBook', 2) } } >book</TouchableOpacity>
      <TouchableOpacity style={[s.btn, tab === null ? s.active : null, { marginRight: 0 }]} onPress={ () => { changeScreen(null, 3) } } >user</TouchableOpacity>
    </View>
  )
}

const s = new StyleSheet.create({
  navbar: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    backgroundColor: '#fff',
    position: 'absolute', 
    bottom: 0,
    width: '100%',
    paddingHorizontal: 24,
  },
  btn: {
    backgroundColor: 'blue',
    borderRadius: 16,
    height: 40,
    marginRight: 16,
    width: 40,
    
  },
  active: {
    flex: 1,
  }
})