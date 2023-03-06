import api from "../services/api";
import Image from "next/image";

import { format } from "date-fns";
import { FaRegTrashAlt, FaPen, FaEye } from 'react-icons/fa';

import {
  Container,
  RegisterButton,
  Wrapper,
  Card,
  LeftInfo,
  RightInfo,
  CTAIcons
} from "../styles/components/home.js";

import BovImage from '../assets/bovcontrol.svg';
import Link from "next/link";

export default function Home({ data }) {
  return (
    <Container>
      <RegisterButton>Register</RegisterButton>
      <Wrapper>
        <Image src={BovImage} alt="logo_bovcontrol" />
        {data.map(item => {
          return (
            <Card key={item.id}>
              <LeftInfo>
                <h3>{item.fromName}</h3>
                <h3>{item.farmerName}</h3>
                <h3>{item.farmerCity}</h3>
              </LeftInfo>

              <RightInfo>
                <CTAIcons>
                  <FaRegTrashAlt />
                  <FaPen />
                  <Link href={`/preview/${item.id}`} key={`${item.id}`}>
                    <FaEye />
                  </Link>
                </CTAIcons>

                <span>{item.created}</span>
              </RightInfo>
            </Card>
          )
        })}
      </Wrapper>
    </Container>
  )
}

export const getStaticProps = async () => {
  const response = await api.get('/');

  const data = response.data.map(item => {
    return {
      id: item._id,
      fromName: item.from.name,
      farmerName: item.farmer.name,
      farmerCity: item.farmer.city,
      created: format(new Date(item.created_at), 'MM/dd/yyyy')
    }
  })

  return {
    props: {
      data
    }
  }
}
