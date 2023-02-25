import { useRef, useState, useEffect } from 'react'
import {
  Container,
  Content,
  Banner,
  BannerTitle
} from './styles'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Card } from '../../components/Card'
import { Carousel } from '../../components/Carousel'

import imgBannerMobile from './../../assets/splash-home.png'
import imgBannerDesktop from './../../assets/splash-home2.png'

import imgCard from './../../assets/salada-ravanello.png'


export function Home(){
  const windowWidth = useRef(window.innerWidth)
  const carousel = useRef();

  const [ widthCarousel, setWidthCarousel ] = useState(0)

  useEffect(() => {
    setWidthCarousel(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])

  const dataItems = {
    categories: [
      {id:1, description: 'Refeições'},
      {id:2, description: 'Sobremesas'},
      {id:3, description: 'Bebidas'},
    ],
    items: [
      {id: 1, itemImg: imgCard,itemName: 'Salada Ravanello', itemDescription: 'Presunto de parma e rúcula em um pão com fermentação natural.', itemPrice: 49.97},
      {id: 2, itemImg: imgCard,itemName: 'Salada Ravanello', itemDescription: 'Presunto de parma e rúcula em um pão com fermentação natural.', itemPrice: 49.97},
      {id: 3, itemImg: imgCard,itemName: 'Salada Ravanello', itemDescription: 'Presunto de parma e rúcula em um pão com fermentação natural.', itemPrice: 49.97},
      {id: 4, itemImg: imgCard,itemName: 'Salada Ravanello', itemDescription: 'Presunto de parma e rúcula em um pão com fermentação natural.', itemPrice: 49.97},
      {id: 5, itemImg: imgCard,itemName: 'Salada Ravanello', itemDescription: 'Presunto de parma e rúcula em um pão com fermentação natural.', itemPrice: 49.97},
      {id: 6, itemImg: imgCard,itemName: 'Salada Ravanello', itemDescription: 'Presunto de parma e rúcula em um pão com fermentação natural.', itemPrice: 49.97},
      {id: 7, itemImg: imgCard,itemName: 'Salada Ravanello', itemDescription: 'Presunto de parma e rúcula em um pão com fermentação natural.', itemPrice: 49.97},
      {id: 8, itemImg: imgCard,itemName: 'Salada Ravanello', itemDescription: 'Presunto de parma e rúcula em um pão com fermentação natural.', itemPrice: 49.97},
    ]
  }

  const { items, categories } = dataItems;

  return(
    <Container>
      <Header />
      <Content>
        <Banner>
          <img src={ (windowWidth.current >= 1024 ) ? imgBannerDesktop: imgBannerMobile}alt="Hamburguer, manjericao e frustas frescas." />
          <BannerTitle>
            <p>Sabores inigualáveis</p>
            <span>Sinta o cuidado do preparo com ingredientes selecionados.</span>
          </BannerTitle>
        </Banner>

        {
          categories.map( category => (
            <Carousel
            key={category.id}
            reference={carousel}
            widthCarousel={widthCarousel}
            category={category.description}
          >
          {items.map(item => (
                  <Card
                    key={item.id}
                    itemImg={imgCard}
                    itemName={item.itemName}
                    itemDescription={item.itemDescription}
                    itemPrice={item.itemPrice}
                  />
                ))}
          </Carousel>
          ))
        }
      </Content>
      <Footer />
    </Container>
  );
}