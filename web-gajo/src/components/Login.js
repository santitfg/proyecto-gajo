import React, { useState } from "react";

import FormFactory from "../components/factory/FormFactory";
import { auth } from "../BaseApp";

import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [formState, setForm] = useState();
  const handleChange = (e) => {
    setForm({ ...formState, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    signInWithEmailAndPassword(auth, formState.email, formState.password)
      .then((userCredential) => {
        const user = userCredential.user;
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
      label: "Correo Electronico",
      name: "email",
      msj: "",
      onChange: handleChange,
    },
    {
      type: "InputText",
      label: "Contraseña",
      name: "password",
      msj: "",
      onChange: handleChange,
    },
  ];

  return (
    <form onSubmit={handleSubmit}>
      <h3>LOGIN</h3>
      <FormFactory elementos={elementos} />
      <input type="submit" value="LOGIN" />
    </form>
  );
};

export default Login;
