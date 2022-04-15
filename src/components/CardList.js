import React from 'react';

const CardList = (props) => {
  return (
    <div className="cardHolder">
      {props.error ? (
        <div> Uhh Ohh {props.error}</div>
      ) : (
        props.cards.map((card, key) => (
          <div className="singleCard">
            {card.imageUrl ? (
              <img src={card.imageUrl} alt={`Card art for ${card.name}`} />
            ) : (
              <p>No Image found for {card.name}</p>
            )}
            <h2>{card.name}</h2>
            <h3>{card.type}</h3>
            <p>{card.text}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default CardList;
