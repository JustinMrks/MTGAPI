import React from 'react';

const CardList = (props) => {
  return (
    <div>
      {props.error ? (
        <div> Uhh Ohh {props.error}</div>
      ) : (
        props.cards.map((card, key) => (
          <div>
            <h2>{card.name}</h2>
          </div>
        ))
      )}
    </div>
  );
};

export default CardList;
