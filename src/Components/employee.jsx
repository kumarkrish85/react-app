import React from "react";
import axios from "../api";
import "../css/employee.css";
import store,{VIEW} from "../store";

export class Employee extends React.Component {
  employee = [];
  constructor() {
    super();
    axios.get("employeeArray").then((data) => {
      console.log(data);
      this.employee = data.data;
      this.setState({ dataRecieved: true });
    });
  }

  eachCard(obj) {
    return (
      <div className="card">
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="Avatar"
        />
        <div className="container">
          <h4>
            <b>Name: {obj.Name}</b>
          </h4>
          <p>
            <b>Employee ID:</b> {obj.EmployeeID}
          </p>
          <input
            type="button"
            value="View"
            onClick={() => this.viewemployee()}
          />
        </div>
      </div>
    );
  }

  viewemployee = () => {
    store.dispath({ type: VIEW, value: 2 });
    this.props.history.push("/empDetails");
  };

  render() {
    let displayData = this.employee.map((obj) => {
      return this.eachCard(obj);
    });
    return <div>{displayData}</div>;
  }
}
