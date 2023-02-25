import { Input } from '../../components/Input'
import { Container, Form, Title, Button, TextButton} from './styles'

export function SignIn(){
  return(
      <Container>
        <Title>
          <svg width="39" height="44" viewBox="0 0 39 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.6574 0L38.4133 10.8287V32.4862L19.6574 43.3149L0.901548 32.4862V10.8287L19.6574 0Z" fill="#065E7C"/>
          </svg>
          <span>food explorer</span>
        </Title>
        <Form>
          <h1>Faça Login</h1>
          <Input
            label="Email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="text"
          />
          <Input
            label="Senha"
            placeholder="No mínimo 6 caracteres"
            type="password"
          />

          <Button>
            Entrar
          </Button>

          <TextButton>
            Criar uma conta
          </TextButton>
        </Form>
      </Container>

  )
}