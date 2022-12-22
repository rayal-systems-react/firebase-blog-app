import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCX2z5nszerIMKfeudnKzB11vQgIeVoI-E",
  authDomain: "react-blogs-app-d40c0.firebaseapp.com",
  projectId: "react-blogs-app-d40c0",
  storageBucket: "react-blogs-app-d40c0.appspot.com",
  messagingSenderId: "176122612364",
  appId: "1:176122612364:web:65668b02be9a781c2d09a9",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
