import React, { Component } from 'react';
import BootstrapTable from 'components/table/table';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import './teams.scss';

const GET_TEAMS = gql`
  query readTeams {
    readTeam {
      edges {
        node {
          ID
          Name
          Location
          getImageLink
          Players {
            edges {
              node {
                ID
                Alias
                Name
              }
            }
          }
        }
      }
    }
  }
`;

class Teams extends Component {
  render() {
    return (
      <div className="container">
        <div className="col">
          <div className="Teams">
            <h1>Teams</h1>
            <p>This is the teams route</p>
            <Query query={GET_TEAMS}>
              {({ loading, error, data }) => {

                if (loading) return <div>Loading...</div>;
                if (error) return <div>Error!</div>;

                const results = data.readTeam.edges

                return (
                  <div>
                    <BootstrapTable results={results} />
                  </div>
                );

              }}
            </Query>
          </div>
        </div>
      </div>
    );
  }
}

export default Teams;
