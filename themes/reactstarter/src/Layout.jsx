import React, {Component} from "react";
import { Route, Switch } from 'react-router-dom';
import Home from './routes/home/home';
import Teams from './routes/teams/teams';
import Contact from './routes/contact/contact';

class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/teams" component={Teams} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default Layout;
