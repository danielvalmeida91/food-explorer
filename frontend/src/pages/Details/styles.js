import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  margin: 0 auto;

  padding: 1.6rem 5.6rem 3.4rem;

  display: flex;
  flex-direction: column;

  button {
    font: ${({ theme }) => theme.FONTS.POPPINS300_MEDIUM};
    font-size: 1.8rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    display: flex;
    align-items: center;
  }
`
export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1.6rem;
  margin-top: 1.6rem;

  h2 {
    font: ${({ theme }) => theme.FONTS.POPPINS100_MEDIUM};
    font-size: 2.7rem;
  }

  span {
    font: ${({ theme }) => theme.FONTS.POPPINS300_REGULAR};
    font-size: 1.6rem;
  }

  img {
    width: 26.4rem;
    height: 26.4rem;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 3.6rem;

    img {
      width: 32rem;
      height: 32rem;
    }
  }

  @media (min-width: 1440px) {
    gap: 4.8rem;
    img {
      width: 39rem;
      height: 39rem;
    }
  }
`

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;
  gap: 2.4rem;

  @media (min-width: 1024px) {
    align-items: flex-start;
  }
`

export const IngredientsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1.2rem;

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  button {
    font: ${({ theme }) => theme.FONTS.POPPINS100_MEDIUM};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1.2rem;
  }
`
