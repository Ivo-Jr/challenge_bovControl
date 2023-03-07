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

export const ButtonControl = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  background-color: transparent;
  transition: all .3 ease;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 140px;
    width: 100%;
  }

  a {
    color: inherit;
  }


  svg {
    fill: #46A0CD;

    width: 22px;
    height: 22px;

    transition: .3s ease;

  }
  
  svg:hover {
    filter: brightness(.7);
  }
`;

export const Wrapper = styled.section`
  margin: 1rem auto 0px;

  height: auto;

  background-color: #fff;

  display: flex;

  flex-direction: row;
  flex-wrap: wrap;

  padding: 15px 30px 20px;
  border-radius: 10px;
  box-shadow: 0.1rem 0.1rem 4.3rem #5F5C5C;
 
  min-height: 300px;
`;

export const Box = styled.div``;

export const Infomations = styled.div`
  display: flex;

  flex-direction: row;
  flex-wrap: wrap;

  flex-basis: 60%;
  flex-grow: 1;
`;

export const Row = styled.div`
  flex-basis: 40%;
  flex-grow: 1;

  h4 {
    color: #46A0CD;
  }

  span {
    color: #3D3D4B;
  }

  margin: 5px 5px;
`;

export const Column = styled.div`
  width: 150px;


  display: flex;

  flex-direction: column;
  margin: 5px;
`;

export const Map = styled.div`
  height: 270px;
  width: 100%;
  background: gray;

  margin-top: 50px;

  .map-marker{
    margin-top: -30px;

    font-weight: bold;
    color: #46A0CD;
    background: #fff;
  }
`;
