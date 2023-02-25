import { Container } from './styles'

export function Button({ svg, title, numOrders, ...rest}){
  return(
    <Container
      {... rest}
    >
      {svg}{title}{numOrders}
    </Container>
  )
}