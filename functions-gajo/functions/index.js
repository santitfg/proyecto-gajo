const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp(functions.config.firebase);
const db = admin.firestore();
const listaLocaciones = db.doc("listaLocaciones/listaGeoPoints");

exports.onCreateGajo = functions.firestore
  .document(`/gajos/{documentId}`)
  .onCreate((snap, context) => {
    const doc = snap.data();
    const geoLoc = doc.geoLoc;

    //luego ver si hago otro tipo de lista, con un dict o algo para emparejar loc con url o directamente hago el fetch desde una consulta
    // a la vez si hay gran cantidad de gajos voy a tener q modificarla para que creer listras de n° elementos
    return listaLocaciones.update({
      listaGeoPoints: admin.firestore.FieldValue.arrayUnion(geoLoc),
      //   });
    });
  });
