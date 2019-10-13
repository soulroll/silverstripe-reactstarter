import React, {Component} from 'react';
import BootstrapCarousel from 'components/carousel/carousel';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

const GET_SLIDES = gql`
  query readSlides {
    readHomePageCarouselItem {
      edges {
        node {
          ID
          Title
          Caption
          getImageLink
        }
      }
    }
  }
`;

const Home = () => (
  <div>
    <Query query={GET_SLIDES}>

      {({ loading, error, data }) => {

        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error!</div>;

        const results = data.readHomePageCarouselItem.edges

        console.log(data.readHomePageCarouselItem.edges)

        return (
          <div>
            {results.map(api =>
              <div>
                {api.node.ID}
                {api.node.Title}
                {api.node.Caption}
                {api.node.getImageLink}
              </div>
            )}
          </div>
        );

      }}

    </Query>
  </div>
)

export default Home;
