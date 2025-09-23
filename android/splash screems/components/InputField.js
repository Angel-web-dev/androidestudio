import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function InputField({ label, value, onChangeText }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={label}
      keyboardType="numeric"
      value={value}
      onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
  },
});
