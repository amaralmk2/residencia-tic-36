import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Tasks } from './src/components/Tasks';
import { CardNumber } from './src/components/CardNumber';

export default function App() {

  useEffect(()=>{
  console.warn("checked!")
},[]);



  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', gap: 16}}>
        <CardNumber />
        <CardNumber />
        <CardNumber />
        </View>
      <Tasks />
      <Tasks />
      <Tasks />
      <Tasks />
      <Tasks />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28385E',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    gap: 16,
  },
});
