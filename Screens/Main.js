import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Header } from '../components/Header'
import { UpMenu } from '../components/UpMenu'

export const Main = () => {
  return (
    <View>
      <Header />
      <UpMenu />
    </View>
  )
}