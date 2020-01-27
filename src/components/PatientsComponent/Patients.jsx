import React from "react";
import { NavLink } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Header from "../HeaderComponent/Header";
import "./Patients.scss";

const Patients = ({ location }) => {
  const { patients } = location.state;

  return (
    <Paper className="jumbotron border border-primary">
      <Header />
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Patient Name</TableCell>
            <TableCell align="left">Date of birth</TableCell>
            <TableCell align="left">Diabites Type</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderTableData(patients)}</TableBody>
      </Table>
    </Paper>
  );
};

function renderTableData(patients) {
  return patients.map(patient => {
    const { patientId, fullname, dateOfBirth, diabetesType } = patient;
    const date = new Date(dateOfBirth);
    const dob =
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    const index = diabetesType.charAt(diabetesType.length - 1);
    const diabetesTypeFormatted = "Type " + index;
    return (
      <TableRow key={patientId}>
        <TableCell>{fullname}</TableCell>
        <TableCell>{dob}</TableCell>
        <TableCell>{diabetesTypeFormatted}</TableCell>
        <TableCell>
          <button className="btn btn-primary m-2">
            <NavLink
              to={{
                pathname: "/graph",
                state: { patient: patient }
              }}
              className="link"
            >
              See Patient
            </NavLink>
          </button>
        </TableCell>
      </TableRow>
    );
  });
}

export default Patients;
