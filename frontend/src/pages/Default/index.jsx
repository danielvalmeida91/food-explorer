import React from 'react'

import { Container, HeaderWrapper, FooterWrapper } from './styles'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export function Default({ Content }){
  return(
    <Container>
      <HeaderWrapper as={Header} />
      {Content}
      <FooterWrapper as={Footer} />
    </Container>
  )
}