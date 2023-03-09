import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  /* color: white; */
  font-size: 2rem;

  > h2 {
    font: ${({ theme }) => theme.FONTS.POPPINS100_MEDIUM};
  }

  @media (min-width: 768px) {
    top: 2rem;
    > h2 {
      font: ${({ theme }) => theme.FONTS.POPPINS200_MEDIUM};
    }
  }

  @media (min-width: 768px) {
    top: 2rem;
    > h2 {
      font: ${({ theme }) => theme.FONTS.POPPINS300_MEDIUM};
    }
  }

  .rec-arrow {
    color: #fff !important;
    background-color: transparent !important;
    box-shadow: none !important;
  }
  .rec-arrow:hover {
    color: ${({ theme }) => theme.COLORS.COLOR_TEXT_BLUE} !important;
  }
`

export const WrapCarousel = styled.div``
