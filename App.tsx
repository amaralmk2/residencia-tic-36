import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Tasks } from './src/components/Tasks';
import { CardNumber } from './src/components/CardNumber';
import { InputAddTask } from './src/components/InputAddTask';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {

  const [Task, setTask] = useState<{description: string; checked: boolean}[]>([]);
  const [taskText, setTaskText] = useState("");

  return (
    <View style={styles.container}>
      
      <InputAddTask/>
      <View style={{flexDirection: 'row', gap: 16}}>
        <CardNumber />
        <CardNumber />
        <CardNumber />
        </View>    
  
      
    <FlatList

      data={Task}
      keyExtractor={(item, index) => index.toString()}
      renderItem={
        ({item}) => (
          <Tasks />
        )
      }

      ListEmptyComponent={() => (

        <View><Text >Você ainda não adcionou nenhuma task!</Text></View>
      )}


        />

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
    paddingTop: 64,
    gap: 16,
  },
});
