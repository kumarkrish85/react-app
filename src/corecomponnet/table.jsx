import React, { Component } from "react";
import "../css/table.css";
class Table extends Component {
  filterdData = [];
  constructor(props) {
    super(props);
    console.log(this.props);
    //always data should be an array
    this.state = {
      page: 1,
      pagechange: true,
    };
    this.filterMydata(1);
  }

  filterMydata(page) {
    let initial = (page - 1) * 10;
    let end = initial + 10;
    this.filterdData = this.props.data.slice(initial, end);
    this.setState({
      page: page,
    });
  }

  generateHeader() {
    if (this.props.data.length > 0) {
      console.log("hi");
      console.log(this.props.data[0]);
      let data = Object.keys(this.props.data[0]);
      return data.map((each) => <th key={each}>{each.toUpperCase()}</th>);
    } else {
      return null;
    }
  }

  generateBody() {
    return this.filterdData.map((each) => (
      <tr>{this.generateEachRow(each)}</tr>
    ));
  }

  generateEachRow(eachRow) {
    let data = Object.keys(this.props.data[0]);
    return data.map((each) => <td key={each}>{eachRow[each]}</td>);
  }

  previous() {
    return this.filterMydata(this.state.page - 1);
  }

  next() {
    return this.filterMydata(this.state.page + 1);
  }

  render() {
    return (
      <React.Fragment>
        <button type="button" onClick={() => this.filterMydata(1)}>
          {"<<"}
        </button>
        <button
          type="button"
          onClick={() => this.filterMydata(this.state.page - 1)}
        >
          {" "}
          {"<"}{" "}
        </button>
        <button type="button" onClick={() => this.filterMydata(1)}>
          {" "}
          {"1"}{" "}
        </button>
        <button type="button" onClick={() => this.filterMydata(2)}>
          {" "}
          {"2"}{" "}
        </button>
        <button type="button" onClick={() => this.filterMydata(3)}>
          {" "}
          {"3"}{" "}
        </button>
        <button type="button" onClick={() => this.filterMydata(4)}>
          {" "}
          {"4"}{" "}
        </button>
        <button type="button" onClick={() => this.next()}>
          {" "}
          {">"}{" "}
        </button>
        <button
          type="button"
          onClick={() => this.filterMydata(this.props.data.length / 10)}
        >
          {" "}
          {">>"}{" "}
        </button>
        <select name="drop" id="dropdn">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
        <br></br>
        <table>
          <thead>
            <tr>{this.generateHeader()}</tr>
          </thead>
          <tbody>{this.generateBody()}</tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Table;
