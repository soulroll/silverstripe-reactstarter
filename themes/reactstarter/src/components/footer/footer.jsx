import React, {Component} from 'react';
import { Query } from 'react-apollo';
import GET_SITECONFIG from '../../graphql/queries/siteconfig';

import './footer.scss';

const Footer = () => (
  <footer>
    <div className="container">
      <div className="col">

        <Query query={GET_SITECONFIG}>
          {({ loading, error, data }) => {

            if (loading) return <div>Loading...</div>;
            if (error) return <div>Error!</div>;

            const siteconfigToRender = data.readSiteConfig
            // console.log(siteconfigToRender)

            return (
              <div>
                {siteconfigToRender.map(boomer => (
                  <p key={boomer.Title}>&copy; Company {boomer.Title}</p>
                ))}
              </div>
            );

          }}
        </Query>

      </div>
    </div>
  </footer>
)

export default Footer;
