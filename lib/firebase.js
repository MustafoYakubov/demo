import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMcl1PXnPeYnb6EN6ixV91b8-rbAMXon8",
  authDomain: "tesla-clone-e96a8.firebaseapp.com",
  projectId: "tesla-clone-e96a8",
  storageBucket: "tesla-clone-e96a8.appspot.com",
  messagingSenderId: "567748972910",
  appId: "1:567748972910:web:42aebc310219f6dca3317f",
  measurementId: "G-PZ9347E0FN",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
