import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Container, Form, Input} from './styles'

import { ThrowBack } from '../../components/ThrowBack'
import { IngredientItem } from '../../components/IngredientItem';
import { Button } from '../../components/Button';


import { api } from '../../services/api'


export function UpdateItem(){
  const params = useParams();

  const [ name, setName ] = useState('');
  const [ price, setPrice ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ category, setCategory ] = useState('');

  const [ ingredients, setIngredients ] = useState([])
  const [ newIngredient, setNewIngredient ] = useState('')

  const [ id, setId ] = useState('');

  const [ oldPicture, setOldPicture ] = useState('')
  const [ picture, setPicture ] = useState('')

  const navigate = useNavigate();


  useEffect( () => {

    async function fetchIngredients(){
      await api.get(`/ingredients/${params.id}`).then(
        response => {
          const ingredients = response.data.map( ingredient => ingredient.name )
          setIngredients(ingredients)
        })
    }

    async function fetchItem(){
      await api.get(`/items/${params.id}`)
      .then(
        response => {
          setCategory(response.data.category)
          setName(response.data.name)
          setPrice(response.data.price)
          setDescription(response.data.description)
          setOldPicture(response.data.picture)
          setId(response.data.id)
        }
      )

    }

    fetchItem();
    fetchIngredients();
  }, [])


  function handleAddIngredient(){
    setIngredients( prevState => [...prevState, newIngredient])
    setNewIngredient("")

  }

  function handleRemoveIngredient(deleted){
    setIngredients( prevState => prevState.filter(tag => tag !== deleted))
  }

  function handleSelectImage(event) {
    const file = event.target.files[0]
    setPicture(file)
  }

  const handleSubmit = () => {
    if(newIngredient != ''){
      return alert('Existem ingredientes pendentes.')
    }

    if(!name || !price || !description || !category){
      return alert('Preencha todos os campos dos formulário.')
    }

    const itemUpdated = new FormData();
    itemUpdated.append('picture', picture ?? oldPicture)
    itemUpdated.append('data', JSON.stringify({
      name,
      price,
      description,
      category,
      ingredients
    }))

    if(itemUpdated.picture === oldPicture) {
      itemUpdated.append('picStatus', true)
    } else {
      itemUpdated.append('picStatus', false)
    }


    api.put(`/items/${id}`, itemUpdated).then( () => {
      alert('Item atualizado com sucesso!')
      navigate(-1)
    }).catch(error => {
      if(error.response){
        alert(error.response.data.message)
      } else {
        alert('Não foi possível realizar a atualização.')
      }
    })
  }

  return(
    <Container>
      <ThrowBack />

      <Form>
        <h1 id="title">Editar prato</h1>

        <div id="upload">
          <input
            type="file"
            id="picture"
            name="picture"
            onChange={handleSelectImage}
          />
          <label htmlFor="picture" className="file-label" />
        </div>


        <div id="name">
          <label >Nome</label>
          <Input
            placeholder='Ex.: Salada Ceasar'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div id="category">
          <label>Categoria</label>
          <select
            name='category'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Refeições">Refeições</option>
            <option value="Bebidas">Bebidas</option>
            <option value="Sobremesas">Sobremesas</option>
          </select>
        </div>

        <div id="ingredients">
          <label>Ingredientes</label>
          <div className="ingredients">
            { ingredients.map( (ingredient, index) => (
              <IngredientItem
                key={String(index)}
                value={ingredient}
                onClick={() => handleRemoveIngredient(ingredient)}
              />
            ))}
            <IngredientItem
              isNew
              placeholder="Adicionar"
              value={newIngredient}
              onChange={e => setNewIngredient(e.target.value)}
              onClick={handleAddIngredient}
            />
          </div>
        </div>

        <div id="price">
          <label >Preço</label>
          <Input
            label='Preço'
            name='price'
            placeholder='R$ 00,00'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div id="description">
          <label>Descrição</label>
          <textarea
            placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
            name='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div id="buttons">
          <button id='delete'>Excluir item</button>
          <Button id='submit' type='button' onClick={handleSubmit}>
            Salvar alterações
          </Button>
        </div>
      </Form>
    </Container>
  )
}