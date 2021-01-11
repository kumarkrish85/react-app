import React, { Component } from "react";
import axios from "../api";
import "../css/employee.css";
import store from "../store";

class EmpDetails extends Component {
  employee = {};
  empId = "employeeArray/101";
  constructor(props) {
    super(props);
    console.log(store.getState());
    this.empId = "employeeArray/" + store.getState().employee.employeeid;
    axios.get(this.empId).then((data) => {
      console.log(data);
      this.employee = data.data;
      this.setState({ dataRecieved: true });
    });
  }

  generateHeader() {
    if (this.employee != null) {
      console.log("hi");
      console.log(this.employee);
      let data = Object.keys(this.employee);
      return data.map((each) => (
        <tr>
          <th key={each}>{each.toUpperCase()}</th>
          <td>{this.employee[each]}</td>
        </tr>
      ));
    } else {
      return null;
    }
  }

  render() {
    let displayData = this.eachCard(this.employee);
    return <div>{displayData}</div>;
  }

  eachCard(employee) {
    return (
      <div className="card">
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="Avatar"
        />
        <div className="container">
          <h4>
            <b>Name: {employee.Name}</b>
          </h4>
          <p>
            <b>Employee ID:</b> {employee.id}
          </p>
          <input type="button" value="Back" />
        </div>

        <div className="empTable">
          <table>
            <thead>{this.generateHeader()}</thead>
          </table>
        </div>
      </div>
    );
  }
}

export default EmpDetails;
