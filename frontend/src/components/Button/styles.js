import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.1rem;

  padding: 1.6rem 3.3rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background: ${({ theme }) => theme.COLORS.TOMATO_100};

  border: none;
  border-radius: 5px;

  font: ${({ theme }) => theme.FONTS.POPPINS100_MEDIUM};

  &:hover {
    background: ${({ theme }) => theme.COLORS.TOMATO_200};
  }
`
