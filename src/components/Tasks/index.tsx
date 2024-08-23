import {Feather} from "@expo/vector-icons";
import { Container, TaskText, TaskDone, TaskDelete } from "./styles";

export function Tasks(){
    return(

        <Container>
            <TaskDone>
                <Feather name="square" size={24} color="white"/>
            </TaskDone>
            <TaskText>Tarefa</TaskText>
            <TaskDelete>
                <Feather name="trash-2" size={24} color="white"/>
            </TaskDelete>
        </Container>

    );
}