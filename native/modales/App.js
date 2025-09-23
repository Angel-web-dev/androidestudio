import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Modal, TextInput } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  const [modal, setModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  if (!loggedIn) {
    return (
      <View style={styles.loginContainer}>
        <Text style={styles.loginTitle}>Woolaaa!</Text>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button
          title="Ingresar"
          onPress={() => {
            // Simple login logic (replace with real validation)
            if (username && password) setLoggedIn(true);
          }}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modal}
      >
        <View style={styles.center}>
          <View style={styles.content}>
            <Text>Estoy en un modal</Text>
            <Button
              title="Cerrar"
              onPress={() => setModal(false)}
            />
          </View>
        </View>
      </Modal>
      <Text>Esta area esta fuera del contenido del modal</Text>
      {/* ...rest of your content... */}
      <Button
        title="Abrir"
        onPress={() => setModal(true)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: '#7d8085',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  loginTitle: {
    fontSize: 32,
    color: '#fff',
    marginBottom: 30,
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 15,
    fontSize: 18,
  },
  content: {
    flex: 1,
    backgroundColor: "rgb(128,131,133)",
    alignItems: "center",
    justifyContent: "center",
    margin: 200,
  },
  center: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
