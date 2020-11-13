import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import useFetch from '../../hooks/useFetch'

import { Loading } from '../../components/Loading'

import { Tag } from "../Tag";

export const ReadComponent = (props) => {

  const [{ isLoading, response, setResponse }, doFetch] = useFetch('https://ksu-native.firebaseio.com/ksu.json')
  const [localState, setLocalState] = useState(null)

  useEffect(() => {
    const opt = { method: 'GET', headers: { 'Content-Type': 'application/json' } }
    doFetch(opt)
  }, [])

  useEffect(() => {
    if (response) {
      setLocalState(Object.keys(response).map(key => ({ ...response[key], id: key })))
    }
  }, [response, setLocalState])

  if (isLoading) {
    return <Loading />
  }

  return (
    <View>
      {
        localState &&
        localState.map((item, i) => {
          return (
            <View key={ i } style={s.newsItem}>
              <View style={s.header}>
                <Text style={s.title}>{ item.title }</Text>
                <FontAwesome5 name="exclamation" size={16} color="#925FBE" />
              </View>

              <Text style={s.text}>
                { item.text }
              </Text>

              <View style={{ marginTop: 64 }}>
                <Tag>
                  <Text style={{ paddingHorizontal: 16, color: '#925FBE' }}> { item.tag } </Text>
                </Tag>
              </View>
            </View>
          )
        })
      }



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
