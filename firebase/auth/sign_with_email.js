import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

//TODO Manejar errores (console.log o state)

export const signWithEmail = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};
