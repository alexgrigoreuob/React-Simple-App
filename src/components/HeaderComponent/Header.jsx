import React, { Component } from "react";
import logo from "./../../assets/imgs/Roche_logo.png";

class Header extends Component {
  state = {};
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    );
  }
}

export default Header;
