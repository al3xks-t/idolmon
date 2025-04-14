import React from 'react';
import Card from './Card';

const Album = ({ album, onBurst }) => {
  return (
    <div className="mt-40"> {/* Increased from mt-10 to mt-20 */}
      <h2 className="text-2xl font-semibold text-purple-700 mb-4">📒 Your Collection</h2>
      <div className="flex flex-wrap justify-center">
        {album.map((card, index) => (
          <Card key={index + card.name} card={card} onBurst={onBurst}/>
        ))}
      </div>
    </div>
  );
};

export default Album;
