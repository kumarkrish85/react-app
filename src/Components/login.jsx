import React from "react";
import styles from "../css/login.module.css";
import axios from "axios";
export class Login extends React.Component {
  login() {
    // fetch("http://localhost:8080/entry-point/employee/json").then((data) => {
    //   console.log(data);
    // });
    axios.get("http://localhost:8080/entry-point/employee/json").then((data) => {
      console.log(data);
    });
  }
  onType() {
    alert("i m typed");
  }
  render() {
    return (
      <form>
        Username:
        <br />
        <input type="text" onKeyUp={() => this.onType()} name="username" />
        <br />
        Password:
        <br />
        <input className={styles.input} type="password" name="password" />
        <br></br>
        <input type="button" onClick={() => this.login()} value="Submit" />
      </form>
    );
  }
}
