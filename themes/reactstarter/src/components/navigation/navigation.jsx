import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem, NavDropdown } from 'react-bootstrap';

import Routes from '../../Routes';

import './navigation.scss';

const Navigation = (props) => (
  <div className="container-full navigation">
    {console.log(props)}
    <div className="container">
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto hidden-sm-up float-xs-right"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="navbar-nav">

            {Routes.map(route => <li key={route.name}><strong>{route.name}</strong></li>)}

            <li className="nav-item">
              <Link to='/' className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/teams' className="nav-link">Teams</Link>
            </li>
            <li className="nav-item">
              <Link to='/components' className="nav-link">Components</Link>
            </li>
            <li className="nav-item">
              <Link to='/contact' className="nav-link">Contact</Link>
            </li>
          </ul>
        </Navbar.Collapse>
      </Navbar>
    </div>
  </div>
)

export default Navigation;
