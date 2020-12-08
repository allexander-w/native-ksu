import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

export const AppInput = (props) => {
  const [focus, setFocus] = useState(false);

  const onFocus = () => {
    setFocus(true);
  };
  const onBlur = () => {
    setFocus(false);
  };

  return (
    <View style={[ s.inputWraper, focus ?  { borderColor: "rgba(158,109,201,0.4)" } : { borderColor: "rgba(235,232,241,1)" } ]}>
      <View style={s.inputForm}>
        <Text
          style={
            focus || props.value.length ? s.placeholderBlur : s.placeholderFocus
          }
        >
          { props.placeholder }
        </Text>
        <TextInput
          style={s.selfInput}
          onFocus={onFocus}
          onBlur={onBlur}
          onChangeText={(text) => props.setValue(text)}
          value={props.value}
        />
      </View>
    </View>
  );
};

const s = new StyleSheet.create({
  selfInput: {
    color: '#333'
  },
  placeholderBlur: {
    transform: [{ translateY: 0 }],
    fontSize: 10,
    color: "#9794A9",
  },
  placeholderFocus: {
    position: "absolute",
    color: "#9794A9",
  },
  inputForm: {
    flexDirection: "column",
  },
  inputWraper: {
    borderRadius: 16,
    
    borderWidth: 1,
    width: "100%",
    height: 64,
    paddingHorizontal: 16,
    justifyContent: "center",
  },
});
