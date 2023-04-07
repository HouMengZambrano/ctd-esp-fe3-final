import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";


const Card = ({ name, username, id }) => {

  const {storeFavs} = useContext(ContextGlobal);

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const newFav = {name, username, id};
    storeFavs(newFav);
    alert(`Dentist "${name}" added succesfully`)
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

        <Link to = {`/detail/${id}`}>
        <img src="./images/doctor.jpg" alt="icono-odontologo"></img>
        <h4>{name}</h4>
        <p>{username}</p>
        <p>ID: {id}</p>
        </Link>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">⭐</button>
    </div>
  );
};

export default Card;
