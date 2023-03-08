import { useNavigate } from 'react-router-dom'
import { Container } from './styles'

import { TextButton } from '../TextButton'

export function ThrowBack(){
  const navigate = useNavigate();

  function handleBack(){
    navigate(-1)
  }
  return(
    <Container>
      <TextButton onClick={handleBack}>
        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M20.7071 5.86394C21.0976 6.25446 21.0976 6.88763 20.7071 7.27815L11.4142 16.571L20.7071 25.8639C21.0976 26.2545 21.0976 26.8876 20.7071 27.2782C20.3166 27.6687 19.6834 27.6687 19.2929 27.2782L9.29289 17.2782C8.90237 16.8876 8.90237 16.2545 9.29289 15.8639L19.2929 5.86394C19.6834 5.47341 20.3166 5.47341 20.7071 5.86394Z" fill="white"/>
        </svg>
        <span>voltar</span>
      </TextButton>
    </Container>
  )
}