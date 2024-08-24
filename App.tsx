import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Tasks } from './src/components/Tasks';
import { CardNumber } from './src/components/CardNumber';
import { InputAddTask } from './src/components/InputAddTask';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Feather }  from '@expo/vector-icons';

export default function App() {

  const [tasks, setTask] = useState<{description: string; checked: boolean}[]>([]);
  const [taskText, setTaskText] = useState("");

  function handleTaskAdd(){
   
    if(taskText.length > 0){
      console.log("Vazio!");
    }

    if(tasks.some((tasks)=> tasks.description === taskText)) {
    console.log("Essa tarefa já existe!");
    }

    const newTask = {description: taskText, checked: false};
    setTask([...tasks, newTask]);
    setTaskText('');
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <View style={styles.InputContainer}>
        <TextInput
        style={styles.input}
        placeholder='Digite a tardefa...'
        placeholderTextColor="white"
        keyboardType='default' 
        onChangeText={setTaskText}
        value={taskText}   
        />
        <TouchableOpacity style={styles.InputButton}>
        <Feather name='send' size={24} color="white" />
        </TouchableOpacity>
        </View>

      <View style={{flexDirection: 'row', gap: 16}}>
        <CardNumber />
        <CardNumber />
        <CardNumber />
        </View>    
  
      
    <FlatList

      data={tasks}
      keyExtractor={(item, index) => index.toString()}
      renderItem={
        ({item}) => (
          <Tasks />
        )
      }

      ListEmptyComponent={() => (

        <View><Text >Você ainda não adcionou nenhuma task!</Text></View>
      )}/>
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

  InputContainer:{

    flexDirection: 'row',
    borderRadius: 4,
    backgroundColor: '#252627',

  },

  input: {

    flex: 1,
    padding: 16,
    color: '#fff',

  },

  InputButton: {

    backgroundColor: '#1E1E1E',
    padding: 16,
    borderRadius: 4,

  }

});

