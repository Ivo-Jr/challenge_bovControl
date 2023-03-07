import { useState } from "react";
import { useRouter } from "next/router.js";

import api from "../services/api";
import Image from "next/image";

import { format } from "date-fns";
import { FaRegTrashAlt, FaPen, FaEye } from 'react-icons/fa';

import {
  Container,
  Content,
  RegisterButton,
  Wrapper,
  Card,
  LeftInfo,
  RightInfo,
  CTAIcons
} from "../styles/components/home.js";

import BovImage from '../assets/bovcontrol.svg';
import Link from "next/link";
import ConfirmationModal from "../components/modal";

export default function Home({ data }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [deleteItemById, setDeleteItemById] = useState('');
  const router = useRouter();

  const handleDeleteModal = (data) => {
    setDeleteItemById(data);

    setModalIsOpen(true);
  };

  const handleModalCloseModal = () => {
    setModalIsOpen(false);
  };

  async function handleConfirmModal() {

    try {
      await api.delete(`/${deleteItemById}`);
      setModalIsOpen(false);
      setDeleteItemById('');

      alert('The register has been deleted!');
      router.push('/');

    } catch (err) {
      alert("The register cannot be deleted!")
      throw new Error(err);
    }
  }

  return (
    <Container>
      <Link href={'/register'}>
        <RegisterButton>Register</RegisterButton>
      </Link>
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
                  <FaRegTrashAlt onClick={() => handleDeleteModal(item.id)} />
                  <Link href={`/edition/${item.id}`}>
                    <FaPen />
                  </Link>
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
