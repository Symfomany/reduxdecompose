import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import database from "./database";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { personnages: [] };
  }

  componentWillMount() {
    /* Create reference to messages in Firebase Database */
    let personnagesRef = database
      .database()
      .ref("/")
      .orderByKey()
      .limitToLast(100);
    personnagesRef.on("child_added", snapshot => {
      /* Update React state when message is added at Firebase Database */
      let personnage = { nom: snapshot.val().nom, id: snapshot.key };
      this.setState({
        personnages: [...[personnage], this.state.personnages]
      });
    });
  }

  addPersonnage(e) {
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */

    let message = { nom: e.target.value };

    database
      .database()
      .ref("/")
      .push([...[message], this.state.messages]);
    this.inputEl.value = ""; // <- clear the input
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
