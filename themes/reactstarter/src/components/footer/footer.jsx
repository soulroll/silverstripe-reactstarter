import React, {Component} from "react";
import './footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="col">
            &copy; Company
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
