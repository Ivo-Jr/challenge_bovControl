import { useRouter } from "next/router"

import Title from "../../components/Preview";

export default function Edition() {
  const { query } = useRouter();

  return (
    <Title>
      <h1>Edition: {JSON.stringify(query)}</h1>
    </Title>
  )
}