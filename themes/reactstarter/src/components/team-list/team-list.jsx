import React, { Component } from "react";
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import BootstrapTable from "components/table/table";
import "./team-list.scss";

const GET_TEAMS = gql`
  query readTeams {
    readTeam {
      edges {
        node {
          ID
          Name
          Location
          getImageLink
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
                <ul>
                  {teamsToRender.map(team => <li key={team.node.ID}><strong>{team.node.Name}</strong> - {team.node.Location} - {team.node.getImageLink} <img src={team.node.getImageLink} /></li>)}
                </ul>

                <BootstrapTable />

              </div>
            )

          }}
        </Query>
      </div>
    );
  }
}

export default TeamList;
