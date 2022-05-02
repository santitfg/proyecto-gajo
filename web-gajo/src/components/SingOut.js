import { signOut } from "firebase/auth";
import { auth } from "../BaseApp";
const SingOut = () => {
  const HandleClick = () => {
    signOut(auth)
      .then(() => {
        console.log(" Sign-out successful");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return <button onClick={HandleClick}>Desconectarse</button>;
};

export default SingOut;
