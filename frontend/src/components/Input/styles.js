import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.8rem;

  > input {
    width: 31.6rem;
    height: 4.8rem;

    padding: 1.6rem 1.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: ${({ theme }) => theme.COLORS.DARK_900};

    border: none;
    border-radius: 0.8rem;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
  > label {
    font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL};
  }
`
