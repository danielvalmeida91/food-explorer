import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'

import {
  Container,
  ItemWrapper,
  ItemInfo,
  IngredientsWrapper,
  Controls
 } from './styles'

import { TextButton } from '../../components/TextButton'
import { Tag } from '../../components/Tag'
import { Amount } from '../../components/Amount'
import { Button } from '../../components/Button'

export function Details(){
  const { user } = useAuth();
  const [ item, setItem ] = useState('');
  const [ ingredients, setIngredients ] = useState('');
  const [ amount, setAmount ] = useState(1);

  const navigate = useNavigate();
  const params = useParams();


  useEffect(() => {
    async function fetchItem(){
      const response = await api.get(`/items/${params.id}`)
      setItem(response.data);
    }

    async function fetchIngredients(){
      const responseIngredients = await api.get(`/ingredients/${params.id}`)
      setIngredients(responseIngredients.data);
    }

    fetchItem();
    fetchIngredients();
  }, [])

  function handleBack(){
    navigate(-1);
  }

  function handleUpdateItem(){
    navigate(`/updateItem/${item.id}`)
  }

  return(
    <Container>
      <TextButton onClick={handleBack}>
        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M20.7071 5.86394C21.0976 6.25446 21.0976 6.88763 20.7071 7.27815L11.4142 16.571L20.7071 25.8639C21.0976 26.2545 21.0976 26.8876 20.7071 27.2782C20.3166 27.6687 19.6834 27.6687 19.2929 27.2782L9.29289 17.2782C8.90237 16.8876 8.90237 16.2545 9.29289 15.8639L19.2929 5.86394C19.6834 5.47341 20.3166 5.47341 20.7071 5.86394Z" fill="white"/>
        </svg>
        <span>voltar</span>
      </TextButton>
      <ItemWrapper>
        <img src={item.picture ? `${api.defaults.baseURL}/files/${item.picture}` : ''} alt="" />
        <ItemInfo>
         <h2>{item.name}</h2>
         <span>{item.description}</span>
         <IngredientsWrapper>
          { ingredients &&
            ingredients.map( ingredient => (
              <Tag name={ingredient.name} key={ingredient.id}/>
            ))
          }
         </IngredientsWrapper>
         <Controls>
            {
              user.status === 'user' && <Amount />
            }
            { user.status === 'user' &&
              <Button >
                <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.96094 13C8.96094 12.4477 9.40865 12 9.96094 12H22.9609C23.5132 12 23.9609 12.4477 23.9609 13C23.9609 13.5523 23.5132 14 22.9609 14H9.96094C9.40865 14 8.96094 13.5523 8.96094 13Z" fill="white"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.96094 17C8.96094 16.4477 9.40865 16 9.96094 16H22.9609C23.5132 16 23.9609 16.4477 23.9609 17C23.9609 17.5523 23.5132 18 22.9609 18H9.96094C9.40865 18 8.96094 17.5523 8.96094 17Z" fill="white"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.04672 5.58579C4.4218 5.21071 4.9305 5 5.46094 5H27.4609C27.9914 5 28.5001 5.21071 28.8751 5.58579C29.2502 5.96086 29.4609 6.46957 29.4609 7V26C29.4609 26.3466 29.2815 26.6684 28.9867 26.8506C28.6918 27.0329 28.3237 27.0494 28.0137 26.8944L24.4609 25.118L20.9081 26.8944C20.6266 27.0352 20.2952 27.0352 20.0137 26.8944L16.4609 25.118L12.9081 26.8944C12.6266 27.0352 12.2952 27.0352 12.0137 26.8944L8.46094 25.118L4.90815 26.8944C4.59816 27.0494 4.23002 27.0329 3.93521 26.8506C3.64039 26.6684 3.46094 26.3466 3.46094 26V7C3.46094 6.46957 3.67165 5.96086 4.04672 5.58579ZM27.4609 7L5.46094 7L5.46094 24.382L8.01372 23.1056C8.29525 22.9648 8.62662 22.9648 8.90815 23.1056L12.4609 24.882L16.0137 23.1056C16.2952 22.9648 16.6266 22.9648 16.9081 23.1056L20.4609 24.882L24.0137 23.1056C24.2952 22.9648 24.6266 22.9648 24.9081 23.1056L27.4609 24.382V7Z" fill="white"/>
                </svg>
                <p>pedir {  new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    }).format(item.price)}
                </p>
              </Button>
            }
            { user.status === 'admin' &&
              <Button onClick={handleUpdateItem}>
                <p>Editar prato</p>
              </Button>
            }

         </Controls>
        </ItemInfo>
      </ItemWrapper>
    </Container>
  )
}