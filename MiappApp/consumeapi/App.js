import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default function App() {
  const[loading, setLoading]=useState(true)

if(loading){
  return(<View style={styles.center}> <Text >Cargando...</Text>
 <ActivityIndicator size ='large' color= '#00f'/>
  </View> )
}

  return (
    <View style={styles.container}>
      <Text>Consumiendo una API</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center:{
    flex:1,
    backgroundColor: '#ffffffff',
    alignItems:'center',
    justifyContent:'center',

  }
});
