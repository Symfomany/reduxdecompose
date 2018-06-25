import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import configuration from "./configuration";

class AppTwo extends Component {
  constructor(props) {
    super(props);
    this.state = { personnages: [], loaded: false };
  }

  componentWillMount() {}
  removePersonnage(snapshot) {}
  addPersonnage(e) {
    e.preventDefault(); // <- prevent form submit from reloading the page

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

export default AppTwo;
