import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'

import { DefaultLayout } from '../layouts/DefaultLayout'
import { AppContext } from '../context/appContext'

export const Settings = () => {
  const { setIsAuth } = useContext(AppContext)
  const logout = () => {
    setIsAuth(false)
  }

  return (
    <DefaultLayout>
      <View style={{ alignItems: 'center' }}>
        <Text> Settings screen </Text>
      </View>

      <TouchableOpacity onPress={logout}>
        <Text> Logout cabinet! </Text>
      </TouchableOpacity>
    </DefaultLayout>
  )
}

const s = new StyleSheet.create({
  scroll: {
    paddingHorizontal: 24
  }
})