import React, {Component} from "react";
import Table from "react-bootstrap/Table";

import Row from "components/table/row/row";
import Cell from "components/table/cell/cell";

import "./table.scss";

class BootstrapTable extends Component {

  render() {

    const {headings} = this.props;
    const {rows} = this.props;

    return (
      <Table bordered striped>
        <thead>
          <tr>
            <th>{headings}</th>
          </tr>
        </thead>
        <tbody>
          <tbody>{rows}</tbody>
        </tbody>
      </Table>
    );
  }
}

export default BootstrapTable;
