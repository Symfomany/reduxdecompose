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

  componentDidMount() {
    /* Create reference to messages in Firebase Database */
    let personnagesRef = configuration.database().ref("/");

    personnagesRef.on("child_added", snapshot => {
      this.setState({ loaded: true });
      const data = { ...snapshot.val(), ...{ id: snapshot.key } };
      this.setState({
        personnages: [...this.state.personnages, ...[data]]
      });
    });

    personnagesRef.on("child_removed", snapshot => {
      this.setState({
        personnages: this.state.personnages.filter(
          elt => elt.id !== snapshot.key
        )
      });
    });
  }
  removePersonnage(snapshot) {
    configuration
      .database()
      .ref(snapshot.id)
      .remove();
  }
  addPersonnage(e) {
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    const personnage = { nom: this.inputEl.value };
    configuration
      .database()
      .ref("/")
      .push(personnage);
    this.inputEl.value = "";
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <ul>
          {this.state.personnages.map(snapshot => {
            return (
              <li>
                <p>{snapshot.nom}</p>
                <button onClick={el => this.removePersonnage(snapshot)}>
                  X
                </button>
              </li>
            );
          })}
        </ul>

        {this.state.loaded === false && <p>Loading...</p>}

        <form onSubmit={this.addPersonnage}>
          <input type="text" ref={el => (this.inputEl = el)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
