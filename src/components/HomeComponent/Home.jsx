import React, { Component } from "react";
import Header from "./../HeaderComponent/Header";
import data from "./../../assets/data/data";
import "./Home.scss";

class Home extends Component {
  state = {
    doctorId: "",
    data: data
  };

  handleOnInputChange = event => {
    this.setState({
      doctorId: event.target.value
    });
  };

  handleOnSubmit = () => {
    const patientsWithDoctor = this.state.data.filter(
      x => x.practitionerId === this.state.doctorId
    );
    return this.props.history.push({
      pathname: "/patients",
      state: { patients: patientsWithDoctor }
    });
  };

  render() {
    return (
      <div className="jumbotron border border-primary">
        <Header />
        <h2 className="ml-2">Search for Patients</h2>
        <div className="form-group">
          <label className="idLabel">Insert doctor ID</label>
          <input
            type="text"
            className="form-control m-2"
            placeholder="Doctor ID"
            onChange={this.handleOnInputChange}
          />
        </div>
        <button
          className="ButtonLogin btn btn-primary m-2"
          onClick={this.handleOnSubmit}
          text="Search"
          type="button"
        >
          Search
        </button>
      </div>
    );
  }
}

export default Home;
