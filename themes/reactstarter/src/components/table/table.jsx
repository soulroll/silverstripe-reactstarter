import React, {Component} from "react";
import Table from "react-bootstrap/Table";
import Row from "components/row/row";
import "./table.scss";

class BootstrapTable extends Component {
  render() {
    return (
      <Table bordered striped>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <Row />
        </tbody>
      </Table>
    );
  }
}

export default BootstrapTable;
