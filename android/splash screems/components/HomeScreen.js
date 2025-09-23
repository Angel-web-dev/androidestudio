import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import InputField from "../components/InputField";
import ResultCard from "../components/ResultCard";
import { saveRecord } from "../storage/historyStorage";

export default function HomeScreen() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcularIMC = async () => {
    const p = parseFloat(peso);
    const a = parseFloat(altura);

    if (!p || !a || p <= 0 || a <= 0) {
      setResultado({ text: "⚠️ Ingresa valores válidos", imc: null });
      return;
    }

    const imc = p / (a * a);
    let clasificacion = "";

    if (imc < 18.5) clasificacion = "Bajo peso";
    else if (imc < 24.9) clasificacion = "Normal";
    else if (imc < 29.9) clasificacion = "Sobrepeso";
    else clasificacion = "Obesidad";

    const resultObj = {
      imc: imc.toFixed(2),
      clasificacion,
      text: `IMC: ${imc.toFixed(2)} → ${clasificacion}`,
      peso: p,
      altura: a,
      fecha: new Date().toLocaleString(),
    };

    setResultado(resultObj);
    await saveRecord(resultObj);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.title}>Calculadora de IMC</Text>

      <InputField label="Peso (kg)" value={peso} onChangeText={setPeso} />
      <InputField label="Altura (m)" value={altura} onChangeText={setAltura} />

      <TouchableOpacity style={styles.button} onPress={calcularIMC}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      {resultado && <ResultCard resultado={resultado} />}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 25,
    color: "#333",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 12,
    width: "80%",
    alignItems: "center",
    marginTop: 15,
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
