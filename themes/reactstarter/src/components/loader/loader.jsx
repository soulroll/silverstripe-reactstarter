import React, {Component} from 'react';
import './loader.scss';

const Loader = (props) => {
  return (
    <div className="container">
      <div className="loader">
        {props.message}
      </div>
    </div>
  )
}

export default Loader;
