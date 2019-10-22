import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import BootstrapTable from 'components/table/table';
import './team-list.scss';

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
                Name
              }
            }
          }
        }
      }
    }
  }
`;

const headings = [
  'Name',
  'Location'
];

const rows = [
  [
    'Bob',
    'Norway'
  ],
  [
    'Fred',
    'Denmark'
  ],
  [
    'Trump',
    'Cheetoland'
  ]
]

const TeamList = () => (
  <div>
    <Query query={GET_TEAMS}>
      {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error!</div>;
        const teamsToRender = data.readTeam.edges
        console.log(teamsToRender)
        return (
          <div>
            <ul>
              {teamsToRender.map(team => <li key={team.node.ID}><strong>{team.node.Name}</strong> - {team.node.Location} <img src={team.node.getImageLink} /></li>)}
            </ul>
            <div>
              {teamsToRender.map(team => <li key={team.node.ID}>{team.node.Players.edges.map(test => <li key={test.node.ID}>{test.node.Name}</li>)}</li> )}
            </div>
          </div>
        )
      }}
    </Query>
  </div>
)

export default TeamList;
