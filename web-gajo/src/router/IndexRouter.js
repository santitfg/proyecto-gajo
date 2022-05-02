import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import CargarGajo from "../Views/CargarGajo";
import { AuthContext } from "../context/AuthContext";
import SingOut from "../components/SingOut";
import Login from "../components/Login";
import Loguear from "../Views/Loguear";
import MainMapa from "../Views/MainMapa";
import Register from "../Views/Register";
import NotFound from "../Views/NotFound";
import "./IndexRouter.css";

const IndexRouter = () => {
  const loginState = useContext(AuthContext);
  // console.log(loginState);
  // const ruta ={loginState && <Route path="/form" element={<CargarGajo />}></Route>};

  return (
    <Router>
      <nav className="shadow">
        <ul>
          <li>
            <Link to="/">index</Link>
          </li>
          {/* <li>
            <Link to="/map">Main</Link>
          </li> */}
          <li>
            <Link to="/about">about</Link>
          </li>
          {loginState && (
            <li>
              <Link to="/form">Cargar Gajo</Link>
            </li>
          )}
          {!loginState && (
            <>
              <li>
                <Link to="/login">login</Link>
              </li>
              <li>
                <Link to="/register">register</Link>
              </li>
            </>
          )}
          {loginState && (
            <li>
              <SingOut />
            </li>
          )}
        </ul>
      </nav>
      <Routes>
        {/* COLOCAR LOS IF SI ESTA LOGIN  */}
        {/* Mail del login? */}
        <Route path="*" element={<NotFound />} />

        <Route path="/" element={<MainMapa />}></Route>

        <Route
          path="/login"
          element={!loginState ? <Loguear /> : <Navigate to="/" replace />}
        ></Route>
        <Route
          path="/form"
          element={loginState ? <CargarGajo /> : <Navigate to="/" replace />}
        ></Route>

        {/* {loginState && <Route path="/form" element={<CargarGajo />}></Route>} */}
        {/* !loginState ? <CargarGajo /> :<Navigate to="/" replace /> */}
        <Route
          path="/register"
          element={!loginState ? <Register /> : <Navigate to="/" replace />}
        ></Route>

        {/* <Route path="/form" element={<CargarGajo />}></Route> */}
      </Routes>
    </Router>
  );
};

export default IndexRouter;
