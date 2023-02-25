import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  overflow-x: hidden;
  overflow-y: auto;

  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas:
    'header'
    'content'
    'footer';

  background: ${({ theme }) => theme.COLORS.DARK_400};
`

export const Content = styled.div`
  grid-area: content;

  max-width: 90vw;

  margin: 0 auto;

  padding: 1.6rem;

  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Banner = styled.div`
  background: ${({ theme }) => theme.COLORS.GRADIENT_200};
  border-radius: 0.292rem;

  width: 90vw;
  height: 12rem;

  margin-top: 4.4rem;
  margin-bottom: 6.2rem;

  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-areas: 'img content';
  grid-template-columns: 1fr auto;

  position: relative;

  > img {
    position: absolute;
    grid-area: img;
    bottom: 0;
    left: -2rem;

    width: 19.1rem;
    height: 14.9rem;
  }

  > div {
    grid-area: content;
    width: 21.5rem;
  }

  @media (min-width: 768px) {
    width: 80vw;
    height: 13rem;
    margin-top: 5.4rem;
    > img {
      width: 24rem;
      height: 18.7rem;
    }

    > div {
      width: 32rem;
      > p {
        font: ${({ theme }) => theme.FONTS.POPPINS500_SMALL};
      }

      > span {
        font: ${({ theme }) => theme.FONTS.ROBOTO_BIG};
      }
    }
  }

  @media (min-width: 1024px) {
    width: 90vw;
    height: 26rem;

    grid-template-columns: 38.2rem auto;

    margin-top: 14.4rem;

    > img {
      width: 50.6rem;
      height: 35.4rem;
      bottom: -1rem;
      left: -12rem;
    }
    > div {
      width: 100%;
      > p {
        font: ${({ theme }) => theme.FONTS.POPPINS500_MEDIUM};
      }

      > span {
        font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL};
      }
    }
  }

  @media (min-width: 1440px) {
    max-width: 112rem;
    height: 26rem;

    grid-template-columns: 41.2rem auto;

    margin-top: 16.4rem;
    > img {
      width: 58.6rem;
      height: 41.2rem;
      bottom: -1.4rem;
      left: -20rem;
    }

    > div {
      width: 42.2rem;

      > p {
        font: ${({ theme }) => theme.FONTS.POPPINS500_MEDIUM};
      }

      > span {
        font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL};
      }
    }
  }
`

export const BannerTitle = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  > p {
    font: 600 1.8rem/140% 'Poppins';
  }

  > span {
    font: 400 1.2rem/140% 'Poppins';
  }
`
