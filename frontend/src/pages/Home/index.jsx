import { useState, useEffect } from 'react'
import {
  Container,
  Content,
  Banner,
  BannerTitle,
} from './styles'

import { Card } from '../../components/Card'
import { CarouselItems } from '../../components/CarouselItems'

// import Carousel from '@itseasy21/react-elastic-carousel'

import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import imgBannerDesktop from './../../assets/splash-home2.png'



export function Home(){
  const { user } = useAuth();
  const [ drinks, setDrinks ] = useState([])
  const [ desserts, setDesserts ] = useState([])
  const [ meals, setMeals ] = useState([])
  const [ items , setItems ] = useState([])

  const breakPoints = [
    { width: 1 , itemsToShow: 1},
    { width: 425 , itemsToShow: 2},
    { width: 1024 , itemsToShow: 3},
    { width: 1440 , itemsToShow: 4}
  ]


  useEffect(() => {
    async function fetchItems(){
      await api.get('/items')
      .then(
          response => setItems(response.data)
      )
    }
    fetchItems()
    filterItems()
  }, [items])

  function filterItems(){
    const filteredDrinks = items.filter( item => item.category === 'Bebidas' )
    setDrinks(filteredDrinks)

    const filteredDesserts = items.filter( item => item.category === 'Sobremesas')
    setDesserts(filteredDesserts)

    const filteredMeals = items.filter( item => item.category === 'Refeições')
    setMeals(filteredMeals)
  }

  return(
    <Container>
      <Content>
        <Banner>
          <img src={imgBannerDesktop} alt="Hamburguer, manjericao e frustas frescas." />
          <BannerTitle>
            <p>Sabores inigualáveis</p>
            <span>Sinta o cuidado do preparo com ingredientes selecionados.</span>
          </BannerTitle>
        </Banner>

        <CarouselItems title='Refeições'>
          {
            meals &&
            meals.map( meal =>
              <Card
                key={meal.id}
                userStatus={user.status}
                itemRoute={`/items/${meal.id}`}
                itemEditRoute={`/updateItem/${meal.id}`}
                itemImg={meal.picture ? `${api.defaults.baseURL}/files/${meal.picture}` : ''}
                itemName={meal.name}
                itemDescription={meal.description}
                itemPrice={meal.price}
              />
            )
        }
        </CarouselItems>

        <CarouselItems title='Bebidas'>
          {
            drinks &&
            drinks.map( drink =>
              <Card
                key={drink.id}
                userStatus={user.status}
                itemRoute={`/items/${drink.id}`}
                itemImg={drink.picture ? `${api.defaults.baseURL}/files/${drink.picture}` : ''}
                itemName={drink.name}
                itemDescription={drink.description}
                itemPrice={drink.price}
              />
            )
        }
        </CarouselItems>

        <CarouselItems title='Sobremesas'>
          {
            desserts &&
            desserts.map( dessert =>
              <Card
              key={dessert.id}
              userStatus={user.status}
              itemRoute={`/items/${dessert.id}`}
              itemImg={dessert.picture ? `${api.defaults.baseURL}/files/${dessert.picture}` : ''}
              itemName={dessert.name}
              itemDescription={dessert.description}
              itemPrice={dessert.price}
            />
            )
        }
        </CarouselItems>

      </Content>
    </Container>
  );
}