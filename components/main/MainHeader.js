import React, { useContext } from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import { AppContext } from '../../context/appContext'


export const MainHeader = props => {

  const { setScreen } = useContext( AppContext )

  const goHome = () => {
    setScreen(null)
  }

  return (
    <View>
      <TouchableOpacity onPress={ goHome }>
        Back home
      </TouchableOpacity>
      <Text>General header</Text>
    </View>
  )
}