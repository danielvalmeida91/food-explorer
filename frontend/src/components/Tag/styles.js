import styled from 'styled-components'

export const Container = styled.div`
  min-width: 6.5rem;
  min-height: 3.2rem;

  padding: 0.4rem 0.8rem;
  background: ${({ theme }) => theme.COLORS.DARK_1000};

  border-radius: 0.5rem;

  text-align: center;

  /* margin: 0 2.4rem 2.4rem 2.4rem; */
  span {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font: ${({ theme }) => theme.FONTS.POPPINS100_MEDIUM};
  }
`
