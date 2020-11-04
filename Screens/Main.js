import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

import { UpMenu } from '../components/UpMenu'
import { UserLayout } from '../layouts/UserLayout'

export const Main = () => {

  

  return (
    <UserLayout>
      <UpMenu />
      <ScrollView style={s.scroll}>
        <View >
          <Text> Text </Text>
        </View>
      </ScrollView>
    </UserLayout>
  )
}

const s = new StyleSheet.create({
  scroll: {
    paddingHorizontal: 24
  }
})