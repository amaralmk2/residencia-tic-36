
import { useEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Tasks } from '../../components/Tasks';
import { CardNumber } from '../../components/CardNumber/';
import { InputAddTask } from '../../components/InputAddTask';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Home() {

  const [tasks, setTask] = useState<{description: string; checked: boolean}[]>([]);
  const [taskText, setTaskText] = useState("");
  const [countTask, setCountTask] = useState(0);
  const [countTaskChecked, setCountCheckedTask] = useState(0);

  function handleTaskAdd(){
   
    if(taskText == ""){
      return Alert.alert("Erro", "tarefa está sem descrição.");
    }

    if(tasks.some((task)=> task.description === taskText)) {
    return Alert.alert("Essa tarefa já foi criada.");
    }

    const newTask = {description: taskText, checked: false};
    setTask([...tasks, newTask]);
    setTaskText('');
  }

  function handleTaskChangeStatus(taskToChange: {description: string, checked: boolean}){

    const updatedTasks = tasks.filter((task) => task !== taskToChange);
    const newTask ={
      description: taskToChange.description,
      checked: !taskToChange.checked,
    }

    updatedTasks.push(newTask);
    setTask(updatedTasks);

  }

  function handleTaskChangeStatusDelete(taskToDelete: {description: string, checked: boolean}){

    Alert.alert(
      "Atenção", `Deseja realmente deletar a tarefa? ${taskToDelete.description}`,
    [
      {text: "Sim",
        onPress: () => {
          const updateTasks =tasks.filter((task) => task != taskToDelete)
          setTask(updateTasks);
        }
      },

      {text: "Cancelar", style: "cancel"}
      
    ])
    }

  useEffect(()=> {

    let totalTasks = tasks.length;
    setCountTask(totalTasks); 

  }, [tasks]);

  useEffect(()=> {

    let totalTasksChecked = tasks.filter(task => task.checked).length;
    setCountCheckedTask(totalTasksChecked)

  }, [tasks]);

  const countTaskOpen = countTask - countTaskChecked;

  return (
    <View style={styles.container}>
      <InputAddTask onPress={handleTaskAdd} onChangeText={setTaskText} value={taskText}/>
   

      <View style={{flexDirection: 'row', gap: 16}}>
        <CardNumber title={"Cadastrados"} num={countTask} color={"#1E1E1E"}/>
        <CardNumber title={"Em aberto"} num={countTaskOpen} color={"#E88A1A"} />
        <CardNumber title={"Finalizadas"} num={countTaskChecked} color={"#0E9577"}/>
        </View>    
    

      
      
      <View style={styles.tasks}>
      <Text>Tarefas: {countTask} </Text>
    <FlatList

      data={tasks}
      keyExtractor={(item, index) => index.toString()}
      renderItem={
        ({item}) => (
          <Tasks

          title={item.description}
          status={item.checked}
          onCheck={() => handleTaskChangeStatus(item)}
          onDelete={() => handleTaskChangeStatusDelete(item)}

          
          />
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

