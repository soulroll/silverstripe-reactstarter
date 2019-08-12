import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem, NavDropdown } from "react-bootstrap";

import './navigation.scss';

class Navigation extends Component {
  render() {
    return (
      <div className="container-full navigation">
        <div className="container">
          <Navbar bg="light" expand="lg">
            <Link to='/' className="navbar-brand">Navbar</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to='/' className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to='/teams' className="nav-link">Teams</Link>
                </li>
                <li className="nav-item">
                  <Link to='/contact' className="nav-link">Contact</Link>
                </li>
              </ul>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default Navigation;
