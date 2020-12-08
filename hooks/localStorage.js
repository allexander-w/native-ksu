import AsyncStorage from "@react-native-community/async-storage"

export const setLocalStorage = async ( key, value ) => {
    await AsyncStorage.setItem( key, value )
}

export const getLocalStorage = async ( key ) => {
    const data = await AsyncStorage.getItem( key )
    return data
}