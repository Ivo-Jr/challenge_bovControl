import {
  Container,
  RegisterButton,
  Card,
  LeftInfo,
  RightInfo,
  CTAIcons
} from "./styles";

import { FaRegTrashAlt, FaPen, FaEye } from 'react-icons/fa'

// import BoviImage from '../../assets/bovi.jpg';
// import Image from "next/image";

export default function List({ data }) {
  return (
    // <pre>{JSON.stringify(data)}</pre>

    <Container>
      <RegisterButton>Cadastro</RegisterButton>
      <Card>
        <LeftInfo>
          <h3>Eduardo</h3>
          <h3>Fazenda vaca gorda</h3>
          <h3>São Cristovão da Serra</h3>
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
    </Container>
  )
}