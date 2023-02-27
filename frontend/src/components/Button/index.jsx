import { Container } from './styles'

export function Button({ svg, title, numOrders, ...rest}){
  return(
    <Container
      type="button"
      {... rest}
    >
      {svg}{title}{numOrders}
    </Container>
  )
}