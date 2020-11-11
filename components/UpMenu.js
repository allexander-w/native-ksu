import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";

export const UpMenu = ({ setComponent }) => {
  const [menu, setMenu] = useState([
    {
      id: 0,
      title: "Общая информация",
      icon: "user-edit",
      active: true,
      color: "125, 164, 255",
      textColor: "#7098F5",
    },
    {
      id: 1,
      title: "Задолженность",
      icon: "money-check",
      active: false,
      color: "253, 100, 100",
      textColor: "#EC3C3C",
    },
    {
      id: 2,
      title: "Нужно прочитать",
      icon: "check",
      active: false,
      color: "158, 109, 201",
      textColor: "#925FBE",
    },
  ]);

  const changeCond = (id) => {
    setComponent(id);
    setMenu(
      menu.map((item) => {
        if (item.id === id) {
          return { ...item, active: true };
        } else {
          return {...item, active: false}
        }
      })
    )
    console.log(menu);
  };

  return (
    <View >
      <View style={s.menuWrapper}>
        {menu.map((menuItem, i) => {
          return (
            <TouchableOpacity
              onPress={() => {
                changeCond(menuItem.id);
              }}
              key={i}
              style={[
                s.menuItem,
                menuItem.active
                  ? {
                      ...s.active,
                      backgroundColor: `rgba(${menuItem.color}, 0.4)`,
                    }
                  : s.disElem,
                menuItem.id === 2 ? { marginRight: 0 } : null,
              ]}
            >
              {menuItem.active ? (
                <View style={[s.activeElem]}>
                  <View
                    style={{
                      ...s.iconBlock,
                      backgroundColor: `rgba(${menuItem.color}, 1)`,
                    }}
                  >
                    <Text>
                      {" "}
                      <FontAwesome5
                        name={menuItem.icon}
                        size={16}
                        color="white"
                      />{" "}
                    </Text>
                  </View>
                  <Text style={{ fontSize: 10, color: menuItem.textColor }}>
                    {menuItem.title}
                  </Text>
                </View>
              ) : (
                <Text>
                  {" "}
                  <FontAwesome5
                    name={menuItem.icon}
                    size={16}
                    color="#9794A9"
                  />{" "}
                </Text>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const s = new StyleSheet.create({
 
  menuWrapper: {
    flexDirection: "row",
    backgroundColor: '#F4F1FA',
    paddingTop: 24
  },
  menuItem: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: "#fff",
    marginRight: 16,
    justifyContent: "center",
  },
  active: {
    flex: 1,
  },
  
  activeElem: {
    flexDirection: "row",
    alignItems: "center",
  },
  disElem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconBlock: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginLeft: 6,
    marginRight: 16,
  },
});
