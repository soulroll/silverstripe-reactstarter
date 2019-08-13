import React, {Component} from "react";
import Logo from '../../assets/images/logo.jpg'; // Tell Webpack this JS file uses this image
import './header.scss';

console.log(Logo);

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="col">
            <a href="/">
              <img src={Logo} alt="Logo" />
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
