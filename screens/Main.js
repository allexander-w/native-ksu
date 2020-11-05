import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'; 

import { UpMenu } from "../components/UpMenu";
import { UserLayout } from "../layouts/UserLayout";

export const Main = () => {
  const [items, setItems] = useState([
    {
      title: "Факультет",
      active: false,
      id: 0,
      desc: "Факультет информационных технологий",
      icon: 'university'
    },
    {
      title: "Специальность",
      active: false,
      id: 1,
      desc: "Вычислительная техника и программное обеспечение",
      icon: 'business-time'
    },
    {
      title: "Учебная группа",
      active: false,
      id: 2,
      desc: "18-201-42",
      icon: 'users'
    },
  ]);

  const changeCond = (id) => {
    setItems(
      items.map(item => {
        if (item.id === id) {
          return { ...item, active: (!item.active) }
        }
        return { ...item }
      })
    )
  }

  return (
    <UserLayout>
      <UpMenu /><View style={s.scroll}>
        <ScrollView style={{ paddingHorizontal: 24 }}>

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
                        <Text><FontAwesome5 name={item.icon} size={16} color="white" /></Text>
                      </View>
                      <Text style={{fontSize: 18, color: '#333'}}>{item.title}</Text>
                    </View>
                    <View>
                      <Text><FontAwesome5 name="angle-down" size={16} color="#333" /></Text>
                    </View>
                  </View>
                </TouchableOpacity>
                {item.active && <Text style={item.id === 2 ? { marginBottom: 40 } : null, {color: '#9794A9', fontSize: 12, lineHeight: 24}}> {item.desc} </Text>}
              </View>
            );
          })}

        </ScrollView>
      </View>
    </UserLayout>
  );
};

const s = new StyleSheet.create({
  scroll: {
    marginTop: 46,
    marginHorizontal: 24,
    backgroundColor: "#fff",
    borderRadius: 16,
    // minHeight: 128,
    height: 280
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
