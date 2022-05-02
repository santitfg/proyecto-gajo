import { ref, uploadBytes } from "firebase/storage";
import { app, auth, storage, db } from "../BaseApp";
import {
  collection,
  doc,
  setDoc,
  serverTimestamp,
  GeoPoint,
} from "firebase/firestore";

import React, { useState, useContext } from "react";
import FormFactory from "../components/factory/FormFactory";
import { MarkersContext } from "../context/MarkersContex";
import { AuthContext } from "../context/AuthContext";

const CargarGajo = () => {
  //////////////////////////////
  //context para cargar los puntos a marcar en el mapa
  //////////////////////////////
  const markerList = useContext(MarkersContext);
  const markers = markerList?.map((doc) => {
    const lat = doc.latitude;
    const lng = doc.longitude;
    return { position: [lat, lng], msg: [lat, lng] };
  });

  //////////////////////////////
  //context y estados para la carga del formulario
  //////////////////////////////

  const loginState = useContext(AuthContext);
  const [formState, setForm] = useState();
  const [position, setPosition] = useState(null);
  const [selectedImage, setSelectedImage] = useState();

  // This function will be triggered when the file field change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const removeSelectedImage = () => {
    setSelectedImage();
  };
  const handleChange = (e) => {
    //esto tiene un flanco debil, que es que al no cambiar el imput no lo genera
    setForm({ ...formState, [e.target.name]: e.target.value });
  };
  const handleClickMap = (pos) => {
    setPosition(pos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!!loginState) {
      //quizas esta condicion es redundante
      const collectionDb = collection(db, "gajos");
      const refDB = doc(collectionDb, loginState.uid);

      //ACA CAMBIAR EL NOMBRE DE LA IMG
      const storageRef = ref(storage, "gajos/" + selectedImage.name);

      uploadBytes(storageRef, selectedImage).then((snapshot) => {
        console.log("La carga fue exitosa!");
        console.log(snapshot);
      });
      //SETEAR LA URL DESDE LA CARGA AL STORAGE
      //metadata.fullPath? o name solo? Primero config el CDN
      setDoc(refDB, {
        //colocar el uid y el mail ?
        //vale la pena o puedo obtenerlos ya del logion y el nombre del doc
        uid: loginState.uid,
        email: loginState.email,
        timeStamp: serverTimestamp(),
        nombre: formState.nombre,
        geoLoc: new GeoPoint(position.lat, position.lng),
        url: "gajos/" + selectedImage.name,
      });
    }
  };

  const elementos = [
    {
      type: "InputFile",
      label: "carga una imagen",
      name: "imgReact",
      msg: "",
      aceptFormat: "image/*",
      source: selectedImage,
      imageChange: imageChange, // handleChange no funciona, y buguea el componente //
      removeSelectedImage: removeSelectedImage,
    },
    {
      type: "InputText",
      values: "",
      label: "nombre",
      name: "nombre",
      msg: "",
      onChange: handleChange,
    },
    {
      type: "InputMap",
      label: "Mapa",
      name: "gajo",
      msg: null,
      options: markers,
      //quizas no sea lo mas acertado usar options como markers def
      position: position,
      height: null,
      width: "70vw",
      center: [-39.9297, -68.0084],
      onClick: handleClickMap,
    },
  ];
  return (
    <form onSubmit={handleSubmit}>
      <FormFactory elementos={elementos} />
      <input type="submit" value="Send IMG" />
    </form>
  );
};
export default CargarGajo;
