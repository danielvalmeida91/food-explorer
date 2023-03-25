import { FiUpload } from 'react-icons/fi'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Form, Input} from './styles'

import { ThrowBack } from '../../components/ThrowBack'
import { IngredientItem } from '../../components/IngredientItem';
import { Button } from '../../components/Button';


import { api } from '../../services/api'


export function New(){
  const [ name, setName ] = useState('');
  const [ price, setPrice ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ category, setCategory ] = useState('');

  const [ ingredients, setIngredients ] = useState([])
  const [ newIngredient, setNewIngredient ] = useState('')

  const [ picture, setPicture ] = useState('')

  const navigate = useNavigate();


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

    if(!name || !price || !description || !category || !picture){
      return alert('Preencha todos os campos dos formulário.')
    }

    const itemData = new FormData();
    itemData.append('picture', picture)
    itemData.append('data', JSON.stringify({
      name,
      price,
      description,
      category,
      ingredients
    }))

    api.post('/items', itemData).then( () => {
      alert('Item cadastrado com sucesso!')
      navigate(-1)
    }).catch(error => {
      if(error.response){
        alert(error.response.data.message)
      } else {
        alert('Não foi possível realizar o cadastro.')
      }
    })
  }

  function isFormValid(){
    return (
      name &&
      category &&
      ingredients.length > 0 &&
      price &&
      description
    )
  }

  return(
    <Container>
      <ThrowBack />

      <Form>
        <h1 id="title">Novo prato</h1>

        <div id="upload">
          <input
            type="file"
            id="picture"
            name="picture"
            onChange={handleSelectImage}
          />
          <label htmlFor="picture" className="file-label">
            <FiUpload size={24} /> Selecionar Imagem
          </label>
        </div>


        <div id="name">
          <label >Nome</label>
          <Input
            placeholder='Ex.: Salada Ceasar'
            name='name'
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div id="category">
          <label>Categoria</label>
          <select
            name='category'
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Selecione</option>
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
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div id="description">
          <label>Descrição</label>
          <textarea
            placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
            name='description'
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <Button
          type='button'
          id="submit"
          disabled={!isFormValid()}
          onClick={handleSubmit}
        >
          Cadastrar
        </Button>
      </Form>
    </Container>
  )
}