import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export const PaymentComponent = (props) => {
  return (
    <View>
      <View style={s.payment}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={s.icon}>
            <Text>
              <FontAwesome5 name="money-bill-wave" size={16} color="white" />
            </Text>
          </View>
          <View>
            <Text style={s.desc}>Ваша задолженность составляет:</Text>
            <Text style={s.paymentText}>2 000 000 ₸</Text>
          </View>
        </View>
      </View>

      <Text style={[ s.desc, {lineHeight: 18, marginTop: 32}]}>* Эта цифра не является точной, для уточнения информации обратитесь в бухгалтерию.</Text>
    </View>
  );
};

const s = new StyleSheet.create({
  payment: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 32,
  },
  icon: {
    backgroundColor: "#FD6464",
    width: 40,
    height: 40,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 24,
  },
  desc: {
    fontSize: 12,
    color: "#9794A9",
    marginBottom: 4,
  },
  paymentText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
  },
});
