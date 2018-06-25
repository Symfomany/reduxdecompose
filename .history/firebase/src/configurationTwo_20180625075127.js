import firebase from "firebase";
import Rebase from "re-base";

const config = {
  /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyC9q879WXhhRJAYzBNfLMzFNQpLcwbqe_E",
  authDomain: "gameofthrone-45ba7.firebaseapp.com",
  databaseURL: "https://gameofthrone-45ba7.firebaseio.com",
  projectId: "gameofthrone-45ba7",
  storageBucket: "gameofthrone-45ba7.appspot.com",
  messagingSenderId: "477901613277"
};
const configuration = firebase.initializeApp(config);
const base = Rebase.createClass(configuration.database());

export default base;
