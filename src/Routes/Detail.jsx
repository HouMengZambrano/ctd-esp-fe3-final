import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [odontologo, setOdontologo] = useState([])
  const param = useParams()
  const navigate = useNavigate()

  const handleClick =()=>{
    navigate(-1)
  }

  const getOdontologo = async ()=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${param.id}`)
    const data = await res.json()
    setOdontologo(data)
  }

  useEffect(()=>{
    getOdontologo()
  })

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      <div key={odontologo.id}>
      <table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Website</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{odontologo.name}</td>
      <td>{odontologo.email}</td>
      <td>{odontologo.phone}</td>
      <td>{odontologo.website}</td>
    </tr>
    </tbody>
    </table>
      </div>
    <button onClick={handleClick}>Go back </button>
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail