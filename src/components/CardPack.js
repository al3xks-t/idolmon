import React, { useState } from 'react';
import cards from '../data/cards.json';
import Card from './Card';

const CardPack = ({ onAddToAlbum, onBurst }) => {
  const [openedCards, setOpenedCards] = useState([]);
  const [isOpening, setIsOpening] = useState(false);

  const openPack = () => {
    setIsOpening(true);
    const newPack = [];
    const revealDelay = 700;

    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        const randIndex = Math.floor(Math.random() * cards.length);
        const card = cards[randIndex];
        newPack.push(card);
        setOpenedCards([...newPack]); // force re-render
        if (i === 2) {
          setIsOpening(false);
          onAddToAlbum(newPack);
        }
      }, i * revealDelay);
    }
  };

  return (
    <div className="mb-10">
      <button
        onClick={openPack}
        disabled={isOpening}
        className={`px-6 py-2 rounded-lg font-semibold shadow-lg transition ${
          isOpening
            ? 'bg-gray-400 text-white cursor-not-allowed'
            : 'bg-pink-500 hover:bg-pink-600 text-white'
        }`}
      >
        {isOpening ? 'Opening...' : '🎁 Open Pack'}
      </button>

      <div className="flex justify-center flex-wrap mt-6">
        {openedCards.map((card, index) => (
          <Card key={index + card.name} card={card} onBurst={onBurst}/>
        ))}
      </div>
    </div>
  );
};

export default CardPack;
