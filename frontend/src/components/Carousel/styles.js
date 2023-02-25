import { motion } from 'framer-motion'
import styled from 'styled-components'

export const WrapContainer = styled.div`
  max-width: 90vw;

  position: relative;
  > #left,
  #right {
    position: absolute;
  }
  > #left {
    left: -3rem;
    top: 50%;
    z-index: 1;
  }

  > #right {
    right: -2rem;
    top: 50%;
    z-index: 2;
  }

  margin-bottom: 4rem;
`

export const Container = styled(motion.div)`
  cursor: grab;
  overflow: hidden;

  margin-top: 6.2rem;
`

export const InnerContainer = styled(motion.div)`
  display: flex;
  gap: 1.6rem;
  width: 100vw;
  height: 100%;

  @media (min-width: 1024px) {
    gap: 2.7rem;
  }
`

export const Title = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 2rem;
  > p {
    font: ${({ theme }) => theme.FONTS.POPPINS100_MEDIUM};
  }

  @media (min-width: 768px) {
    top: 2rem;
    > p {
      font: ${({ theme }) => theme.FONTS.POPPINS200_MEDIUM};
    }
  }

  @media (min-width: 768px) {
    top: 2rem;
    > p {
      font: ${({ theme }) => theme.FONTS.POPPINS300_MEDIUM};
    }
  }
`
