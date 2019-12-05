import React, {Component} from 'react';
import Logo from '../../assets/images/logo.png'; // Tell Webpack this JS file uses this image
import Loader from 'components/loader/loader';
import { Link } from 'react-router-dom';
import { useQuery } from "@apollo/react-hooks";

import GET_SITECONFIG from '../../graphql/queries/siteconfig';

import './header.scss';

const Header = () => {

  const { loading, error, data } = useQuery(GET_SITECONFIG);

  if (loading) return <div><Loader message={'Loading...'} /></div>;
  if (error) return <div><Loader message={'Error!'} /></div>;

  const siteconfigToRender = data.readSiteConfig

  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col">
            <Link to={"/"}>
              <img src={Logo} alt="Logo" />
            </Link>
            <div className="contact-info">
              <li><a href="mailto:johndoe@company.co.nz">johndoe@company.co.nz</a></li>
              <li>027 1234 567</li>
            </div>
          </div>
        </div>
      </div>
    </header>
  );

}

export default Header;
