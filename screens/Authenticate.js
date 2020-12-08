import React, { useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import useFetch from '../hooks/useFetch'

import { setLocalStorage, getLocalStorage } from '../hooks/localStorage'

import { AppContext } from "../context/appContext";
import { AppInput } from "../components/main/AppInput";
import { AppButton } from "../components/main/AppButton";

export const Authenticate = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [localState, setLocaleState] = useState( null )

  const [{ isLoading, response, setResponse }, doFetch] = useFetch('http://91.228.154.18:8080/api/auth/login')
  const { setIsAuth } = useContext(AppContext);

  const test = async () => {
    setLocalStorage( 'token', 'itisnewtoken')
    const a = await getLocalStorage( 'token' )
    console.log( a )
  }

  const login = () => {
    const settings = {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      }),
      headers: {
        "content-type": "application/json"
      }
    }
    
    doFetch( settings )
  };

  useEffect(()=> {
    if ( response ) {
      setLocaleState( response )
      
      if ( response.token ) {
        setLocalStorage( 'token', response.token )
        setIsAuth(true)
      } else {
        setIsAuth(false)
      }
      
      
      console.log( response )
      
    }
  }, [response, setLocaleState])


  return (
    <View style={s.auth}>
      <View style={s.loginField}>
        <View style={ s.titlePage }>
          <Text style={ s.titleText }>Страница входа</Text>
          <Text>
            <FontAwesome5 name={'sign-in-alt'} size={24} color="#925FBE" />
          </Text>
        </View>
        <View style={{ marginBottom: 16 }}>
          <AppInput placeholder={"Логин"} value={email} setValue={setEmail} />
        </View>

        <View style={{ marginBottom: 40 }}>
          <AppInput
            placeholder={"Пароль"}
            value={ password }
            setValue={ setPassword }
          />
        </View>

        <AppButton
          title={ "Войти" }
          func = { login }
        />
        <AppButton
          title={ "Проверить" }
          func = { test }
        />
      </View>
    </View>
  );
};

const s = new StyleSheet.create({
  titlePage: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 88

  },
  titleText: {
    fontSize: 24,
    color: '#333'
  },
  loginField: {
    paddingHorizontal: 32,
    backgroundColor: "white",
    borderRadius: 16,
    height: 500,
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
  },
  auth: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#925FBE",
    paddingHorizontal: 24,
  },
  button: {
    height: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },
});
