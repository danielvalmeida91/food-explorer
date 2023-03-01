import styled from 'styled-components'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export const Container = styled.div`
  width: 100vw;
  height: 100%;

  display: grid;
  grid-template-areas:
    'header'
    'content'
    'footer';
  grid-template-rows: 11.4rem auto 7.7rem;
`

export const HeaderWrapper = styled(Header)`
  grid-area: header;
`
export const FooterWrapper = styled(Footer)`
  grid-area: footer;
`
