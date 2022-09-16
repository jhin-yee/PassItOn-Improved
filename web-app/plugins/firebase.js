import * as firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA7CpJNBYMLczKh__r5DLVOMWAI1hu4Hio",
  authDomain: "is216-project-group24-g-11.firebaseapp.com",
  projectId: "is216-project-group24-g-11",
  storageBucket: "is216-project-group24-g-11.appspot.com",
  messagingSenderId: "455284672201",
  appId: "1:455284672201:web:a4cabc0d1df36ec9bd6f18"
};

let app = null;
if(!firebase.getApps.length){
  app = firebase.initializeApp(firebaseConfig);
}

export default firebase
