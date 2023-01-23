// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpDAni2qCVbY59qBvZKqs6FR2MK-cGrw0",
  authDomain: "cocktailapp-b4cfd.firebaseapp.com",
  databaseURL: "https://cocktailapp-b4cfd-default-rtdb.firebaseio.com",
  projectId: "cocktailapp-b4cfd",
  storageBucket: "cocktailapp-b4cfd.appspot.com",
  messagingSenderId: "673259643776",
  appId: "1:673259643776:web:e9da6d1c8a708d6ae5d765"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;