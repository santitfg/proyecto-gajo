import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";

// import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
// ...
// import { getAnalytics } from "firebase/analytics";
import { getAnalytics } from "firebase/analytics";

// Initialize Analytics and get a reference to the service
const app = initializeApp({
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
});

const auth = getAuth(app); // getAuth(); //
//////////////////-------------------
// //https://www.youtube.com/watch?v=31MVIwvstzs
const storage = getStorage(auth.app); //getStorage(); //
//no se hasta que punto es necesario pasar la referencias
///////////////////////------------------
const db = getFirestore(); //getFirestore(app)
const analytics = getAnalytics(app);

export { app, auth, storage, db, analytics };
//no se si usar app y auth como componentes es mala practica, sobre todo app

// https://www.youtube.com/watch?v=gauhWyPaYass
//https://www.npmjs.com/package/react-google-recaptcha
