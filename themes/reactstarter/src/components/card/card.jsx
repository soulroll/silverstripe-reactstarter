import React, {Component} from 'react';
import CardImg from 'react-bootstrap/Card';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './card.scss';

const BootstrapCard = (props) => {
  const renderThing = () => {
    if (props.image) {
      if (props.link) {
        return (
          <Link to={props.link}>
            <img width="100%" src={props.image} alt="Card image cap" />
          </Link>
         );
      } else {
        return (
          <img width="100%" src={props.image} alt="Card image cap" />
        );
      }
    }

    return null;
  }

  return (
    <Card>
      {renderThing()}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.content}
        </Card.Text>
        {!!props.linktitle && (
          <Link to={props.link} className="btn btn-primary">{props.linktitle}</Link>
        )}
      </Card.Body>
    </Card>
  )
}

export default BootstrapCard;
