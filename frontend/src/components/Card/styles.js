import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  gap: 1.2rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  text-align: center;

  a,
  a:visited {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .actionButton {
    position: absolute;

    top: 1.6rem;
    right: 1.6rem;

    font-size: 2rem;

    @media (min-width: 768px) {
      font-size: 2.8rem;
    }
  }
`

export const Item = styled.div`
  background: ${({ theme }) => theme.COLORS.DARK_200};

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1.2rem;

  padding: 2.4rem;

  position: relative;
  > p {
    font: ${({ theme }) => theme.FONTS.POPPINS100_MEDIUM};
  }

  > .itemDescription {
    font: ${({ theme }) => theme.FONTS.ROBOTO_SMALLER};
    display: none;
  }

  > span {
    font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL};
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  img {
    width: 8.8rem;
    height: 8.8rem;
  }

  @media (min-width: 768px) {
    > p {
      font-size: 1.6rem;
    }

    span {
      font-size: 1.8rem;
    }

    .amount {
      font-size: 1.8rem;
    }

    img {
      width: 17.6rem;
      height: 17.6rem;
    }
  }

  @media (min-width: 1024px) {
    gap: 1.5rem;
    .itemDescription {
      display: initial;
      max-width: 25.6rem;
    }
    > p {
      font: ${({ theme }) => theme.FONTS.POPPINS300_BOLD};
    }

    > span {
      font: ${({ theme }) => theme.FONTS.ROBOTO_BIGGER};
    }

    img {
      width: 26.4rem;
      height: 26.4rem;
    }
  }
  @media (min-width: 1440px) {
    img {
      width: 34rem;
      height: 34rem;
    }
  }
`

export const Controls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    margin-top: 1.5rem;
  }
`
