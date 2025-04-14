import React from 'react';

const Card = ({ card }) => {
  return (
    <div className="w-60 bg-white border-4 border-purple-300 rounded-xl shadow-lg m-3 p-4 transition-transform hover:scale-105">
      <img src={card.image} alt={card.name} className="rounded-md mb-2" />
      <h3 className="text-lg font-bold text-purple-800">{card.name}</h3>
      <p className="text-sm"><strong>Ability:</strong> {card.ability}</p>
      <p className="text-xs italic">{card.description}</p>
      <div className="mt-2 text-xs text-gray-600">
        HP: {card.hp} • Type: {card.energyType}
      </div>
    </div>
  );
};

export default Card;
