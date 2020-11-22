import { useState, useEffect, useCallback } from 'react'
import AsyncStorage from '@react-native-community/async-storage'


export default ( key, initialValue = '' ) => {

    const getItem = useCallback( async () => {
        const value =  await AsyncStorage.getItem( key )
        setValue( value )
    }, [key])

    const [value, setValue] = useState(initialValue)

    useEffect( ()=>  {
        getItem()
    }, [setValue])

    useEffect(()=> {
        const setItem = async () => {
            await AsyncStorage.setItem( key, value )
        }
        
        if ( value ) {
            setItem()
        }
        
    }, [ value ])

    const clearStorage = async ( ) => {
        await AsyncStorage.removeItem( key )
    }

    return [value, setValue, clearStorage ]
}