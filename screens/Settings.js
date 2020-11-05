import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

import { DefaultLayout } from '../layouts/DefaultLayout'

export const Settings = () => {
  return (
    <DefaultLayout>
        <View style={{alignItems: 'center'}}>
          <Text> Settings screen </Text>
        </View>
    </DefaultLayout>
  )
}

const s = new StyleSheet.create({
  scroll: {
    paddingHorizontal: 24
  }
})