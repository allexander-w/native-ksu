import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { AppContext } from '../context/appContext'


export const Authenticate = props => {
  const { setIsAuth } = useContext(AppContext)

  const login = () => {
    setIsAuth( true )
  }

  return (
    <View style={ s.auth }>
      
      <TouchableOpacity style={ s.button } onPress={ login }>
        <Text> Login in cabinet! </Text> 
      </TouchableOpacity>
    </View> 
  )
}

const s = new StyleSheet.create({
  auth: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#925FBE'
  },
  button: {
    height: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    width: 128
  }
})