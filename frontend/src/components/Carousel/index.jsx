import { WrapContainer,Container, InnerContainer, Title } from './styles'

export function Carousel({ children, reference, widthCarousel, category}){

  return(
    <WrapContainer>
      <Title>
        <p>{category}</p>
      </Title>
      <a href="" id='left'>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M25.8839 6.61612C26.372 7.10427 26.372 7.89573 25.8839 8.38388L14.2678 20L25.8839 31.6161C26.372 32.1043 26.372 32.8957 25.8839 33.3839C25.3957 33.872 24.6043 33.872 24.1161 33.3839L11.6161 20.8839C11.128 20.3957 11.128 19.6043 11.6161 19.1161L24.1161 6.61612C24.6043 6.12796 25.3957 6.12796 25.8839 6.61612Z" fill="white"/>
        </svg>

      </a>
      <Container ref={reference}whileTap={{cursor: "grabbing"}}>
        <InnerContainer
          drag='x'
          dragConstraints={{ right: 0, left: -widthCarousel}}
        >
          {children}
        </InnerContainer>
      </Container>
      <a href="" id='right'>
        <svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M1.1166 0.616117C1.60476 0.127961 2.39622 0.127961 2.88437 0.616117L15.3844 13.1161C15.8725 13.6043 15.8725 14.3957 15.3844 14.8839L2.88437 27.3839C2.39622 27.872 1.60476 27.872 1.1166 27.3839C0.628449 26.8957 0.628449 26.1043 1.1166 25.6161L12.7327 14L1.1166 2.38388C0.628449 1.89573 0.628449 1.10427 1.1166 0.616117Z" fill="white"/>
        </svg>

      </a>
    </WrapContainer>
  )
}