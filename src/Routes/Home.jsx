import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [odontologos, setOdontolgos]= useState([]);

  async function getOdontologos(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    setOdontolgos(data);
  }

  useEffect(()=>{
    getOdontologos();
  },[]);
 

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {odontologos.map((odontologo)=>(
            <Card key = {odontologo.id} name={odontologo.name} username={odontologo.username} id={odontologo.id}/>
        ))}
      </div>
    </main>
  )
}

export default Home