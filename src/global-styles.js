import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;
    background-color: #EAEFF0;
    -webkit-font-smoothing: antialiased;

    .draggable-item {
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }


`;
