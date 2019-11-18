import React, {Component} from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import './page.scss';

const Page = (props) => (
  <div className="container">
    <div className="col">
      <h1>{props.title}</h1>
      <div dangerouslySetInnerHTML={{__html: props.content}} />
    </div>
  </div>
)

export default Page;
