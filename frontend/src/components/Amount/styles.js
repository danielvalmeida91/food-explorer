import styled from 'styled-components'

export const Container = styled.div`
  gap: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL};
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  @media (min-width: 1024px) {
    font: ${({ theme }) => theme.FONTS.ROBOTO_BIGGER};
  }
`
