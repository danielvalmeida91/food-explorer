import { useRef, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Container,
  Content,
  Banner,
  BannerTitle,
} from './styles'

import { Card } from '../../components/Card'
import { Carousel } from '../../components/Carousel'

import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import imgBannerDesktop from './../../assets/splash-home2.png'

import imgCard from './../../assets/salada-ravanello.png'


export function Home(){
  const windowWidth = useRef(window.innerWidth)
  const carousel = useRef();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [ items, setItems ] = useState("")
  const [ categories, setCategories ] = useState("")
  const [ ingredients, setIngredients ] = useState("")



  const [ widthCarousel, setWidthCarousel ] = useState(0)
  const [menuMobile, setMenuMobile] = useState(false)

  useEffect(() => {
    setWidthCarousel(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [carousel.current?.offsetWidth])

  useEffect(() => {
    async function fetchItems(){
      const response = await api.get('/items')
      setItems(response.data)
    }

    fetchItems()
  }, [])

  useEffect(() => {
    async function fetchCategories(){
      const responseCategories = await api.get('/categories')
      setCategories(responseCategories.data)
    }

    fetchCategories()
  }, [])

  function openMenu(){
    setMenuMobile(menuMobile ? false : true);
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

        {
          categories &&
          categories.map( category => (
            <Carousel
            key={category.category}
            reference={carousel}
            widthCarousel={widthCarousel}
            category={category.category}>
            { items &&
            items.map( item =>
              item.category === category.category ?
              <Card
                key={item.id}
                userStatus={user.status}
                itemRoute={`/items/${item.id}`}
                itemImg={item.picture ? `${api.defaults.baseURL}/files/${item.picture}` : ''}
                itemName={item.name}
                itemDescription={item.description}
                itemPrice={item.price}
              />
              : ''
            )}
          </Carousel>
          ))
        }
      </Content>
    </Container>
  );
}