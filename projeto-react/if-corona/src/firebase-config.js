import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"


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

const db = getFirestore(app);


// https://www.youtube.com/watch?v=jCY6DH8F4oc&ab_channel=PedroTech
// projeto.ifcorona@gmail.com
// ifcorona123
