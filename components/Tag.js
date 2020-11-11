import React from 'react'
import { View, StyleSheet } from 'react-native'

export const Tag = ({ children }) => {
  return (
    <View style={s.tag}>
      { children }
    </View>
  )
}

const s = new StyleSheet.create({
  tag: {
    height: 40,
    backgroundColor: 'red',
    color: '#333',
    borderRadius: 16
  }
})