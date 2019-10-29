import React, {Component} from 'react';
import CardImg from 'react-bootstrap/Card';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './card.scss';

const BootstrapCard = (props) => {
  return (
    <Card>
      <img width="100%" src={props.image} alt="Card image cap" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.content}
        </Card.Text>
        <a className="btn btn-primary" href={props.link}>{props.linktitle}</a>
      </Card.Body>
    </Card>
  )
}

export default BootstrapCard;
