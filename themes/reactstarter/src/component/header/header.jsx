import React, {Component} from "react";
import Logo from "../../img/logo.jpg";

import './header.scss';

const Header = () => (
  <header>
    <div className="container">
      <div className="col">
        <a href="/">
          <img src={Logo} className="logo" alt="logo"/>
        </a>
      </div>
    </div>
  </header>
);

export default Header;
