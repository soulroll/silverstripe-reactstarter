import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import Components from '../pages/components';
import Members from '../pages/members';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <div className="container">
    <div className="col">
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/components' component={Components}/>
          <Route path='/members' component={Members}/>
        </Switch>
      </main>
    </div>
  </div>
);

export default Main;
