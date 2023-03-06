import styled from "styled-components";

export const Container = styled.main``;

export const Content = styled.div``;

export const ReturnButton = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;

  display: flex;
  align-items: center;

  background-color: transparent;
  transition: all .3 ease;

  a {
    color: inherit;
  }

  svg {
    fill: #46A0CD;
    width: 25px;
    height: 25px;
  }

  svg:hover {
    filter: brightness(.8);
  }
`;

export const Wrapper = styled.section`
  position: relative;
  top: 7rem;
  margin: auto;

  background-color: #fff;

  display: flex;

  flex-direction: row;
  flex-wrap: wrap;

  padding: 30px;
  border-radius: 10px;
  box-shadow: 0.1rem 0.1rem 4.3rem #5F5C5C;
 
  max-width: 60%;
  min-height: 300px;
`;

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
  /* display: inline-block; */
  /* width: 200px; */
  /* height: 100px; */
  /* flex-basis: 100%; */
  width: 150px;


  display: flex;

  flex-direction: column;
  margin: 5px;
`;

export const Map = styled.div`
  height: 100px;
  width: 100%;
  background: green;

  margin-top: 50px;
`;
