import { Container, WrapCarousel } from './styles'

import Carousel from '@itseasy21/react-elastic-carousel'


export function CarouselItems({ title, children, breakPoints}) {

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

