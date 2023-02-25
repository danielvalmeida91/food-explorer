import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 16.2rem;
  height: 3.2rem;

  padding: 0.4rem 5.2rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background: ${({ theme }) => theme.COLORS.TOMATO_100};

  border: none;
  border-radius: 5px;

  font: ${({ theme }) => theme.FONTS.POPPINS100_MEDIUM};

  &:hover {
    background: ${({ theme }) => theme.COLORS.TOMATO_200};
  }
  &:disabled {
    background: ${({ theme }) => theme.COLORS.TOMATO_400};
  }

  @media (min-width: 1024px) {
    width: 9.2rem;
    height: 4.8rem;
  }
`
