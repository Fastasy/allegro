import React, { useEffect, useState } from 'react';

interface HoneycombItem {
  size: number;
  left: number;
  delay: number;
  duration: number;
  opacity: number;
}

export const AnimatedBackground: React.FC = () => {
  const [honeycombs, setHoneycombs] = useState<HoneycombItem[]>([]);

  useEffect(() => {
    // Generate random honeycombs only on the client post-mount
    const items = Array.from({ length: 15 }).map((_, i) => {
      const size = Math.random() * 60 + 30; // 30px to 90px
      const left = Math.random() * 100; // 0% to 100%
      const delay = Math.random() * 20; // 0s to 20s
      const duration = Math.random() * 30 + 40; // 40s to 70s
      const opacity = Math.random() * 0.15 + 0.1; // Much more visible: 0.1 to 0.25

      return { size, left, delay, duration, opacity };
    });
    setHoneycombs(items);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full z-[-10] overflow-hidden bg-black pointer-events-none">
      {/* Dark gradient overlay so the top/bottom fade out */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-[-9] opacity-90" />
      
      {honeycombs.map((item, i) => (
        <svg
          key={i}
          className="absolute animate-drift text-yellow-400 pointer-events-none z-[1]"
          style={{
            width: `${item.size}px`,
            height: `${item.size}px`,
            left: `${item.left}vw`,
            bottom: '-150px',
            opacity: item.opacity,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
          }}
          viewBox="0 0 100 100"
        >
          <polygon 
            points="50 3 93 28 93 72 50 97 7 72 7 28" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
          />
        </svg>
      ))}
    </div>
  );
};
