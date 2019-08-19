import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

class TeamList extends Component {
  render() {

    const reptiles = ['alligator', 'snake', 'lizard'];

    const PlayerQuery = gql`
    query{
      readPlayer(ID: 3) {
        ID
        Alias
        Name
      }
    }
    `;

    const linksToRender = [
      {
        id: '1',
        description: 'Prisma turns your database into a GraphQL API 😎',
        url: 'https://www.prismagraphql.com',
      },
      {
        id: '2',
        description: 'The best GraphQL client',
        url: 'https://www.apollographql.com/docs/react/',
      },
    ]

    return (
      <ol>
        {reptiles.map(reptile => <li key={reptile}>{reptile}</li>)}
      </ol>
    )


  }
}

export default TeamList;
