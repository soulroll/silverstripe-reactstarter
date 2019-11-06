import React, {Component} from "react";
import { Route, Switch } from 'react-router-dom';
import Home from './routes/home/home';
import Teams from './routes/teams/teams';
import Components from './routes/components/components';
import Contact from './routes/contact/contact';

import Routes from './Routes';

class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <Switch>
          {Routes.map(route => <Route key={route.name} {...route} />)}
        </Switch>
      </div>
    );
  }
}

export default Layout;
