import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Link from 'next/link';

import api from '../services/api';

import { IoIosReturnLeft } from 'react-icons/io';

import {
  Container,
  Content,
  Wrapper,
  Form,
  Box,
  SubmitButton
} from "../styles/components/register";

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

export default function Register() {
  const router = useRouter();
  const sortNumber = String(Math.floor(Math.random() * 10000));

  const { register, handleSubmit, formState: { errors }, } = useForm({
    resolver: yupResolver(schema)
  });

  const submitForm = async data => {
    const formData =
    {
      "checklists": [
        {
          "_id": sortNumber,
          "type": data.type,
          "amount_of_milk_produced": data.milkProduced,
          "number_of_cows_head": data.numberOfCowsHead,
          "had_supervision": data.supervision === 'Yes' ? true : false,
          "farmer": {
            "name": data.farmerName,
            "city": data.farmerCity
          },
          "from": {
            "name": data.name
          },
          "to": {
            "name": data.to
          },
          "location": {
            "latitude": data.latitude,
            "longitude": data.longitude
          },
          "created_at": new Date().toISOString(),
          "updated_at": new Date().toISOString(),
        }
      ]
    }

    try {
      const response = await api.post('/', formData);

      if (response) {
        alert('Your register has been success!')
        router.push('/');
      }

    } catch (err) {
      alert('Something was wrong!', err);
      throw new Error(err);
    }
  };

  return (
    <Container>
      <Content>
        <h1>Register</h1>
        <Wrapper>
          <Form onSubmit={handleSubmit(submitForm)}>
            <Link href="/">
              <IoIosReturnLeft />
            </Link>
            <Box>
              <div>
                <label>Name</label>
                <input {...register("name")} />
                {errors.name && <p>{errors.name.message}</p>}
              </div>
              <div>
                <label>type</label>
                <input {...register("type")} />
                {errors.type && <p>{errors.type.message}</p>}
              </div>
              <div>
                <label>{`Farmer's name`}</label>
                <input {...register("farmerName")} />
                {errors.farmerName && <p>{errors.farmerName.message}</p>}
              </div>
              <div>
                <label>{`Farmer's city`}</label>
                <input {...register("farmerCity")} />
                {errors.farmerCity && <p>{errors.farmerCity.message}</p>}
              </div>
              <div>
                <label>Number of cows head</label>
                <input {...register("numberOfCowsHead")} />
                {errors.numberOfCowsHead && <p>{errors.numberOfCowsHead.message}</p>}
              </div>
              <div>
                <label>Amount of milk produced</label>
                <input {...register("milkProduced")} />
                {errors.milkProduced && <p>{errors.milkProduced.message}</p>}
              </div>
              <div>
                <section className="radio" >
                  <label>Supervision</label>
                  <div className='boxRadio'>
                    <div>
                      <label>Yes</label>
                      <input
                        type="radio"
                        value="Yes"
                        name="option" {...register("supervision")} />
                    </div>
                    <div>
                      <label>No</label>
                      <input
                        type="radio"
                        value="No"
                        name="option" {...register("supervision")} />
                    </div>
                  </div>
                </section>
                {errors.supervision && <p>{errors.supervision.message}</p>}
              </div>
              <div>
                <label>To</label>
                <input {...register("to")} />
                {errors.to && <p>{errors.to.message}</p>}
              </div>
              <div>
                <label>Latitude</label>
                <input {...register("latitude")} />
                {errors.latitude && <p>{errors.latitude.message}</p>}
              </div>
              <div>
                <label>Longitude</label>
                <input {...register("longitude")} />
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