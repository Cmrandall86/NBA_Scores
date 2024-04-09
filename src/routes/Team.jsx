import { useLoaderData } from "react-router-dom";


export default function Team() {
  const data = useLoaderData();

  const {city, conference, division, full_name, name} = data.data
  return (
    <>
    <div>Full Name: {full_name}</div>
    <div>Name: {name}</div>
    <div>Conference: {conference}</div>
    <div>Division: {division}</div>
    <div>City: {city}</div>
    </>
  )
}