import React, { Component } from 'react';
import axios from "../api";

export class Todos extends Component {
    constructor(props) {
        super(props);
        axios
      .get("todos")
      .then((data) => {
        console.log(data);
        this.employee = data.data;
        this.setState({ dataRecieved: true });
      });
        this.state = {  }
    }
    render() { 
        return ( 
            <div>hi</div>
         );
    }
}
 
export default Todos;