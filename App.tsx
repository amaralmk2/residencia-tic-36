import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Tasks } from './src/components/Tasks';
import { CardNumber } from './src/components/CardNumber';
import { InputAddTask } from './src/components/InputAddTask';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Feather }  from '@expo/vector-icons';

export default function App() {

  const [tasks, setTask] = useState<{description: string; checked: boolean}[]>([]);
  const [taskText, setTaskText] = useState("");
  const [countTask, setCountTask] = useState(0);

  function handleTaskAdd(){
   
    if(taskText == ""){
      return Alert.alert("Erro", "tarefa está sem descrição.");
    }

    if(tasks.some((tasks)=> tasks.description === taskText)) {
    return Alert.alert("Essa tarefa já foi criada.");
    }

    const newTask = {description: taskText, checked: false};
    setTask([...tasks, newTask]);
    setTaskText('');
  }

  useEffect(()=> {

    let totalTasks = tasks.length;
    setCountTask(totalTasks); 

  }, [tasks]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <InputAddTask onPress={handleTaskAdd} onChangeText={setTaskText} value={taskText}/>
   

      <View style={{flexDirection: 'row', gap: 16}}>
        <CardNumber />
        <CardNumber />
        <CardNumber />
        </View>    
    

      
      
      <View style={styles.tasks}>
      <Text>Tarefas: {countTask} </Text>
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

  },

  tasks: {

    justifyContent: 'flex-start',
    width: '100%',
    flexDirection: 'column',

  }

});

