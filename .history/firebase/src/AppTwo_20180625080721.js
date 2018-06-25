import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import base from "./configurationTwo";

class AppTwo extends Component {
  constructor(props) {
    super(props);
    this.state = { newInput: "", personnages: [], loaded: false };
  }

  componentDidMount() {
    base.syncState("/", {
      context: this,
      state: "personnages",
      asArray: true
    });
  }
  removePersonnage(snapshot) {
    console.log(snapshot);
    base.remove(snapshot.key).then(() => {
      console.log("ok");
    });
  }

  addPersonnage(e) {
    e.preventDefault(); // <- prevent form submit from reloading the page
    console.log(this.inputEl);
    base
      .push("/", {
        data: { nom: "ok", active: false }
      })
      .then(newSnapshot => {
        //this.inputEl.value = "";
      });
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
          <input
            type="text"
            onChange={e => this.setState({ newInput: e.target.value })}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default AppTwo;
