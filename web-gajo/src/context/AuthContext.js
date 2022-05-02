import React, { createContext, useEffect, useState } from "react";
import { auth } from "../BaseApp";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  //quizas es medio confuso el ambito de auth ya que se mantiene un estado al cambiar el auth y uso el provider con el useEffects para automatizarlo
  const [loginState, setLoginState] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(setLoginState);
  }, []);
  return (
    <AuthContext.Provider value={loginState}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
