import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const dotInnerRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<SVGSVGElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only initialize on desktop
    if (typeof window !== 'undefined' && window.innerWidth < 768) return;

    let animationFrameId: number;
    let targetX = -100;
    let targetY = -100;
    let trailingX = -100;
    let trailingY = -100;
    let isHovering = false;

    const onMouseMove = (e: MouseEvent) => {
      setIsVisible((prev) => {
        if (!prev) return true;
        return prev;
      });
      targetX = e.clientX;
      targetY = e.clientY;
      
      // Update dot instantly, directly via DOM ref to bypass React rendering lag
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'input' ||
        target.closest('button') ||
        target.closest('a');
      
      isHovering = !!isClickable;
      
      if (dotInnerRef.current) {
         dotInnerRef.current.style.transform = `translate(-50%, -50%) scale(${isHovering ? 0 : 1})`;
      }
      
      if (ringRef.current) {
         ringRef.current.style.width = isHovering ? '48px' : '32px';
         ringRef.current.style.height = isHovering ? '48px' : '32px';
         ringRef.current.style.opacity = isHovering ? '0.9' : '0.6';
         
         const polygon = ringRef.current.querySelector('polygon');
         if (polygon) {
           polygon.setAttribute('fill', isHovering ? 'rgba(250, 204, 21, 0.15)' : 'none');
           polygon.setAttribute('stroke-width', isHovering ? '2' : '4');
         }
      }
    };

    const tick = () => {
      // Smooth lerp function for trailing effect
      trailingX += (targetX - trailingX) * 0.25;
      trailingY += (targetY - trailingY) * 0.25;
      
      if (ringRef.current) {
         // Apply transform dynamically without CSS transitions conflicting
         ringRef.current.style.transform = `translate3d(${trailingX}px, ${trailingY}px, 0) translate(-50%, -50%) rotate(${trailingX * 0.2}deg)`;
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('mouseenter', onMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);
    
    // Start animation loop
    tick();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

  return (
    <>
      {/* Position Container (Instantly follows mouse, no transitions on transform) */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        {/* Visual Element (Handles hover scaling) */}
        <div
          ref={dotInnerRef}
          className="w-3 h-3 bg-yellow-400 border-[1.5px] border-black rounded-full shadow-lg transition-transform duration-200 ease-out absolute top-0 left-0"
          style={{ transform: 'translate(-50%, -50%) scale(1)' }}
        />
      </div>
      
      {/* Outer Hexagon */}
      <svg
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)] transition-[width,height,opacity] duration-300 ease-out"
        style={{
          width: '32px',
          height: '32px',
          opacity: isVisible ? 0.6 : 0
        }}
        viewBox="0 0 100 100"
      >
        <polygon 
          className="transition-all duration-300"
          points="50 3 93 28 93 72 50 97 7 72 7 28" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="4" 
        />
      </svg>
    </>
  );
};
