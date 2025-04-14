import React from 'react';
import Card from './Card';

const Album = ({ album }) => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold text-purple-700 mb-4">📒 Your Collection</h2>
      <div className="flex flex-wrap justify-center">
        {album.map((card, index) => (
          <Card key={index + card.name} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Album;
