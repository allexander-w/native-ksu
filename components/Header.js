import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

export const Header = () => {

  return (
    <View>
      <Image source={ require('../assets/img/headerimg.png') }  style={styles.container}>
      </Image>
      <View style={styles.user}>
        <Image source={ require('../assets/img/ava.png') } style={styles.avatar}>
        </Image>
        <View>
          <Text>Воробьев Александр Ильич</Text>
          <Text>3 курс, студент</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    paddingHorizontal: 24,
    // backgroundColor: 'blue',
  },
  user: {
    marginTop: -40,
    height: 80,
    backgroundColor: '#fff',
    marginHorizontal: 24,
    borderRadius: 16,
    flexDirection: 'row',
    paddingHorizontal: 8,
    alignItems: 'center'
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 16,
    backgroundColor: '#fff',
    marginRight: 16,
    resizeMode: 'cover'
  }
})
