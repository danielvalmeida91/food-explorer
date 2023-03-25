import styled from 'styled-components'

export const Container = styled.div`
  background: transparent;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  a,
  a:visited {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  img {
    width: 8.8rem;
    height: 8.8rem;
  }

  span {
    font: ${({ theme }) => theme.FONTS.POPPINS100_MEDIUM};
  }

  @media (min-width: 144rem) {
    img {
      width: 17.6rem;
      height: 17.6rem;
    }

    span {
      font: ${({ theme }) => theme.FONTS.POPPINS300_MEDIUM};
    }
  }
`
