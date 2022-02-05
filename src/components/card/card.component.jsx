import React from 'react';
import './card.style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

export const CardC = (props) => {
  return (
    <Card className={props.character.house}>
      <Card.Body>
        <Card.Img
          className="card-img"
          variant="top"
          src={props.character.image}
        />
        <Card.Title>{props.character.name}</Card.Title>
        <Card.Subtitle className="mb-2">{props.character.house}</Card.Subtitle>
        <Card.Text>Date Of Birth: {props.character.dateOfBirth}</Card.Text>
      </Card.Body>
    </Card>
  );
};
