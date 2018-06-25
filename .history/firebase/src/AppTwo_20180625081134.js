import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import base from "./configurationTwo";

class AppTwo extends Component {
  constructor(props) {
    super(props);
    this.state = { personnages: [], loaded: false };
    this.addPersonnage = this.addPersonnage.bind(this);
    this.enablePersonnage = this.enablePersonnage.bind(this);
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
  enablePersonnage(snapshot) {
    base
      .update(`/${snapshot.key}`, {
        data: { active: true }
      })
      .then(() => {
        Router.transitionTo("dashboard");
      })
      .catch(err => {
        //handle error
      });
  }

  addPersonnage(e) {
    e.preventDefault(); // <- prevent form submit from reloading the page
    base
      .push("/", { data: { nom: this.inputEl.value, active: false } })
      .then(newSnapshot => {
        this.inputEl.value = "";
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
                <p style={{ color: snapshot.active ? "gold" : "black" }}>
                  {snapshot.nom}
                </p>
                <button onClick={el => this.removePersonnage(snapshot)}>
                  X
                </button>
                <button onClick={el => this.enablePersonnage(snapshot)}>
                  Active
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
