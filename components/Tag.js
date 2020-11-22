import React from 'react'
import { View, StyleSheet } from 'react-native'

export const Tag = ({ children }) => {
  return (
    <View style={style.tag}>
      { children }
    </View>
  )
}

const style = new StyleSheet.create({
  tag: {
    height: 40,
    backgroundColor: 'rgba(158,109,201, .4)',
    color: '#333',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    width: 128

  }
})