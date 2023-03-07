import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Link from 'next/link';

import api from '../../services/api.js';

import { IoIosReturnLeft } from 'react-icons/io';

import {
  Container,
  Content,
  Wrapper,
  Form,
  Box,
  SubmitButton
} from "../../styles/components/edition.js";

const schema = yup.object({
  name: yup.string()
    .min(3, 'must be at least 3 characters long')
    .required(),
  type: yup.string().required(),
  farmerName: yup.string()
    .min(3, 'must be at least 3 characters long')
    .required(),
  farmerCity: yup.string()
    .min(3, 'must be at least 3 characters long')
    .required(),
  numberOfCowsHead: yup.number().required('Number of cows head is a required field'),
  milkProduced: yup.number().required('Amount of milk is a required field'),
  supervision: yup.string(),
  to: yup.string().required(),
  latitude: yup.number().required(),
  longitude: yup.number().required(),
});

export default function Edition({ data }) {
  const router = useRouter();
  const { isFallback } = useRouter();

  const { register, handleSubmit, formState: { errors }, } = useForm({
    resolver: yupResolver(schema)
  });

  if (isFallback) {
    return <h1>Loading...</h1>
  }

  const submitForm = async item => {
    const formData =
    {
      "type": item.type,
      "amount_of_milk_produced": item.milkProduced,
      "number_of_cows_head": item.numberOfCowsHead,
      "had_supervision": item.supervision === 'Yes' ? true : false,
      "farmer": {
        "name": item.farmerName,
        "city": item.farmerCity
      },
      "from": {
        "name": item.name
      },
      "to": {
        "name": item.to
      },
      "location": {
        "latitude": item.latitude,
        "longitude": item.longitude
      },
    }

    try {
      const response = await api.put(`/${data.id}`, formData);

      if (response) {
        alert('Your register has been success!')
        router.push('/');
      }

    } catch (err) {
      alert('Something was wrong!', err);
      throw new Error(err);
    }

  }

  return (
    <Container>
      <Content>
        <h1>Edition:</h1>
        <Wrapper>
          <Form onSubmit={handleSubmit(submitForm)}>
            <Link href="/">
              <IoIosReturnLeft />
            </Link>

            <Box>
              <div>
                <label>Name</label>
                <input {...register("name")} defaultValue={data.fromName} />
                {errors.name && <p>{errors.name.message}</p>}
              </div>
              <div>
                <label>type</label>
                <input {...register("type")} defaultValue={data.type} />
                {errors.type && <p>{errors.type.message}</p>}
              </div>
              <div>
                <label>{`Farmer's name`}</label>
                <input {...register("farmerName")} defaultValue={data.farmerName} />
                {errors.farmerName && <p>{errors.farmerName.message}</p>}
              </div>
              <div>
                <label>{`Farmer's city`}</label>
                <input {...register("farmerCity")} defaultValue={data.farmerCity} />
                {errors.farmerCity && <p>{errors.farmerCity.message}</p>}
              </div>
              <div>
                <label>Number of cows head</label>
                <input {...register("numberOfCowsHead")} defaultValue={data.numberOfCowsHead} />
                {errors.numberOfCowsHead && <p>{errors.numberOfCowsHead.message}</p>}
              </div>
              <div>
                <label>Amount of milk produced</label>
                <input {...register("milkProduced")} defaultValue={data.milkProduced} />
                {errors.milkProduced && <p>{errors.milkProduced.message}</p>}
              </div>
              <div>
                <section className="radio" >
                  <label>Supervision</label>
                  <div className='boxRadio' defaultValue={data.supervision}>
                    <div>
                      <label>Yes</label>
                      <input
                        type="radio"
                        value="Yes"
                        name="option"
                        {...register("supervision")}
                      />
                    </div>
                    <div>
                      <label>No</label>
                      <input
                        type="radio"
                        value="No"
                        name="option"
                        {...register("supervision")}
                      />
                    </div>
                  </div>
                </section>
                {errors.supervision && <p>{errors.supervision.message}</p>}
              </div>
              <div>
                <label>To</label>
                <input {...register("to")} defaultValue={data.to} />
                {errors.to && <p>{errors.to.message}</p>}
              </div>
              <div>
                <label>Latitude</label>
                <input {...register("latitude")} defaultValue={data.latitude} />
                {errors.latitude && <p>{errors.latitude.message}</p>}
              </div>
              <div>
                <label>Longitude</label>
                <input {...register("longitude")} defaultValue={data.longitude} />
                {errors.longitude && <p>{errors.longitude.message}</p>}
              </div>
            </Box>

            <SubmitButton type="submit" value="Submit" />
          </Form>
        </Wrapper>
      </Content>
    </Container>
  )
}

export const getStaticPaths = async () => {

  return {
    paths: [
      { params: { id: '7031' } }
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
    created: response.data.created_at
  }

  return {
    props: {
      data
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}