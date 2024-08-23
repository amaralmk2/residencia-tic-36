import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Tasks } from './src/components/Tasks';

export default function App() {

  useEffect(()=>{
  console.warn("checked!")
},[]);



  return (
    <View style={styles.container}>
      <Text style={{color:'red'}}>teste</Text>
      <Tasks></Tasks>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
