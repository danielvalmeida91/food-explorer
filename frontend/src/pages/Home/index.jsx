import { useRef, useState, useEffect } from 'react'
import {
  Container,
  Content,
  Banner,
  BannerTitle,
  Menu,
} from './styles'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Card } from '../../components/Card'
import { Carousel } from '../../components/Carousel'
import { Search } from '../../components/Search'


import imgBannerMobile from './../../assets/splash-home.png'
import imgBannerDesktop from './../../assets/splash-home2.png'

import imgCard from './../../assets/salada-ravanello.png'


export function Home(){
  const windowWidth = useRef(window.innerWidth)
  const carousel = useRef();


  const [ widthCarousel, setWidthCarousel ] = useState(0)
  const [menuMobile, setMenuMobile] = useState(false)

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

  function openMenu(){
    setMenuMobile(menuMobile ? false : true);
  }

  return(
    <Container>
      <Menu>

          <Search
            placeholder='Busque por pratos ou ingredientes'
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M3.89499 1.61739C5.22926 0.725854 6.79794 0.25 8.40266 0.25H8.40271C10.5545 0.250137 12.6181 1.105 14.1397 2.62655C15.6613 4.14811 16.5161 6.21174 16.5163 8.36355V8.36359C16.5163 9.96831 16.0404 11.537 15.1489 12.8713C14.9924 13.1054 14.8244 13.3305 14.6456 13.5459L19.5694 18.4697C19.8623 18.7626 19.8623 19.2374 19.5694 19.5303C19.2765 19.8232 18.8016 19.8232 18.5087 19.5303L13.5849 14.6065C12.9626 15.1232 12.263 15.5467 11.5076 15.8596C10.025 16.4737 8.39366 16.6344 6.81978 16.3213C5.24589 16.0082 3.80019 15.2355 2.66548 14.1008C1.53078 12.9661 0.758031 11.5204 0.444967 9.94648C0.131902 8.37259 0.292578 6.74122 0.906677 5.25866C1.52078 3.77609 2.56072 2.50892 3.89499 1.61739ZM8.40261 1.75C7.09458 1.75001 5.81593 2.13789 4.72834 2.86459C3.64074 3.5913 2.79306 4.6242 2.2925 5.83268C1.79193 7.04116 1.66096 8.37093 1.91614 9.65384C2.17133 10.9368 2.80122 12.1152 3.72614 13.0401C4.65107 13.965 5.8295 14.5949 7.11241 14.8501C8.39532 15.1053 9.7251 14.9743 10.9336 14.4738C12.1421 13.9732 13.175 13.1255 13.9017 12.0379C14.6284 10.9503 15.0162 9.67167 15.0163 8.36364M8.40266 1.75C10.1567 1.75012 11.8388 2.44695 13.079 3.68721C14.3193 4.92748 15.0161 6.6096 15.0163 8.36359" fill="#C4C4CC"/>
            </svg>
        </Search>
      </Menu>
      <Header isMenu={menuMobile} openMenu={openMenu}/>
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