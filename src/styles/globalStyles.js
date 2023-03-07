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

  .modal-footer{
    display: flex;
    align-items: flex-end;
    justify-content: space-around;

    max-height: 250px;
    height: 100%; 

    .cancel-button{
      width: 150px;
      display: inline-block;
      background: #46A0CD;
      font-size: 1rem;
      font-weight: bold;
      color: #fff;

      border: 2px solid #46A0CD; 

      height: 30px;
      border-radius: 5px;
      text-transform: uppercase;
      transition: .3s ease;

      :hover {
        filter: brightness(.8);
        border: 2px solid transparent; 
      }
    }

    .delete-button{
      width: 150px;
      display: inline-block;
      background: #ff000f;
      font-size: 1rem;
      font-weight: bold;
      color: #fff;

      height: 30px;
      border-radius: 5px;
      text-transform: uppercase;
      transition: .3s ease;

      :hover {
        filter: brightness(.8);
      }
    }
  }
`