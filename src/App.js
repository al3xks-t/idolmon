import React, { useState, useRef } from 'react';
import CardPack from './components/CardPack';
import Album from './components/Album';
import confetti from 'canvas-confetti';

function App() {
  const [album, setAlbum] = useState([]);
  const canvasRef = useRef(null);

  const addToAlbum = (cards) => {
    setAlbum((prev) => [...prev, ...cards]);
  };

  const triggerBurst = (rarity, sourceElement) => {
    const rect = sourceElement.getBoundingClientRect();
    const canvas = canvasRef.current;
    const confettiInstance = confetti.create(canvas, { resize: true, useWorker: true });

    let options = {
      particleCount: 80,
      spread: 60,
      origin: {
        x: (rect.left + rect.width / 2) / window.innerWidth,
        y: (rect.top + rect.height / 2) / window.innerHeight
      }
    };

    switch (rarity) {
      case "Rare":
        options.colors = ["#60A5FA", "#BFDBFE"];
        break;
      case "Ultra Rare":
        options.colors = ["#A78BFA", "#D8B4FE"];
        options.spread = 90;
        options.scalar = 1.2;
        break;
      case "Legendary":
        options.colors = ["#FBBF24", "#FCD34D", "#FFFFFF"];
        options.spread = 120;
        options.scalar = 1.5;
        options.particleCount = 100;
        break;
      default:
        break;
    }

    confettiInstance(options);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 p-6 text-center font-sans relative">
      <h1 className="text-4xl font-bold text-pink-700 mb-6">IDOLMON: Collector’s Album</h1>

      {/* 🎆 Confetti Canvas */}
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-50" />

      {/* 💳 Components with Confetti Support */}
      <CardPack onAddToAlbum={addToAlbum} onBurst={triggerBurst} />
      <Album album={album} onBurst={triggerBurst} />
    </div>
  );
}

export default App;
