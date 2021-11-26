
import {initializeApp} from 'firebase/app'
import {GoogleAuthProvider,FacebookAuthProvider} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
import 'firebase/firestore'
import 'firebase/auth'
// const firebase = require("firebase");






const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket:process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID
};

// console.log(firebaseConfig)

// const firebaseConfig = {
//     apiKey: "AIzaSyApYYYMLzUTg1Jo1rM3kZ0EdToIqjR2Ltw",
//     authDomain: "reac-app-curso-143ad.firebaseapp.com",
//     projectId: "reac-app-curso-143ad",
//     storageBucket: "reac-app-curso-143ad.appspot.com",
//     messagingSenderId: "241579396357",
//     appId: "1:241579396357:web:137dc5585bdc2fabc9fb6c"
//   };

  // const firebaseConfigTest = {
  //   apiKey: "AIzaSyD3eIx2Evlmg86Jg09Zg2xSZogOBRYLNAE",
  //   authDomain: "test-react-48c33.firebaseapp.com",
  //   projectId: "test-react-48c33",
  //   storageBucket: "test-react-48c33.appspot.com",
  //   messagingSenderId: "485103820960",
  //   appId: "1:485103820960:web:70ab95d5304cde7b9369c5"
  // };

initializeApp(firebaseConfig)
//  if (process.env.NODE_ENV==='test'){
//     initializeApp(firebaseConfigTest)
//     }else{
//     initializeApp(firebaseConfig);
//     }
  
  // Initialize Firebase
  
  const db = getFirestore()
  const googleAuthProvider = new GoogleAuthProvider();
  const facebookAuthProvider = new FacebookAuthProvider();

  export{
      db,
      googleAuthProvider,
      facebookAuthProvider
   
  }