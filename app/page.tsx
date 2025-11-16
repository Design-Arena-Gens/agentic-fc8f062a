'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const scenes = [
    {
      id: 0,
      duration: 5000,
      component: <Scene1 />
    },
    {
      id: 1,
      duration: 5000,
      component: <Scene2 />
    },
    {
      id: 2,
      duration: 5000,
      component: <Scene3 />
    },
    {
      id: 3,
      duration: 6000,
      component: <Scene4 />
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setTimeout(() => {
      if (currentScene < scenes.length - 1) {
        setCurrentScene(currentScene + 1);
      } else {
        setIsPlaying(false);
        setCurrentScene(0);
      }
    }, scenes[currentScene].duration);

    return () => clearTimeout(timer);
  }, [currentScene, isPlaying]);

  const handleStart = () => {
    setCurrentScene(0);
    setIsPlaying(true);
  };

  const handleReplay = () => {
    setCurrentScene(0);
    setIsPlaying(true);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        {!isPlaying && currentScene === 0 ? (
          <motion.div
            key="start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-700"
          >
            <div className="text-center">
              <motion.h1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-6xl font-bold text-white mb-4"
              >
                Kumar Packers & Movers
              </motion.h1>
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-2xl text-blue-100 mb-8"
              >
                Your Trusted Moving Partner
              </motion.p>
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                onClick={handleStart}
                className="px-12 py-4 bg-white text-blue-900 rounded-full text-xl font-bold hover:bg-blue-50 transition-colors shadow-2xl"
              >
                Play Ad
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={`scene-${currentScene}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            {scenes[currentScene].component}
          </motion.div>
        )}
      </AnimatePresence>

      {!isPlaying && currentScene > 0 && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleReplay}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 px-8 py-3 bg-white text-blue-900 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-xl z-50"
        >
          Replay Ad
        </motion.button>
      )}

      {isPlaying && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-50">
          {scenes.map((_, index) => (
            <div
              key={index}
              className={`h-1 w-16 rounded-full transition-all ${
                index === currentScene ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// Scene 1: Stressed Family
function Scene1() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center relative overflow-hidden">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mb-8"
        >
          <div className="text-8xl mb-4">📦😰</div>
          <div className="text-6xl">👨‍👩‍👧‍👦</div>
        </motion.div>
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-5xl font-bold text-gray-800 mb-4"
        >
          Tired of Moving Stress?
        </motion.h2>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-3xl text-gray-600"
        >
          We understand your struggle...
        </motion.p>
      </motion.div>

      {/* Floating boxes */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 3, delay: 0.2 }}
        className="absolute top-20 left-20 text-7xl"
      >
        📦
      </motion.div>
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}
        className="absolute bottom-32 right-32 text-7xl"
      >
        📦
      </motion.div>
    </div>
  );
}

// Scene 2: Professional Movers
function Scene2() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center relative overflow-hidden">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="mb-8"
        >
          <div className="text-9xl mb-4">🚚</div>
          <div className="text-7xl">👷‍♂️👷‍♀️</div>
        </motion.div>
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-5xl font-bold text-white mb-4"
        >
          Professional Moving Services
        </motion.h2>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-3xl text-blue-100"
        >
          Expert team • Safe handling • On-time delivery
        </motion.p>
      </motion.div>

      {/* Moving truck animation */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-20 text-8xl"
      >
        🚛
      </motion.div>

      {/* Sparkles */}
      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute top-32 right-40 text-6xl"
      >
        ✨
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
        className="absolute top-40 left-40 text-6xl"
      >
        ✨
      </motion.div>
    </div>
  );
}

// Scene 3: All India Service
function Scene3() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-green-600 to-orange-500 flex items-center justify-center relative overflow-hidden">
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className="text-center z-10"
      >
        <motion.div className="mb-8 relative">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-9xl mb-4"
          >
            🇮🇳
          </motion.div>

          {/* Animated trucks */}
          <motion.div
            animate={{ x: [-100, 100, -100] }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            className="absolute top-20 left-1/2 text-5xl"
          >
            🚛
          </motion.div>
          <motion.div
            animate={{ x: [100, -100, 100] }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear", delay: 1 }}
            className="absolute top-40 left-1/2 text-5xl"
          >
            🚚
          </motion.div>
        </motion.div>

        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-6xl font-bold text-white mb-4 drop-shadow-lg"
        >
          All Over India Service
        </motion.h2>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-3xl text-white drop-shadow-lg"
        >
          From Kashmir to Kanyakumari
        </motion.p>
      </motion.div>

      {/* Location pins */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute top-20 left-1/4 text-6xl"
      >
        📍
      </motion.div>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
        className="absolute top-32 right-1/4 text-6xl"
      >
        📍
      </motion.div>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2, delay: 1 }}
        className="absolute bottom-40 left-1/3 text-6xl"
      >
        📍
      </motion.div>
    </div>
  );
}

// Scene 4: Contact Information
function Scene4() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center relative overflow-hidden">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-center z-10 bg-white/10 backdrop-blur-sm p-16 rounded-3xl border-4 border-white/30"
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ delay: 0.5, duration: 1, repeat: 2 }}
          className="text-8xl mb-8"
        >
          🚚📦
        </motion.div>

        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-7xl font-bold text-white mb-8 drop-shadow-xl"
        >
          Kumar Packers & Movers
        </motion.h1>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-center gap-4 text-5xl text-white">
            <span>📞</span>
            <motion.a
              href="tel:9618849713"
              whileHover={{ scale: 1.1 }}
              className="font-bold hover:text-yellow-300 transition-colors"
            >
              9618849713
            </motion.a>
          </div>
          <div className="flex items-center justify-center gap-4 text-5xl text-white">
            <span>📱</span>
            <motion.a
              href="tel:8498868686"
              whileHover={{ scale: 1.1 }}
              className="font-bold hover:text-yellow-300 transition-colors"
            >
              8498868686
            </motion.a>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-3xl text-blue-100 mt-8"
        >
          Your Hassle-Free Moving Partner!
        </motion.p>
      </motion.div>

      {/* Floating elements */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 360],
        }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute top-20 left-20 text-6xl"
      >
        ⭐
      </motion.div>
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, -360],
        }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
        className="absolute top-20 right-20 text-6xl"
      >
        ⭐
      </motion.div>
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 360],
        }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-20 left-1/4 text-6xl"
      >
        ⭐
      </motion.div>
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, -360],
        }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-20 right-1/4 text-6xl"
      >
        ⭐
      </motion.div>
    </div>
  );
}
