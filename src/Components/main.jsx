import React from "react";
import { Switch, Route } from "react-router-dom";
import { Signup } from "../Signup/signup";
import { Login } from "./login";
import { Employee } from "./employee";
import EmpDetails from "./empdetails";
import UserPost from "./userpost";
import todos from "./todos";
import {Clock} from "../clock/clock";

export class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/clock" component={Clock}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/employee" component={Employee}></Route>
          <Route path="/userpost" component={UserPost}></Route>
          <Route path="/empDetails" component={EmpDetails}></Route>
          <Route path="/todos" component={todos}></Route>

          {/* <Route path="*" component={Login}></Route> */}
        </Switch>
      </main>
    );
  }
}
