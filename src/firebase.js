// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// import { getStorage, ref } from "firebase/storage";
// import { getFirestore, serverTimestamp } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwloQwNBvspTuh06s4PMcjASXNxbwLsVI",
  authDomain: "image-storage-946b1.firebaseapp.com",
  projectId: "image-storage-946b1",
  storageBucket: "image-storage-946b1.appspot.com",
  messagingSenderId: "199708346358",
  appId: "1:199708346358:web:2d7a4e4aa16cc55ef429d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);