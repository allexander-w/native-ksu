import React, { useContext, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { DefaultLayout } from "../layouts/DefaultLayout";
import { AppContext } from "../context/appContext";
import { AppInput } from "../components/main/AppInput";
import { AppButton } from "../components/main/AppButton";
import useFetch from '../hooks/useFetch'
import useLocalStorage from '../hooks/useLocalStorage'

export const Settings = () => {
  const { setIsAuth } = useContext(AppContext);
  const [{isLoading, response, setResponse}, doFetch] = useFetch('http://91.228.154.18:8080/api/auth/login')

  const [login, setLogin] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  useEffect(()=> {

    // const token = 'tokene'
    // const setts = {
    //   method: 'GET',
    //   headers: {
    //     'Authorization' : `Bearer ${token}`
    //   }
    // }
    // doFetch()
  }, [])
  
  
  const logout = () => {
    setIsAuth(false);
  };

  return (
    <DefaultLayout>
      <ScrollView style={s.wrapper}>
        <Text style={s.title}> Мой аккаунт </Text>
        <View style={s.innerBlock}>
          <View style={s.innerTitle}>
            <Text style={s.settingsTitle}> Настройки аккаунта </Text>
            <Text>
              <FontAwesome5 name="sliders-h" size={24} color="black" />
            </Text>
          </View>

          <View style={{ paddingVertical: 16 }}>
            <AppInput
              placeholder={"Ваш логин"}
              value={login}
              setValue={setLogin}
            />
          </View>
          <View style={{ paddingBottom: 16 }}>
            <AppInput
              placeholder={"Старый пароль"}
              value={oldPassword}
              setValue={setOldPassword}
            />
          </View>
          <View style={{ paddingBottom: 16 }}>
            <AppInput
              placeholder={"Новый пароль"}
              value={newPassword}
              setValue={setNewPassword}
            />
          </View>
          <View style={{ paddingBottom: 32 }}>
            <AppInput
              placeholder={"Подтвердите пароль"}
              value={confirmPassword}
              setValue={setConfirmPassword}
            />
          </View>

          <AppButton title={"Сохранить"} func={login} />
        </View>

        <View style={s.innerBlock}>
          <View style={[s.innerTitle, { marginBottom: 16 }]}>
            <Text style={s.settingsTitle}> Другие настройки </Text>
            <Text>
              <FontAwesome5 name="sliders-h" size={24} color="black" />
            </Text>
          </View>
          <AppButton title={"Выйти"} func={logout} />
        </View>
        {/* <TouchableOpacity onPress={logout}>
          <Text> Logout cabinet! </Text>
        </TouchableOpacity> */}
      </ScrollView>
    </DefaultLayout>
  );
};

const s = new StyleSheet.create({
  title: {
    fontSize: 24,
    color: "#333",
    paddingVertical: 32,
  },
  wrapper: {
    paddingHorizontal: 24,
    marginBottom: 160,
  },
  innerBlock: {
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingHorizontal: 32,
    paddingVertical: 52,
    marginBottom: 16,
  },
  innerTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
  },
  settingsTitle: {
    fontSize: 20,
    color: "#333",
  },
});
