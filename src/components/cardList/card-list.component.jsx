import React from 'react';
import './card-list.style.css';
import { CardC } from '../card/card.component';

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.characters
        .filter(
          (character) => character.image !== '' && character.dateOfBirth !== '',
        )
        .map((character, index) => (
          <CardC key={index} character={character} />
        ))}
    </div>
  );
};
