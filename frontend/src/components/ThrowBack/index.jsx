import { useNavigate } from 'react-router-dom'
import { Container } from './styles'

import { FiChevronLeft } from 'react-icons/fi'
import { TextButton } from '../TextButton'

export function ThrowBack({ ...rest}){
  const navigate = useNavigate();

  function handleBack(){
    navigate(-1)
  }
  return(
    <Container {...rest}>
      <TextButton onClick={handleBack}>
        <FiChevronLeft size={32} />
        <span>voltar</span>
      </TextButton>
    </Container>
  )
}