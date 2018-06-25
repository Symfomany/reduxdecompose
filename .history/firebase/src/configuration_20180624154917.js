import firebase from "firebase";
const config = {
  /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyC9q879WXhhRJAYzBNfLMzFNQpLcwbqe_E",
  authDomain: "gameofthrone-45ba7.firebaseapp.com",
  databaseURL: "https://gameofthrone-45ba7.firebaseio.com",
  projectId: "gameofthrone-45ba7",
  storageBucket: "gameofthrone-45ba7.appspot.com",
  messagingSenderId: "477901613277"
};

const fire = firebase.initializeApp(config);
export default fire;
