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
      <TouchableOpacity style={[s.btn, tab === 'Settings' ? s.active : null]} onPress={ () => { changeScreen('Settings', 1) } } >{tab != 'Settings' ?  <Text>Н-ки</Text> :  <Text style={{color: '#348D50'}}>Настройки</Text> }</TouchableOpacity>
      <TouchableOpacity style={[s.btn, tab === 'StBook' ? s.active : null]} onPress={ () => { changeScreen('StBook', 2) } } >{tab != 'StBook' ?  <Text>З-ка</Text> :  <Text style={{color: '#348D50'}}>Зачетка</Text> }</TouchableOpacity>
      <TouchableOpacity style={[s.btn, tab === null ? s.active : null, { marginRight: 0 }]} onPress={ () => { changeScreen(null, 3) } } >{tab != null ?  <Text>П-ль</Text> :  <Text style={{color: '#348D50'}}>Пользователь</Text> }</TouchableOpacity>
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
    backgroundColor: 'transparent',
    borderRadius: 16,
    height: 40,
    marginRight: 16,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  active: {
    flex: 1,
    backgroundColor: 'rgba(52, 141, 80, 0.25)'
  }
})