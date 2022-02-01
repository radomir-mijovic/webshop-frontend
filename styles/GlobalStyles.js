import {createGlobalStyle} from "styled-components";

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
    position: relative;
    font-family: 'Playfair Display', serif;
  }
  
  input {
    font-family: 'Playfair Display', serif;
  }

  ul {
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }
`