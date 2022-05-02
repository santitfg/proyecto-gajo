import React, { useState, useContext } from "react";

import FormFactory from "../components/factory/FormFactory";
import { auth } from "../BaseApp";
import { AuthContext } from "../context/AuthContext";

import { createUserWithEmailAndPassword } from "firebase/auth";

const Auth = () => {
  const [formState, setForm] = useState();
  const handleChange = (e) => {
    setForm({ ...formState, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    // console.log(formState);
    createUserWithEmailAndPassword(auth, formState.email, formState.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        // console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });

    e.preventDefault();
  };

  const elementos = [
    {
      type: "InputText",
      //   value: "hl",
      label: "Correo Electronico",
      name: "email",
      msj: "",
      onChange: handleChange,
    },
    {
      type: "InputText",
      //   value: "hl",
      label: "Contraseña",
      name: "password",
      msj: "",
      onChange: handleChange,
    },
  ];

  // const loginState = useContext(AuthContext);
  //  console.log(!!loginState);
  //tecniamente deberia acceder a un metodo para q me diga si es autenticado

  return (
    <>
      {/* <h2>{(loginState != null).toString()}</h2> */}
      <form onSubmit={handleSubmit}>
        <h3>AUTH</h3>
        <FormFactory elementos={elementos} />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Auth;
