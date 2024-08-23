import {Feather}  from '@expo/vector-icons';
import { Input, InputContainer, InputButton } from './styles';

export function InputAddTask(){

    return(
        <InputContainer>
        <Input 
        placeholder='Digite a tardefa...'
        placeholderTextColor="white"
        keyboardType='default'        
        />
        <InputButton>
        <Feather name='send' size={24} color="white" />
        </InputButton>
        </InputContainer>

    );

};