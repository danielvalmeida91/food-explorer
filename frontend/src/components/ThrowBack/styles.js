import styled from 'styled-components'

export const Container = styled.div`
  button {
    font: ${({ theme }) => theme.FONTS.POPPINS300_MEDIUM};
    font-size: 1.8rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    display: flex;
    align-items: center;
  }
`
