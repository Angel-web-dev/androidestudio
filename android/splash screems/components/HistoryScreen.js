import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { getHistory } from "../storage/historyStorage";

export default function HistoryScreen() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getHistory();
      setRecords(data);
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial de IMC</Text>
      {records.length === 0 ? (
        <Text style={styles.empty}>No hay registros aún</Text>
      ) : (
        <FlatList
          data={records.reverse()}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.imc}>{item.text}</Text>
              <Text style={styles.details}>
                Peso: {item.peso} kg | Altura: {item.altura} m
              </Text>
              <Text style={styles.date}>{item.fecha}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9f9f9", padding: 15 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, color: "#333" },
  empty: { fontSize: 18, textAlign: "center", marginTop: 50, color: "gray" },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
  },
  imc: { fontSize: 18, fontWeight: "bold", marginBottom: 5 },
  details: { fontSize: 14, color: "#666" },
  date: { fontSize: 12, color: "gray", marginTop: 5 },
});
