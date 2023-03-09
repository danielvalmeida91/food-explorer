import { Container, Title, Rights } from './styles'
import { BsHexagonFill } from 'react-icons/bs'

export function Footer(){
  return(
   <Container>

    <Title>
      <BsHexagonFill size={28} fill='#4D585E'/>
      <span>food explorer</span>
    </Title>
    <Rights>
      <span>© 2023 - Todos os direitos reservados.</span>
    </Rights>


   </Container>
  );
}