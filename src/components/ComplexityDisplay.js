import React, { Component } from "react";
import styled from "styled-components";
import { Table } from "reactstrap";

// width: 300px;

const Complexity = styled.div`
  height: 400px;
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.text};
  border-radius: 10px;
  padding: 20px 30px;
  margin-bottom: 30px;
  transition: 0.5s;
`;

export default class ComplexityDisplay extends Component {
  render() {
    return (
      <Complexity>
        <h2>Complexity</h2>
        <Table
          className="table"
          style={{ color: "#EEEEEE" }}
          responsive
          size=""
        >
          <tbody>
            <tr>
              <td>Average Complexity</td>
              <td>{this.props.complexity.average}</td>
            </tr>
            <tr>
              <td>Best Case</td>
              <td>{this.props.complexity.best_case}</td>
            </tr>
            <tr>
              <td>Worst Case</td>
              <td>{this.props.complexity.worst_case}</td>
            </tr>
            <tr>
              <td>Space Complexity</td>
              <td>{this.props.complexity.space}</td>
            </tr>
          </tbody>
        </Table>
      </Complexity>
    );
  }
}
