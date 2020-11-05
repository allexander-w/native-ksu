import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export const UpMenu = () => {

  return (
    <View style={s.container}>
      <Text style={s.title}>
        Меню пользователя
      </Text>

      <View style={s.menuWrapper}>

        <TouchableOpacity style={[s.menuItem, s.active]}>
        </TouchableOpacity>
        <TouchableOpacity style={[s.menuItem]}>
        </TouchableOpacity>
        <TouchableOpacity style={[s.menuItem]}>
        </TouchableOpacity>

      </View>
    </View>
  )
}

const s = new StyleSheet.create({
  container: {
    paddingHorizontal: 24
  },
  menuWrapper: {
    flexDirection: 'row'
  },
  menuItem: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: '#fff',
  },
  active: {
    flex: 1
  },
  title: {
    fontSize: 24,
    color: '#333',
    marginVertical: 24
  }
})