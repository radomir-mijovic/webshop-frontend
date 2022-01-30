import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 62.5%;
    width: 100%;
    height: 100%;
  }

  body {
    width: 100%;
    height: 100%;
    -webkit-tap-highlight-color: transparent;
  }

  ul {
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }
`