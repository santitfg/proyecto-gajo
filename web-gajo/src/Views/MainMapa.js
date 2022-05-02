import InputMap from "../components/factory/InputMap";
import { db } from "../BaseApp";
// import { QuerySnapshot } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect, useContext } from "react";
import { MarkersContext } from "../context/MarkersContex";
import "./MainMapa.css";
const MainMapa = () => {
  const markerList = useContext(MarkersContext);
  const markers = markerList?.map((doc) => {
    const lat = doc.latitude;
    const lng = doc.longitude;
    return { position: [lat, lng], msg: [lat, lng] };
  });
  //aca aplicar use memo https://es.reactjs.org/docs/hooks-reference.html#usememo
  //y uns cookies que duren 1 hr?
  //para no hace la llamada cada vez que se usa la web
  // y borrarlas en caso de que el user carge u ngajo

  return (
    <>
      <div className="mapa">
        <InputMap options={markers} width={"100%"} height={"93vh"} />{" "}
        <div className="footer"></div>
      </div>
    </>
  );
};

export default MainMapa;
