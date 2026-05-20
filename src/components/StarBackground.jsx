import React, { useState, useEffect } from 'react';

const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();
  }, []);

  const generateStars = () => {
    const newStars = [];
    for (let i = 0; i < 150; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 2 + 1, // subtle stars, sizes 1px to 3px
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.7 + 0.2,
        animationDuration: Math.random() * 5 + 3,
      });
    }
    setStars(newStars);
  };

  const generateMeteors = () => {
    const newMeteors = [];
    for (let i = 0; i < 5; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 1.5 + 1.2, // meteor tail width/height ratios
        x: Math.random() * 100,
        y: Math.random() * 30, // originate mostly from top portion of viewport
        delay: Math.random() * 12,
        animationDuration: Math.random() * 4 + 3,
      });
    }
    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] transition-colors duration-500 bg-slate-50 dark:bg-black">
      {/* Deep cosmic vignette glow overlay - center focused, leaving sides pure black */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(15,23,42,0.15))] dark:bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_60%)] mix-blend-screen" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.04),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.04),transparent_40%)]" />

      {/* Star Elements */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle bg-slate-400 dark:bg-white"
          style={{
            width: star.size + 'px',
            height: star.size + 'px',
            left: star.x + '%',
            top: star.y + '%',
            opacity: star.opacity,
            animationDuration: star.animationDuration + 's',
          }}
        />
      ))}

      {/* Meteor Elements */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 100 + 'px',
            height: meteor.size + 'px',
            left: meteor.x + '%',
            top: meteor.y + '%',
            animationDelay: meteor.delay + 's',
            animationDuration: meteor.animationDuration + 's',
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
