import React, { Component } from "react";
import Chart from "react-google-charts";
import "./Graph.scss";
import Header from "../HeaderComponent/Header";

class Graph extends Component {
  buildData(patient) {
    console.log(patient);
    const result = [];
    result.push(["Day", patient.fullname]);
    patient.glucoseMesures.map(measures => {
      const time = this.msToTime(new Date(measures.date).getTime());
      const glucose = measures.glucose;
      const concat = [time, glucose];
      result.push(concat);
    });
    console.log(result);
    return result;
  }

  displayGlucemia(measure) {
    const time = this.msToTime(new Date(measure.date).getTime());
    const glucose = measure.glucose;
    console.log([time, glucose][0]);
    return [time, glucose][0];
  }

  msToTime(milliseconds) {
    var minutes = Math.floor((milliseconds / (1000 * 60)) % 60),
      hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    return hours + ":" + minutes;
  }

  render() {
    const patient = this.props.location.state.patient;
    return (
      <div className="jumbotron">
        <Header />
        <Chart
          width={"100%"}
          height={"500"}
          chartType="Line"
          loader={<div>Loading Chart</div>}
          data={this.buildData(patient)}
          options={{
            chart: {},
            width: 900,
            height: 500,
            series: {
              0: { axis: "Glucemia" }
            },
            axes: {
              y: {
                Glucemia: { label: "Glucemia(mg/dL)" }
              }
            }
          }}
          rootProps={{ "data-testid": "4" }}
        />
      </div>
    );
  }
}

export default Graph;
