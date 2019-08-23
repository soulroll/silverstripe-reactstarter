import React, { Component } from "react";
import TeamList from "components/team-list/team-list";

class Teams extends Component {
  render() {
    return (
      <div className="container">
        <div className="col">
          <div className="Teams">
            <h1>Teams</h1>
            <p>This is the teams route</p>
            <TeamList />
          </div>
        </div>
      </div>
    );
  }
}

export default Teams;
