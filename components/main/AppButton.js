import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export const AppButton = props => {

    

    return (
        <TouchableOpacity style={ s.button } onPress={ props.func }>
            <Text style={ s.text }> { props.title } </Text>
        </TouchableOpacity>
    )
}

const s = new StyleSheet.create({
    button: {
        backgroundColor: '#925FBE',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 16
    },
    text: {
        color: '#fff',
        fontSize: 16
    }
})