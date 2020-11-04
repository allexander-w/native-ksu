import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

import { DefaultLayout } from '../layouts/DefaultLayout'

export const StBook = () => {
  return (
    <DefaultLayout>
        <View >
          <Text> Student Book </Text>
        </View>
    </DefaultLayout>
  )
}

const s = new StyleSheet.create({
  scroll: {
    paddingHorizontal: 24
  }
})