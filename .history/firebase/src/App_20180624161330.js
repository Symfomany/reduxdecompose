import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import configuration from "./configuration";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { personnages: [], loaded: false };
    this.addPersonnage = this.addPersonnage.bind(this);
  }

  componentWillMount() {
    /* Create reference to messages in Firebase Database */
    let personnagesRef = configuration.database().ref("/");
    /*.orderByKey()
      .limitToLast(100);*/
    personnagesRef.on("value", snapshot => {
      if (snapshot.val()) {
        this.setState({
          personnages: Object.values(snapshot.val()),
          loaded: true
        });
      } else {
        this.setState({ personnages: [] });
      }
    });
  }

  addPersonnage(e) {
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    const personnage = { nom: this.inputEl.value, created: new Date() };
    console.log(personnage);
    configuration
      .database()
      .ref("/")
      .push(personnage);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.state.personnages.length > 0 && (
          <ul>
            {/* Render the list of messages */
            this.state.personnages.map(personnage => <li>{personnage.nom}</li>)}
          </ul>
        )}

        {this.state.personnages.length === 0 && <p>Loading...</p>}

        <form onSubmit={this.addPersonnage}>
          <input type="text" ref={el => (this.inputEl = el)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
