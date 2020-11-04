import React from 'react'
import { View } from 'react-native'

import { MainHeader } from '../components/main/MainHeader'


export const DefaultLayout = ({ children }) => {
  return (
    <View>
      <MainHeader />

      { children }
    </View> 
  )
}