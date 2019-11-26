import React, {Component} from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import './page.scss';

const Page = (props) => (
  <div className="container">
    <div className="row">
      <div className="col">
        <div className="page">
          <h1 className="heading">{props.title}</h1>
          <div className="content" dangerouslySetInnerHTML={{__html: props.content}} />
        </div>
      </div>
    </div>
  </div>
)

export default Page;
