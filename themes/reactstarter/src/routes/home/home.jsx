import React, {Component} from 'react';
import BootstrapCarousel from 'components/carousel/carousel';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

const CAROUSEL_ITEMS_QUERY = gql`
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

const Home = () => {

  var data = {
    name: "David",
    hobbies: ["Sports","Warhammer","Chess"]
  };

  return (
    <div className="container">
      <div className="col">
        <div className="Home">
          <BootstrapCarousel data={data} query={CAROUSEL_ITEMS_QUERY} />
        </div>
      </div>
    </div>
  );

};

export default Home;
