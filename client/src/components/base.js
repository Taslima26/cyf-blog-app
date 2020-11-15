import * as firebase from "firebase/app";
import "firebase/auth";


const app = firebase.default.initializeApp({
 
  apiKey: "AIzaSyBV_9U01SrGP2v_Eq8GEkC7hDT3fedd3Zk",
  authDomain: "cyf-auth-app.firebaseapp.com",
  databaseURL: "https://cyf-auth-app.firebaseio.com",
  projectId: "cyf-auth-app",
  storageBucket: "cyf-auth-app.appspot.com",
})

export default app;