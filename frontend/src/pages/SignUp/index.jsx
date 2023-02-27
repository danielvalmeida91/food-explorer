import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { api } from '../../services/api'

import { Input } from '../../components/Input'
import { Container, Form, Title, Button } from './styles'

export function SignUp(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  async function handleSignUp(){
    if( !name || !email || !password ){
      return alert('Preencha todos os campos.')
    }
     await api.post('/users', { name, email, password})
     .then(() => {
      alert('Usuário cadastrado com sucesso.')
      navigate('/')
     })
     .catch(error => {
      if(error.response){
        alert(error.response.data.message)
      } else {
        alert('Não foi possível cadastrar.')

      }
     })



  }

  return(
      <Container>
        <Title>
          <svg width="39" height="44" viewBox="0 0 39 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.6574 0L38.4133 10.8287V32.4862L19.6574 43.3149L0.901548 32.4862V10.8287L19.6574 0Z" fill="#065E7C"/>
          </svg>
          <span>food explorer</span>
        </Title>
        <Form>
          <h1>Crie sua conta</h1>
          <Input
            label="Seu nome"
            placeholder="Exemplo: Maria da Silva"
            type="text"
            onChange={e => setName(e.target.value)}
          />
          <Input
            label="Email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="text"
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            label="Senha"
            placeholder="No mínimo 6 caracteres"
            type="password"
            onChange={e => setPassword(e.target.value)}
          />

          <Button type='button' onClick={handleSignUp}>
            Criar conta
          </Button>

          <Link to="/">
            Já tenho uma conta
          </Link>
        </Form>
      </Container>

  )
}
