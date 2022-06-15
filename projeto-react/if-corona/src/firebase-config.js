import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCbG7LKpIBcfRoAB_WxnAWspvnn8eu07eA",
    authDomain: "ifcorona.firebaseapp.com",
    projectId: "ifcorona",
    storageBucket: "ifcorona.appspot.com",
    messagingSenderId: "920828447932",
    appId: "1:920828447932:web:5f92a30001115055a054b9",
    measurementId: "G-FXCM60Q3XZ"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);

// https://www.youtube.com/watch?v=jCY6DH8F4oc&ab_channel=PedroTech
// https://www.youtube.com/watch?v=9bXhf_TELP4&ab_channel=PedroTech
// https://www.npmjs.com/package/react-toastify
// projeto.ifcorona@gmail.com
// ifcorona123