import { useLoaderData } from "react-router-dom";


export default function Team() {
  const data = useLoaderData();

  return (
    <div>{data.city}</div>
  )
}