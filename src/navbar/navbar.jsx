import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
export class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <ul>
        <li>
            <Link to="/clock"> clock</Link>
          </li>
          <li>
            <Link to="/login"> login</Link>
          </li>
          <li>
            <Link to="/#"> register</Link>
          </li>
          <li>
            <Link to="/signup"> sign up</Link>
          </li>
          <li>
            <Link to="/employee">Employee</Link>
          </li>
          <li>
            <Link to="/userpost">UserPost</Link>
          </li>
          <li>
            <Link to="/todos">Todo</Link>
          </li>
          <li>
            <Link to="/empDetails">Details</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
