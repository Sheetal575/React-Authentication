import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyA0D6NdBlNeNVGwtGwPHV0StKzRtwUDNtQ",
    authDomain: "clone-52a31.firebaseapp.com",
    projectId: "clone-52a31",
    storageBucket: "clone-52a31.appspot.com",
    messagingSenderId: "325581505624",
    appId: "1:325581505624:web:223d1a5967eb948e2fb62d",
    measurementId: "G-ZTY8BF5VFL"
  };
const fire = firebase.initializeApp(firebaseConfig);

export default fire;