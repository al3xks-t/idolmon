import React, { useState } from 'react';
import cards from '../data/cards.json';
import Card from './Card';

const CardPack = ({ onAddToAlbum }) => {
  const [openedCards, setOpenedCards] = useState([]);

  const openPack = () => {
    const pack = [];
    for (let i = 0; i < 3; i++) {
      const randIndex = Math.floor(Math.random() * cards.length);
      pack.push(cards[randIndex]);
    }
    setOpenedCards(pack);
    onAddToAlbum(pack);
  };

  return (
    <div className="mb-10">
      <button
        onClick={openPack}
        className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg font-semibold shadow-lg transition"
      >
        🎁 Open Pack
      </button>
      <div className="flex justify-center flex-wrap mt-6">
        {openedCards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default CardPack;
