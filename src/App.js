import React, { useState } from 'react';
import CardPack from './components/CardPack';
import Album from './components/Album';

function App() {
  const [album, setAlbum] = useState([]);

  const addToAlbum = (cards) => {
    setAlbum((prev) => [...prev, ...cards]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 p-6 text-center font-sans">
      <h1 className="text-4xl font-bold text-pink-700 mb-6">IDOLMON: Collector’s Album</h1>
      <CardPack onAddToAlbum={addToAlbum} />
      <Album album={album} />
    </div>
  );
}

export default App;
