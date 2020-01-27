import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./components/HomeComponent/Home";
import Patients from "./components/PatientsComponent/Patients";
import Graph from "./components/GraphComponent/Graph";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/patients/" component={Patients} />
        <Route path="/graph" component={Graph} />
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    );
  }
}

export default App;
