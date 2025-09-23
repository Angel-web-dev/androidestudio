import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ResultCard({ resultado }) {
  return (
    <View style={styles.card}>
      <Text style={styles.result}>{resultado.text}</Text>
      <Text style={styles.details}>
        Peso: {resultado.peso} kg | Altura: {resultado.altura} m
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 25,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 3,
    width: "85%",
    alignItems: "center",
  },
  result: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
  },
  details: {
    marginTop: 8,
    fontSize: 14,
    color: "#666",
  },
});
