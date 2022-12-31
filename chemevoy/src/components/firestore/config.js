// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASH4zVM3YJy0l9iPwZKwYcBGJ2yvZvkyE",
  authDomain: "chemevoy-d44fd.firebaseapp.com",
  projectId: "chemevoy-d44fd",
  storageBucket: "chemevoy-d44fd.appspot.com",
  messagingSenderId: "755255892739",
  appId: "1:755255892739:web:9b4ff0aa64fd26b915e736"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestoreApp = () => {
    return app 
}