import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, Glyphicon } from "react-bootstrap";

class Navigation extends Component {

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown.Item href="#">Home</NavDropdown.Item>
            <NavDropdown.Item href="#">Teams</NavDropdown.Item>
            <NavDropdown.Item href="#">Contact</NavDropdown.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

}

export default Navigation;
