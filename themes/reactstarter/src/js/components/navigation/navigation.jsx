import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      response: []
    };
  }

  componentDidMount() {
    axios
      .get("http://silverstripereactstarter.davidm.wgtn.cat-it.co.nz/home/navigation")
      .then(res => {
        const response = res.data;
        this.setState({ response });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="container">
        <Navbar light expand="md">
          <Link to='/' className="navbar-brand">Company</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to='/' className="nav-link">Home</Link>
              </NavItem>
              <NavItem>
                <Link to='/components' className="nav-link">Components</Link>
              </NavItem>
              <NavItem>
                <Link to='/members' className="nav-link">Members</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
