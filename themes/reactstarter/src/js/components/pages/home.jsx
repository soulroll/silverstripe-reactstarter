import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';

import slideone from '../../images/slide-one.jpg';
import slidetwo from '../../images/slide-two.jpg';
import slidethree from '../../images/slide-three.jpg';
import cardone from '../../images/card-one.jpg';
import cardtwo from '../../images/card-two.jpg';
import cardthree from '../../images/card-three.jpg';

const items = [
  {
    src: slideone,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: slidetwo,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: slidethree,
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

class HomeSlider extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        className="mb-5 carousel-fade"
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}

const Home = () => (
  <div>
    <HomeSlider />
    <div className="row">
      <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
        <Card>
          <CardImg top width="100%" src={cardone} alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Text</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
        <Card>
          <CardImg top width="100%" src={cardtwo} alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Text</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
        <Card>
          <CardImg top width="100%" src={cardthree} alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Text</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    </div>
  </div>
);

export default Home;
