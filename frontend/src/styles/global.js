import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root{
    font-size: 62.5%;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    font-size: 1.6rem;
  }

  #root{

    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;

  }

  body, input, button, textarea {
    outline:none;
  }

  a {
    text-decoration: none;

  }

  li {
    list-style: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }


`
