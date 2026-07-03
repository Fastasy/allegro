import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPosition, setTrailingPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only initialize on desktop
    if (window.innerWidth < 768) return;

    let animationFrameId: number;
    let targetX = -100;
    let targetY = -100;

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const tick = () => {
      setTrailingPosition((prev) => {
        const dx = targetX - prev.x;
        const dy = targetY - prev.y;
        return {
          x: prev.x + dx * 0.25,
          y: prev.y + dy * 0.25,
        };
      });
      animationFrameId = requestAnimationFrame(tick);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'input' ||
        target.closest('button') ||
        target.closest('a');
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('mouseenter', onMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);
    tick();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

  return (
    <>
      {/* Inner Dot - Yellow/Black Bee body */}
      <div
        className="fixed top-0 left-0 w-3 h-3 bg-yellow-400 border-[1.5px] border-black rounded-full pointer-events-none z-[9999] transition-transform duration-75 ease-out shadow-lg"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: `translate3d(${position.x - 6}px, ${position.y - 6}px, 0) scale(${isHovering ? 0 : 1})`,
        }}
      />
      
      {/* Outer Shape - Honeycomb Hexagon */}
      <svg
        className="fixed top-0 left-0 pointer-events-none z-[9998] text-yellow-400 transition-all duration-300 ease-out drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]"
        style={{
          width: isHovering ? '48px' : '32px',
          height: isHovering ? '48px' : '32px',
          opacity: isVisible ? (isHovering ? 0.9 : 0.6) : 0,
          transform: `translate3d(${trailingPosition.x - (isHovering ? 24 : 16)}px, ${trailingPosition.y - (isHovering ? 24 : 16)}px, 0) rotate(${trailingPosition.x * 0.2}deg)`,
        }}
        viewBox="0 0 100 100"
      >
        <polygon 
          points="50 3 93 28 93 72 50 97 7 72 7 28" 
          fill={isHovering ? 'rgba(250, 204, 21, 0.15)' : 'none'} 
          stroke="currentColor" 
          strokeWidth={isHovering ? "2" : "4"} 
        />
      </svg>
    </>
  );
};
