import styled from "styled-components";

export const Container = styled.main`
    display: flex;
  margin-bottom: 50px;
`;

export const Content = styled.div`
  margin: 4rem auto 0;
  max-width: 60%;

  display: flex;
  flex-direction: column;

  h1{
    margin-left: .5rem;
    color: #fff;
  }
`;

export const Wrapper = styled.div`
  margin: 1rem auto 0px;

  height: auto;

  background-color: #fff;

  display: flex;

  flex-direction: row;
  flex-wrap: wrap;

  padding: 30px;
  border-radius: 10px;
  box-shadow: 0.1rem 0.1rem 4.3rem #5F5C5C;
 
  /* max-width: 60%; */
  min-height: 300px;
`;

export const Form = styled.form`
  display: flex;
  align-items: flex-end;
  flex-direction: column;

  a {
    color: inherit;
    margin: 0rem 1.25rem;

    svg {

      display: flex;
      align-items: center;

      background-color: transparent;
      transition: all .3 ease;

      fill: #46A0CD;
      width: 25px;
      height: 25px;
    }
  }


  svg:hover {
    filter: brightness(.8);
  }
`;

export const Box = styled.div`
  display: flex;

  flex-direction: row;
  flex-wrap: wrap;  

  div{
    display: flex;

    flex-direction: column;
    flex-wrap: wrap;
    flex-basis: 40%;
    flex-grow: 1;

    margin: 1rem 1.25rem;
  }   

  input {
    display: block;
    width: 100%;
    border-radius: 4px;
    border: 1px solid white;
    padding: 10px 15px;
    margin-bottom: 10px;
    font-size: 14px;
    background-color: #E6E8EB;

    color: #3D3D4B;
    font-weight: 500;
  }

  label {
    display: block;

    line-height: 1.5;
    text-align: left;

    margin-bottom: 2px;

    color: #46A0CD;
    font-size: 14px;
    font-weight: bold;
  } 

  .radio {
    display: flex;
    flex-direction: column;
  }

  .boxRadio {
    display: flex;
    flex-direction: row;
    margin: 0px;
    padding: 0px;

    div{
      margin: 0px;
      padding: 0px;

      display: flex;
      align-items: center;
      /* display: flex; */
      /* justify-content: center; */
      /* align-items: center; */
      flex-direction: row;


      label {
        /* font-size: .75rem; */
        color: #3D3D4B
      }
  
      input {
        margin: 0rem .5rem;
        height: 15px;
        width: 20px;
        /* display: inline; */
      }
    }

  }

  p{
    color: #ff0e0e;
  }
`;

export const SubmitButton = styled.input`
  width: 150px;
  display: inline-block;
  background: #46A0CD;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  margin: .25rem 1.25rem 0rem;

  border: 2px solid #46A0CD; 

  height: 30px;
  border-radius: 5px;
  text-transform: uppercase;
  transition: .3s ease;

  cursor: pointer;

  :hover {
    filter: brightness(.8);
    border: 2px solid transparent; 
  }
`;
