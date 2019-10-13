import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './carousel.scss';

class BootstrapCarousel extends Component {
  render() {


    console.log(this.props.items);

    const {data} = this.props;

    return (
      <div>
        <Carousel>
        {this.props.items.map(item => (
          <Carousel.Item key={item.node.ID}>
            <img
              className="d-block w-100"
              src={item.node.getImageLink}
              alt={item.node.Title}
            />
          </Carousel.Item>
        ))}
        </Carousel>
      </div>
    );
  }
}

export default BootstrapCarousel;
