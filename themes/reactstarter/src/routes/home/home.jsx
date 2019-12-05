import React, {Component} from 'react';
import BootstrapCarousel from 'components/carousel/carousel';
import BootstrapCard from 'components/card/card';
import Loader from 'components/loader/loader';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import './home.scss';

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

const GET_CARDS = gql`
  query readCards {
    readCard {
      edges {
        node {
          ID
          Title
          Content
          getImageLink
          getLink
          getLinkTitle
        }
      }
    }
  }
`;

const Home = () => (
  <div>
    <Query query={GET_SLIDES}>
      {({ loading, error, data }) => {

        if (loading) return <div><Loader message={'Loading...'} /></div>;
        if (error) return <div><Loader message={'Error!'} /></div>;

        const results = data.readHomePageCarouselItem.edges

        return (
          <div>
            <BootstrapCarousel items={results}/>
          </div>
        );

      }}
    </Query>

    <Query query={GET_CARDS}>
      {({ loading, error, data }) => {

        if (loading) return <div><Loader message={'Loading...'} /></div>;
        if (error) return <div><Loader message={'Error!'} /></div>;

        const results = data.readCard.edges

        return (
          <div className="container mt-5 mb-5 card-background">
            <div className="row">
            {results.map(item => (
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-4" key={item.node.ID} >
                <BootstrapCard linktitle={item.node.getLinkTitle} link={item.node.getLink} image={item.node.getImageLink} title={item.node.Title} content={item.node.Content}/>
              </div>
            ))}
            </div>
          </div>
        );

      }}
    </Query>

  </div>
)

export default Home;
