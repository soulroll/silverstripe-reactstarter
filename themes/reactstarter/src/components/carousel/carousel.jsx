import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './carousel.scss';

const BootstrapCarousel = (props) => {

  //console.log(props.items);
  const {data} = props;

  return (
    <Carousel fade={true} >
      {props.items.map(item => (
        <Carousel.Item key={item.node.ID}>
          <img
            className="d-block w-100"
            src={item.node.getImageLink}
            alt={item.node.Title}
          />
          <Carousel.Caption>
            <h3>{item.node.Title}</h3>
            <p>{item.node.Caption}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default BootstrapCarousel;
