import api from "../../services/api.js";
import Link from "next/link.js";
import { format } from "date-fns";

import {
  Container,
  Content,
  Wrapper,
  Infomations,
  Row,
  Column,
  Map,
  ReturnButton
} from "../../styles/components/preview.js";

import { IoIosReturnLeft } from 'react-icons/io'

export default function Preview({ data }) {
  console.log(data, '$$$$$')

  return (
    <Container>
      <Wrapper>
        <ReturnButton>
          <Link href="/">
            <IoIosReturnLeft />
          </Link>
        </ReturnButton>
        <Content key={data.id}>
          <Infomations >
            <Row>
              <h4>Name:</h4>
              <span>{data.fromName}</span>
            </Row>
            <Row>
              <h4>Type:</h4>
              <span>{data.type}</span>
            </Row>

            <Row>
              <h4>{"Farmer's name:"}</h4>
              <span>{data.farmerName}</span>
            </Row>

            <Row>
              <h4>{"Farmer's city:"}</h4>
              <span>{data.farmerCity}</span>
            </Row>

            <Row>
              <h4>Number of Cows head:</h4>
              <span>{data.numberOfCowsHead}</span>
            </Row>
            <Row>
              <h4>Milk produced:</h4>
              <span>{data.milkProduced}</span>
            </Row>
            <Row>
              <h4>Supervision:</h4>
              <span>{data.supervision}</span>
            </Row>

            <Row>
              <h4>To:</h4>
              <span>{data.to}</span>
            </Row>

            <Row>
              <h4>Latitude:</h4>
              <span>{data.latitude}</span>
            </Row>

            <Row>
              <h4>Longitude:</h4>
              <span>{data.longitude}</span>
            </Row>
          </Infomations>
          <Map>
            {/* <h2>MAP</h2> */}
          </Map>
        </Content>
      </Wrapper>
    </Container>
  )
}

export const getStaticPaths = async () => {

  return {
    paths: [
      { params: { id: '4' } }
    ],
    fallback: true,
  }
}

export const getStaticProps = async ({ params }) => {
  const dataId = params.id;

  const response = await api.get(`/${dataId}`);

  const data = {
    id: response.data.id,
    type: response.data.type,
    milkProduced: response.data.amount_of_milk_produced,
    farmerName: response.data.farmer.name,
    farmerCity: response.data.farmer.city,
    fromName: response.data.from.name,
    to: response.data.to.name,
    numberOfCowsHead: response.data.number_of_cows_head,
    supervision: response.data.had_supervision === true ? 'Yes' : 'No',
    latitude: response.data.location.latitude,
    longitude: response.data.location.longitude,
    created: format(new Date(response.data.created_at), 'MM/dd/yyyy')
  }

  return {
    props: {
      data
    }
  }
}