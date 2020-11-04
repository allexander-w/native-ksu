import React from 'react'
import { View } from 'react-native'

import { Header } from '../components/Header'


export const UserLayout = ({ children }) => {
  return (
    <View>
      <Header />

      { children }
    </View> 
  )
}