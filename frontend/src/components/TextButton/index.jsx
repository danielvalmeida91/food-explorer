import { Container } from './styles'

export function TextButton({ children, ...rest}){
  return(
    <Container {...rest}>
      {children}
    </Container>
  );
}