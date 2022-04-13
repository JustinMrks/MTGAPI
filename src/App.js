import React, { useState } from 'react';
import CardForm from './components/CardForm';
import CardList from './components/CardList';
import axios from 'axios';
import './App.css';

function App() {
  const [error, setError] = useState('');
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [cards, setCards] = useState([]);
  const findCards = () => {
    setIsFetchingData(true);
    axios
      .get('https://api.magicthegathering.io/v1/cards')
      .then((res) => {
        console.log(`cards baby ${res.data.cards}`);
        setCards(res.data.cards);
        setIsFetchingData(false);
        console.log(cards);
      })
      .catch((err) => {
        console.log(`yikes: ${err}`);
        setError(err);
        setIsFetchingData(false);
      });
  };

  return (
    <div>
      <h1>Magic The Gathering Cards</h1>
      <CardForm getCards={findCards} fetching={isFetchingData} />
      <CardList cards={cards} error={error} />
    </div>
  );
}

export default App;
