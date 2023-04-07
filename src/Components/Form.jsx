import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [formValues, setFormValues] = useState({name: "", email:""});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleNameInputChange = (e) =>{
    const {name, value} =  e.target;
    setFormValues({...formValues, [name]:value});
  }

  const formValidation = () =>{
   const {name, email} = formValues;
   let isValid =  true;

   if(name.trim().length < 6){
    isValid = false
   }
   if(!/^\S+@\S+\.\S+$/.test(email)){
    isValid = false
   }

   if(!isValid){
    setError(`Por favor verifique su informacion nuevamente`);
    setSuccess("")
   }else{
    setError("")
   }
    return isValid;
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(formValidation()){
      setSuccess(`Gracias ${formValues.name}, te contactaremos lo antes posible vía mail.`);
      setFormValues({ name: "", email: "" });
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formValues.name} onChange={handleNameInputChange} placeholder="Nombre completo"/>
        <input type="email" name="email" value={formValues.email} onChange={handleNameInputChange} placeholder="Email"/>
        <button type="submit">Enviar</button>
      </form>
      {error && <h2>{error}</h2>}
      {success && <h2>{success}</h2>}
    </div>
  );
};

export default Form;
