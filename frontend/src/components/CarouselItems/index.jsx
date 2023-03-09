import { Container, WrapCarousel } from './styles'

import Carousel from '@itseasy21/react-elastic-carousel'


export function CarouselItems({ title, children}) {
  const breakPoints = [
    { width: 1 , itemsToShow: 1},
    { width: 425 , itemsToShow: 2},
    { width: 1024 , itemsToShow: 3},
    { width: 1440 , itemsToShow: 4}
  ]
  return(
    <Container >
      <h2>{title}</h2>
      <WrapCarousel>
        <Carousel
          breakPoints={breakPoints}
          pagination={false}
        >
          {children}
        </Carousel>
      </WrapCarousel>

    </Container>
  );
}

