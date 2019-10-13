import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './carousel.scss';

class BootstrapCarousel extends Component {
  render() {

    console.log(this.props);

    const {data} = this.props;

    return (
      <div>

        {this.props.data.name}

        <ul>
          {this.props.data.hobbies.map((hobby) => <li>{hobby}</li>)}
        </ul>

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
