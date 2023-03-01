import { Container } from './styles'

export function ButtonSmall({ title, ...rest}){
  return(
    <Container
      {... rest}
    >
      {title}
    </Container>
  )
}