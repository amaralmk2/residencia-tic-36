import {Feather} from "@expo/vector-icons";
import { Container, TaskText, TaskDone, TaskDelete } from "./styles";

type Props = {
    title: string;
    status: boolean;
    onCheck?: () => void;
    onDelete?: () => void;

};

export function Tasks({title, status, onCheck, onDelete}: Props){
    return(

        <Container>
            <TaskDone onPress={onCheck} style={status ? {backgroundColor: "#188a1e"} : {}}>
                {!status && <Feather name="square" size={24} color="white"/>}
                {status && <Feather name="check-square" size={24} color="white"/>}
            </TaskDone >
            <TaskText>{title}</TaskText>
            <TaskDelete onPress={onDelete}>
                <Feather name="trash-2" size={24} color="white"/>
            </TaskDelete>
        </Container>

    );
}