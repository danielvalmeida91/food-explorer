import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100%;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
`
export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.1rem;

  margin-bottom: 4.1rem;

  > span {
    font: ${({ theme }) => theme.FONTS.ROBOTO_BIGGER};
    font-size: 3.7rem;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;

  > h1 {
    font: ${({ theme }) => theme.FONTS.POPPINS400_MEDIUM};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    display: none;
  }

  > a {
    font: ${({ theme }) => theme.FONTS.POPPINS100_MEDIUM};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    transition: all 0.3s;

    &:hover {
      filter: brightness(0.7);
    }
  }

  @media (min-width: 1024px) {
    background: ${({ theme }) => theme.COLORS.DARK_700};

    padding: 6.4rem;

    border-radius: 1.6rem;

    input {
      background: transparent;
      border: 1px solid #fff;

      padding: 1.4rem 1.2rem;
    }
    > h1 {
      display: initial;
    }
  }
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 31.6rem;
  height: 4.8rem;

  padding: 1.2rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background: ${({ theme }) => theme.COLORS.TOMATO_100};

  border: none;
  border-radius: 5px;

  font: ${({ theme }) => theme.FONTS.POPPINS100_MEDIUM};

  transition: all 0.3s;

  &:hover {
    background: ${({ theme }) => theme.COLORS.TOMATO_200};
  }
  &:disabled {
    background: ${({ theme }) => theme.COLORS.TOMATO_400};
  }
`
