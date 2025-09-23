import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, Dimensions } from 'react-native';

const PRESET_USER = 'admin';
const PRESET_PASS = 'aguacate';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [text, setText] = useState('');
  const [enviar, setEnviar] = useState('');

  const handleLogin = () => {
    if (username === PRESET_USER && password === PRESET_PASS) {
      setError('');
      setLoggedIn(true);
      alert('Login successful!');
    } else {
      setError('Incorrect username or password');
    }
  };

  if (!loggedIn) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <Button title="Login" onPress={handleLogin} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollview}>
        {[...Array(30)].map((_, i) => (
          <Text key={i}>Hola {enviar}</Text>
        ))}
        <TextInput
          style={styles.input}
          placeholder='Escribe aqui'
          value={text}
          onChangeText={t => setText(t)}
        />
        <Button title='Enviar'
          onPress={() => {
            setEnviar(text);
            alert('Texto enviado con exito');
          }}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#eee',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  scrollview: {
    width: Dimensions.get('window').width,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: 'center',
  },
  error: {
    color: 'red',
    marginBottom: 12,
    textAlign: 'center',
  },
});
