import React, { Component } from "react";
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import "./team-list.scss";

const GET_TEAMS = gql`
  query readTeams {
    readTeam {
      edges {
        node {
          ID
          Name
          Location
        }
      }
    }
  }
`;

class TeamList extends Component {
  render() {
    return (
      <div>
        <Query query={GET_TEAMS}>
          {({ loading, error, data }) => {
            if (loading) return <div>Loading...</div>;
            if (error) return <div>Error!</div>;

            const reptiles = ['alligator', 'snake', 'lizard'];

            const teamsToRender = data.readTeam.edges
            console.log(teamsToRender)

            return (
              <div>
                <ol>
                  {teamsToRender.map(team => <li key={team.node.ID}>{team.node.Location}</li>)}
                </ol>
              </div>
            )
          }}
        </Query>
      </div>
    );
  }
}

export default TeamList;
