import firebase from "firebase/compat/app"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDcr05MEQ2gub3jMP61VKqiOKgwnjLaI-c",
    authDomain: "mono-car-project.firebaseapp.com",
    projectId: "mono-car-project",
    storageBucket: "mono-car-project.appspot.com",
    messagingSenderId: "835261690961",
    appId: "1:835261690961:web:bd4a99b567a23bdbfcf470"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;