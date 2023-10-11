// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH,
  projectId: import.meta.env.VITE_PROJECT,
  storageBucket: import.meta.env.VITE_STORAGE,
  messagingSenderId: import.meta.env.VITE_MESSAGING,
  appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);



export const onSignIn = async ({email, password}) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password)
    console.log(res)
    return res
  }
  catch (e){
    console.log(e)
  }


}


export const register = async ({email, password}) => {
  try {
    let res = await createUserWithEmailAndPassword(auth, email, password)
    return res
  }
  catch(e){
    console.log(e)
  }

}

let googleProv = new GoogleAuthProvider()

export const loginWithGoogle = async () => {
  try {
    let res = await signInWithPopup(auth, googleProv);
    return res
  } catch (error) {
    console.log(error);
  }
}
