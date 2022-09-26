import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { provider } from "./provider";
import { auth } from "../firebaseConfig";
import Router from "next/router";

//TODO Borrar comentarios
//TODO Manejar errores, puede ser con un console.log (simple) o mandando ese error a algún state y mostrándolo en el front
//TODO Mandar datos del user al Context

export const authWithPopup = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;

      Router.push("/tasks");
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};
