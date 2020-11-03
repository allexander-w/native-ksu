import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const UpMenu = () => {
  return (
    <View style={s.container}>
      <Text>
        Меню пользователя
      </Text> 

      <View>
        
      </View>
    </View>
  )
}

const s = new StyleSheet.create({
  container: {
    paddingHorizontal: 24
  }
})