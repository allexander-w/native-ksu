import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const UpMenu = () => {

  const [menu, setMenu] = useState([
    {
      active: true
    },
    {
      active: false
    },
    {
      active: false
    }
  ])

  return (
    <View style={s.container}>
      <Text>
        Меню пользователя
      </Text> 

      <View style={s.menuWrapper}>
        {
          menu.map((item, index) => {
            const active = item.active ? s.active : null
            return (
              <View key={index} style={[ s.menuItem,  active  ]}>
              </View>
            )   
          })

        }
      
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
  menuItem : {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: '#fff', 
  },
  active: {
    flex: 1
  }
})