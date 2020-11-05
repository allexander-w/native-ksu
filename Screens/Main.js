import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { UpMenu } from "../components/UpMenu";
import { UserLayout } from "../layouts/UserLayout";

export const Main = () => {
  const [items, setItems] = useState([
    {
      title: "Факультет",
      active: false,
      id: 0,
      desc: "Описание",
    },
    {
      title: "Специальность",
      active: false,
      id: 1,
      desc: "Описание",
    },
    {
      title: "Учебная группа",
      active: false,
      id: 2,
      desc: "Описание",
    },
  ]);

  const changeCond = (id) => {
    setItems( 
      items.map(item => {
       if (item.id === id ) {
          return {...item, active: ( !item.active) }
        }
        return {...item}
      })
    )
  }

  return (
    <UserLayout>
      <UpMenu />
      <ScrollView style={{ paddingHorizontal: 24, marginTop: 46, marginBottom: 46 }}>
        <View style={s.scroll}>
          {items.map((item, index) => {
            return (
              <View key={index}>
                <TouchableOpacity
                  onPress={() => {
                    changeCond(item.id);
                  }}
                >
                  <View style={s.head}>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <View style={s.iconPlaceholder}>
                        <Text>icon</Text>
                      </View>
                      <Text>{item.title}</Text>
                    </View>
                    <View>
                      <Text>icon</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                {item.active && <Text> {item.desc} </Text>}
              </View>
            );
          })}
        </View>
      </ScrollView>
    </UserLayout>
  );
};

const s = new StyleSheet.create({
  scroll: {
    paddingHorizontal: 32,
    backgroundColor: "#fff",
    borderRadius: 16,
    minHeight: 128,
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 94,
  },
  iconPlaceholder: {
    marginRight: 32,
    width: 40,
    height: 40,
    borderRadius: 16,
    backgroundColor: "#7DA4FF",
    justifyContent: "center",
    alignItems: "center",
  },
});
