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
    let personnagesRef = configuration.database().ref();
    /*.orderByKey()
      .limitToLast(100);*/
    personnagesRef.on("child_added", snapshot => {
      this.setState({ loaded: true });
      this.setState({
        personnages: [
          this.state.personnages,
          ...{ [snapshot.key]: snapshot.val() }
        ]
      });
    });
  }
  removePersonnage(snapshot) {
    configuration
      .database()
      .ref(snapshot.key)
      .remove();

    console.log(snapshot.key);
    // configuration
    //   .database()
    //   .child(key)
    //   .removeValue();
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
                {console.log(snapshot.nom)}
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
