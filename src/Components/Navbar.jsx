import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from "./utils/global.context"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {state, updateTheme} = useContext(ContextGlobal)

  const handleClick=()=>{
    const newTheme = state.theme === "light" ? "dark" : "light";
    updateTheme(newTheme); 
  }
  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to='/home'> Home</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/favs'>Favs</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

      <button onClick={handleClick}>{
        !state.theme ? "🌚" : "🌞"
      }</button>
    </nav>
  )
}

export default Navbar