import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: grid;

  grid-template-areas: 'menu info';

  padding: 2.4rem 2.8rem 2.4rem 2.8rem;

  grid-area: header;
  position: relative;

  background: ${({ theme }) => theme.COLORS.DARK_700};

  h2 {
    font: ${({ theme }) => theme.FONTS.ROBOTO_BIGGEST};
    font-size: 2.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .menu-false {
    display: none;
  }

  .menu-true {
    display: flex;
    animation: showMenu 1s;
  }

  .menu-mobile {
    animation: showMenu 1s;
  }

  #menu {
    grid-area: menu;
  }

  .ordersDesktop,
  #signOut {
    display: none;
  }

  #signOut,
  #menu {
    border: none;
    background: none;
  }

  @media (min-width: 1440px) {
    grid-template-areas: 'info';

    padding: 2.4rem 12.3rem;

    #menu,
    #ordersMobile {
      display: none;
    }

    .search {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.4rem;
    }

    .ordersDesktop {
      display: flex;
    }

    #signOut {
      display: initial;
    }
  }
`

export const WrapperInfo = styled.div`
  grid-area: info;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .modal {
    position: absolute;
    z-index: 9999;
    top: calc(100% + 8px);
    width: 100%;

    background: ${({ theme }) => theme.COLORS.DARK_400};
    display: flex;
  }
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font: ${({ theme }) => theme.FONTS.ROBOTO_BIGGER};

  > span {
    font: ${({ theme }) => theme.FONTS.ROBOTO_SMALLEST};
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  @media (min-width: 1024px) {
    position: relative;

    > span {
      position: absolute;
      bottom: -1.8rem;
      right: 0;
    }
  }
`

export const Orders = styled.a`
  position: relative;
  padding: 0.5rem;
`

export const OrderNotification = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  right: 0;

  background: ${({ theme }) => theme.COLORS.TOMATO_100};
  > span {
    font: ${({ theme }) => theme.FONTS.POPPINS100_MEDIUM};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`

export const Search = styled.div`
  display: none;
  height: 4.8rem;
  max-width: 58.1rem;

  padding: 1.2rem 10rem;

  background: ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: 0.5rem;

  > input {
    width: 34.4rem;
    border: none;
    font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;
  }
`
export const HeaderMenu = styled.div`
  grid-area: header;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  padding: 6.6rem 0rem 2.8rem 2.8rem;

  background: ${({ theme }) => theme.COLORS.DARK_700};
  margin-bottom: 3.6rem;
  > h2 {
    font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL};
    font-size: 2.16rem;
  }
`

export const Modal = styled.div`
  width: 100%;

  height: 100vh;
  top: 11.4rem;
  bottom: 7.7rem;

  background: ${({ theme }) => theme.COLORS.DARK_700};

  position: absolute;
  z-index: 999;

  display: flex;
  flex-direction: column;
  align-items: center;
  .search {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 10rem;

    position: relative;
  }

  .links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.4rem;
    margin-top: 2.8rem;
  }

  .modal-menu {
    width: 100%;
    display: flex;
  }

  a,
  a:visited {
    font: ${({ theme }) => theme.FONTS.POPPINS100_REGULAR};
    font-size: 2.4rem;
    font-weight: 300;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  @keyframes showMenu {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
`
