import React from 'react';
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
