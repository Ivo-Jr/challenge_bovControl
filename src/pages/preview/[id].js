import { useState } from "react";
import Link from "next/link.js";
import { useRouter } from "next/router.js";
import { format } from "date-fns";
import { GoogleMap, MarkerF } from '@react-google-maps/api';

import api from "../../services/api.js";
import ConfirmationModal from "../../components/modal.js";

import { GoogleMapsLoader } from "../../components/googleMapsLoader.js";
import { IoIosReturnLeft, IoIosAdd } from 'react-icons/io';
import { FaRegTrashAlt, FaPen } from 'react-icons/fa';
import { MdAdd } from 'react-icons/md'

import {
  Container,
  Content,
  Wrapper,
  Box,
  Infomations,
  Row,
  Map,
  ButtonControl
} from "../../styles/components/preview.js";


export default function Preview({ data }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const router = useRouter();
  const { isFallback } = useRouter();

  if (isFallback) {
    return <h1>Loading...</h1>
  }

  const position = {
    lat: data.latitude,
    lng: data.longitude
  };

  const handleDeleteModal = () => {
    setModalIsOpen(true);
  };

  const handleModalCloseModal = () => {
    setModalIsOpen(false);
  };

  async function handleConfirmModal() {

    try {
      await api.delete(`/${data.id}`);
      setModalIsOpen(false);

      alert('The register has been deleted!')
      router.push('/');

    } catch (err) {
      alert("The register cannot be deleted!")
      throw new Error(err);
    }
  }

  return (
    <Container>
      <Content>
        <h1>View</h1>
        <Wrapper>
          <ButtonControl>
            <Link href="/">
              <IoIosReturnLeft />
            </Link>

            <div>
              <Link href={`/register`}>
                <MdAdd />
              </Link>

              <Link href={`/edition/${data.id}`}>
                <FaPen />
              </Link>

              <FaRegTrashAlt onClick={() => handleDeleteModal()} />
            </div>
          </ButtonControl>
          <Box key={data.id}>
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
              <GoogleMapsLoader>
                <GoogleMap
                  mapContainerStyle={{ width: '100%', height: '100%' }}
                  center={position}
                  zoom={15}
                >
                  <MarkerF position={position} options={{
                    label: {
                      text: data.farmerName,
                      className: "map-marker"
                    }
                  }} />
                </GoogleMap>
              </GoogleMapsLoader>
            </Map>
          </Box>
        </Wrapper>
      </Content>

      <ConfirmationModal
        isOpen={modalIsOpen}
        onRequestClose={handleModalCloseModal}
        onConfirm={handleConfirmModal}
        title="DELETE!!"
        message="Are you sure you want to delete this item?"
      />
    </Container>
  )
}

export const getStaticPaths = async () => {

  return {
    paths: [
      { params: {} }
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
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}