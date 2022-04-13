import React from 'react';

const CardForm = (props) => {
  return (
    <div>
      {props.fetching ? (
        <p>Loading Cards...</p>
      ) : (
        <button onClick={props.getCards}>Find My Cards</button>
      )}
    </div>
  );
};

export default CardForm;
