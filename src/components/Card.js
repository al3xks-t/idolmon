import React, { useState, useRef } from 'react';

const Card = ({ card, onBurst, quantity = 1, duplicate = false }) => {
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef(null);

  const handleFlip = () => {
    setFlipped(!flipped);

    if (["Rare", "Ultra Rare", "Legendary"].includes(card.rarity)) {
      onBurst?.(card.rarity, cardRef.current);
    }
  };

  return (
    <div
      ref={cardRef}
      className="relative w-60 h-80 m-3 perspective"
      onClick={handleFlip}
    >
    {/* Quantity Badge (Top-right corner) */}
    {quantity > 1 && (
        <div className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded z-50 shadow-md">
          x{quantity}
        </div>
        )}
    {duplicate && (
        <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] px-2 py-1 rounded z-50 shadow-md">
          DUPLICATE
        </div>
      )}
      <div
        className={`w-full h-full transition-transform duration-500 transform-style preserve-3d ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Face */}
        <div className="absolute inset-0 backface-hidden">
          <div
            className={`w-full h-full bg-white rounded-xl p-4 border-4 ${getRarityStyle(
              card.rarity
            )} shadow-lg`}
          >
            <img src={card.image} alt={card.name} className="rounded-md" />
            <div className="mt-10">
              <h3 className="text-lg font-bold text-purple-800">{card.name}</h3>
              <p className="text-sm">
                <strong>Ability:</strong> {card.ability}
              </p>
              <p className="text-xs italic">{card.description}</p>
              <div className="mt-2 text-xs text-gray-600">
                HP: {card.hp} • Type: {card.energyType}
              </div>
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 rotate-y-180 backface-hidden">
          <div className="w-full h-full bg-gradient-to-br from-purple-100 to-white rounded-xl p-4 border-4 border-gray-300 shadow-inner flex flex-col justify-center items-center text-center">
            <p className="text-sm font-semibold text-purple-600 mb-2">✨ Lore ✨</p>
            <p className="text-xs italic text-gray-700">
              {card.name} was scouted in a bustling Seoul café and trained for 3 years before debuting with {card.group}. Known for their iconic move: <strong>{card.ability}</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const getRarityStyle = (rarity) => {
  switch (rarity) {
    case "Common":
      return "border-gray-300";
    case "Rare":
      return "border-blue-400 shadow-md shadow-blue-300 hover:scale-105 transition-transform";
    case "Ultra Rare":
      return "border-purple-500 shadow-lg shadow-purple-400 animate-pulse bg-gradient-to-br from-white to-purple-50";
    case "Legendary":
      return "border-yellow-400 bg-gradient-to-br from-yellow-100 to-white shadow-2xl shadow-yellow-400 animate-[wiggle_1s_ease-in-out_infinite]";
    default:
      return "border-gray-300";
  }
};

export default Card;
