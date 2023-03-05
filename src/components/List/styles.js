import styled from "styled-components";

export const Container = styled.main`
  /* min-height: 100vh; */
  /* max-width: 100%; */
  background: #fff;

  position: relative;
  top: 7rem;
  margin: auto;
  
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0.1rem 0.1rem 4.3rem #5F5C5C;


  width: 60% ;
  min-height: 150px;
`;

export const RegisterButton = styled.button``;

export const Card = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin:  auto;
  padding: 20px 25px;
  margin-top: 100px;

  height: 100px;

  width: 60%;
  background-color: #fff;

  border-radius: 10px;
  box-shadow: 0.2rem 0.2rem 2rem #A1A1A1;

`;

export const LeftInfo = styled.div`
  h3{
    font-size: 1rem;
    color: #3D3D4B;
    letter-spacing: .5px;
    line-height: 1rem;

    font-weight: 700;

    padding: 4px 3px;

  }
`;

export const RightInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  height: 100%;
`;

export const CTAIcons = styled.aside`
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  svg:hover {
    transition: .3s ease;

    transform: scale(1.15);
    fill: #46A0CD;
    cursor: pointer;

  }

`;