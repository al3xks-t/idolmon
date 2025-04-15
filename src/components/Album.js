import React from 'react';
import Card from './Card';

const Album = ({ album, onBurst }) => {
  // Step 1: Group cards by ID with quantity
  const grouped = album.reduce((acc, card) => {
    if (!acc[card.id]) {
      acc[card.id] = { ...card, quantity: 1 };
    } else {
      acc[card.id].quantity += 1;
    }
    return acc;
  }, {});

  const uniqueCards = Object.values(grouped);

  return (
    <div className="mt-40">
      <h2 className="text-2xl font-semibold text-purple-700 mb-4">📒 Your Collection</h2>
      <div className="flex flex-wrap justify-center">
        {uniqueCards.map((card, index) => (
          <Card
            key={card.id}
            card={card}
            onBurst={onBurst}
            quantity={card.quantity}
          />
        ))}
      </div>
    </div>
  );
};

export default Album;
