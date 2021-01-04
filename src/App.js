import React from "react";
import logo from "./logo.svg";
import {Provider} from "react-redux";
import { Login } from "./Components/login";
import { Signup } from "./Signup/signup";
import { Error } from "./Error/error";
import { Clock } from "./clock/clock";
import { Navbar } from "./navbar/navbar";
import { BrowserRouter } from "react-router-dom";
import { Main } from "./Components/main";
import { Employee } from "./Components/employee";
import store from "./store";

function App() {
  return (
    // <BrowserRouter>
    <Provider store={store}>
    <div className="App">
      <Navbar />
      <Main></Main>
      {/* <Login></Login> */}
      {/* //<Signup></Signup> */}
      {/* <Signup /> */}
      {/* <Employee></Employee> */}
    </div>
    </Provider>
    // </BrowserRouter>
  );
}

export default App;
