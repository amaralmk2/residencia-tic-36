import { Container, CardTitle, CardValue } from "./styles";

type Props = {
    title: string;
    num: number;
    color: string;
}


export function CardNumber({title, num, color}:Props){
    return(

        <Container>
            <CardTitle>{title}</CardTitle>
            <CardValue style={color ? {color: color} : {}} >{num}</CardValue>
            </Container>

    );
}