import React, {Component} from "react";
import Carousel from 'react-bootstrap/Carousel'
import "./carousel.scss";

class BootstrapCarousel extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img className="" src="https://placeimg.com/1080/480/any" alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="" src="https://placeimg.com/1080/480/any" alt="Second slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default BootstrapCarousel;
