import React, {Component} from "react";
import './header.scss';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="col">
            <a href="/">
              Logo goes here
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
