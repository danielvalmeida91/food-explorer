import styled from 'styled-components'

export const Container = styled.div`
  height: 4.8rem;
  max-width: 58.1rem;

  padding: 1.2rem 10rem;

  background: ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  gap: 1.4rem;

  > input {
    width: 34.4rem;
    border: none;
    font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;
  }
`
