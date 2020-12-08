import React, { useContext } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { AppContext } from "../../context/appContext";

export const MainHeader = (props) => {
  const { setScreen } = useContext(AppContext);

  const goHome = () => {
    setScreen(null);
  };

  return (
    <View style={s.header}>
      <TouchableOpacity style={s.backHome} onPress={goHome}>
        <Text>
          <FontAwesome5 name="home" size={16} color="#9E6DC9" />
        </Text>
      </TouchableOpacity>
      <Text style={ s.title }>Настройки</Text>
      <Text>
        <FontAwesome5 name="cogs" size={24} color="#9794A9" />
      </Text>
    </View>
  );
};

const s = new StyleSheet.create({
  header: {
    height: 80,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingTop: 16,
    paddingHorizontal: 24,
  },
  backHome: {
    width: 50,
    height: 50,
    borderRadius: 16,
    backgroundColor: "#F4F1FA",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    color: '#333'
  }
});
