import List from "../components/List";
import api from "../services/api";

export default function Home({ data }) {
  return (
    <List data={data} />
  )
}

export const getStaticProps = async () => {
  const response = await api.get('/');

  return {
    props: {
      data: response.data
    }
  }
}
