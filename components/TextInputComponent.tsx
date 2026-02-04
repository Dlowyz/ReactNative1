import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

type textProp = {
  innerTxt: string;
  titleText: string;
  secure?: boolean;
};

const TextInputComponent = (Props: textProp) => {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");

  return (
    <TouchableOpacity
      style={{
        width: 300,
        height: 50,
        backgroundColor: "rgba(52, 52, 52, 0)",
        marginVertical: 20,
        marginTop: 40,
      }}
    >
      <Text style={{ zIndex: 10 }}>{Props.titleText}</Text>
      <TextInput
        secureTextEntry={Props.secure}
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={Props.innerTxt}
        placeholderTextColor="gray"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 8,
    height: "100%",
    width: "100%",
    borderWidth: 1,
    padding: 10,
    marginTop: 5,
  },
});

export default TextInputComponent;
