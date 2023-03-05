import {
  Container,
  RegisterButton,
  Wrapper,
  Card,
  LeftInfo,
  RightInfo,
  CTAIcons
} from "./styles";

import { FaRegTrashAlt, FaPen, FaEye } from 'react-icons/fa';

import Image from "next/image";

import BovImage from '../../assets/bovcontrol.svg';

export default function List({ data }) {
  console.log(data, '<<')
  return (
    // <pre>{JSON.stringify(data)}</pre>
    <Container>
      <RegisterButton>Register</RegisterButton>

      <Wrapper>
        <Image src={BovImage} alt="logo_bovcontrol" />

        {data.map(item => {
          return (
            <Card key={item._id}>
              <LeftInfo>
                <h3>{item.from.name}</h3>
                <h3>{item.farmer.name}</h3>
                <h3>{item.farmer.city}</h3>
              </LeftInfo>

              <RightInfo>
                <CTAIcons>
                  <FaRegTrashAlt />
                  <FaPen />
                  <FaEye />
                </CTAIcons>

                <span>11/02/2023</span>
              </RightInfo>
            </Card>
          )
        })}

      </Wrapper>

    </Container>
  )
}