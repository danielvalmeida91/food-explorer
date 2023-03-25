import styled from 'styled-components'

export const Container = styled.div`
  padding: 3rem 2.7rem;

  background: ${({ theme }) => theme.COLORS.DARK_600};

  grid-area: footer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1024px) {
    padding: 2.4rem 12.3rem;
  }
`

export const Title = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;

  font: ${({ theme }) => theme.FONTS.ROBOTO_BIGGER};
  font-size: 1.6rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_700};
`

export const Rights = styled.div`
  font: 400 1.2rem 'Roboto';

  @media (min-width: 1368px) {
    font-size: 1.4rem;
  }
`
