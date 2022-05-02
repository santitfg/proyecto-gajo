import React, { createContext, useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../BaseApp";

const MarkersContext = createContext();
const MarkersProviders = ({ children }) => {
  //considerar tambien traer comentarios junto a las geoLock
  //quizas es medio confuso el ambito de auth ya que se mantiene un estado al cambiar el auth y uso el provider con el useEffects para automatizarlo
  const [markerList, setMarkers] = useState();
  const ref = doc(db, "listaLocaciones", "listaGeoPoints");
  useEffect(() => {
    const getMarkers = async () => {
      const mark = await getDoc(ref);
      setMarkers(mark.data().listaGeoPoints);
    };
    getMarkers();
    return () => {};
  }, []);
  return (
    <MarkersContext.Provider value={markerList}>
      {children}
    </MarkersContext.Provider>
  );
};

export { MarkersContext, MarkersProviders };
