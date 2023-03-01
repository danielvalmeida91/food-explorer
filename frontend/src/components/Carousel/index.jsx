import { WrapContainer,Container, InnerContainer, Title } from './styles'

export function Carousel({ children, reference, widthCarousel, category}){

  return(
    <WrapContainer>
      <Title>
        <p>{category}</p>
      </Title>
      <Container ref={reference} whileTap={{cursor: "grabbing"}}>
        <InnerContainer
          drag='x'
          dragConstraints={{ right: 0, left: -widthCarousel}}
        >
          {children}
        </InnerContainer>
      </Container>


    </WrapContainer>
  )
}