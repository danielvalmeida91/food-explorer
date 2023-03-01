import { Container } from './styles'

export function Tag({ name }){
  return(
    <Container>
      <span>{name}</span>
    </Container>
  )
}