import React, {Component} from "react";
import Table from "react-bootstrap/Table";
import "./table.scss";

const BootstrapTable = (props) => {

  const {results} = props;

  return (
    <Table striped bordered className="mb-5">
      <thead>
        <tr>
          <th>Logo</th>
          <th>Name</th>
          <th>Location</th>
          <th>Players</th>
        </tr>
      </thead>
      <tbody>
        {results.map(item => (
          <tr key={item.node.ID}>
            <td><img src={item.node.getImageLink}/></td>
            <td>{item.node.Name}</td>
            <td>{item.node.Location}</td>
            <td>
              {item.node.Players.edges.map(item => (
                <li className="player-list" key={item.node.ID}><strong>{item.node.Alias}</strong> {item.node.Name}</li>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default BootstrapTable;
