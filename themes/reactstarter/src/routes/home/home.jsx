import React, {Component} from 'react';
import BootstrapCarousel from 'components/carousel/carousel';
import BootstrapCard from 'components/card/card';
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
            <BootstrapCarousel items={results}/>
            <div className="container mt-5 mb-5">
              <BootstrapCard/>
            </div>
          </div>
        );

      }}

    </Query>
  </div>
)

export default Home;
