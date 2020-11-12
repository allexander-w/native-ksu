import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { Tag } from "../Tag";

export const ReadComponent = (props) => {

  return (
    <View>
      <View style={s.newsItem}>
        <View style={s.header}>
          <Text style={s.title}>Read Component!</Text>
          <FontAwesome5 name="exclamation" size={16} color="#925FBE" />
        </View>

        <Text style={s.text}>
          Lorem ipsum — классический текст-«рыба». Является искажённым отрывком
          из философского трактата Марка Туллия Цицерона «О пределах добра и
          зла», написанного в 45 году до н. э. на латинском языке, обнаружение
          сходства приписывается Ричарду МакКлинтоку
        </Text>

        <View style={{ marginTop: 64 }}>
          <Tag>
            <Text style={{ paddingHorizontal: 16, color: '#925FBE'}}> Tagname </Text>
          </Tag>
        </View>
      </View>


      <View style={s.newsItem}>
        <View style={s.header}>
          <Text style={s.title}>Read Component!</Text>
          <FontAwesome5 name="exclamation" size={16} color="#925FBE" />
        </View>

        <Text style={s.text}>
          Lorem ipsum — классический текст-«рыба». Является искажённым отрывком
          из философского трактата Марка Туллия Цицерона «О пределах добра и
          зла», написанного в 45 году до н. э. на латинском языке, обнаружение
          сходства приписывается Ричарду МакКлинтоку
        </Text>

        <View style={{ marginTop: 64 }}>
          <Tag>
            <Text style={{ paddingHorizontal: 16, color: '#925FBE'}}> Tagname </Text>
          </Tag>
        </View>
      </View>


      <View style={s.newsItem}>
        <View style={s.header}>
          <Text style={s.title}>Read Component!</Text>
          <FontAwesome5 name="exclamation" size={16} color="#925FBE" />
        </View>

        <Text style={s.text}>
          Lorem ipsum — классический текст-«рыба». Является искажённым отрывком
          из философского трактата Марка Туллия Цицерона «О пределах добра и
          зла», написанного в 45 году до н. э. на латинском языке, обнаружение
          сходства приписывается Ричарду МакКлинтоку
        </Text>

        <View style={{ marginTop: 64 }}>
          <Tag>
            <Text style={{ paddingHorizontal: 16, color: '#925FBE'}}> Tagname </Text>
          </Tag>
        </View>
      </View>
     
    </View>
  );
};

const s = new StyleSheet.create({
  newsItem: {
    borderRadius: 16,
    backgroundColor: "#fff",
    padding: 32,
    marginBottom: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    color: "#333",
  },
  text: {
    marginTop: 32,
    fontSize: 16,
    lineHeight: 32,
    color: "#ccc",
  },
});
