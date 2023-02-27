import { Container } from './styles'

export function Search({children, placeholder}){
  return (
    <Container>
      {children}
      <input
        type="text"
        placeholder={placeholder}
      />
    </Container>
  );
}