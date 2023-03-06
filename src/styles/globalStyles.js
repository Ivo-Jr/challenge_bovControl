import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    -webkit-font-smoothing: antialiased;
    background: linear-gradient( #0013BD 30%, #E6E8EB 30%);
    min-height: 100vh;
    max-width: 100%;
  }
  
  *, button, input {
    outline: 0;
    border: 0;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }
`