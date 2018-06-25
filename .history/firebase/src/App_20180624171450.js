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
      this.setState({
        loaded: true
      });

      if (snapshot) {
        console.log(snapshot);
        this.setState({ personnages: snapshot });
      } else {
        this.setState({ personnages: [] });
      }
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
          {/* Render the list of messages */
          this.state.personnages.forEach(snapshot => {
            <li>
              {snapshot.val().nom}
              <button onClick={el => this.removePersonnage(snapshot)}>X</button>
            </li>;
          })}
        </ul>

        {this.state.loaded === false && <p>Loading...</p>}
        {this.state.personnages.length === 0 &&
          this.state.loaded === true && (
            <p>
              <i>Not result</i>
            </p>
          )}

        <form onSubmit={this.addPersonnage}>
          <input type="text" ref={el => (this.inputEl = el)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
