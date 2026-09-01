import React, { useRef, useState } from 'react';

export const TiltCard = ({ 
  children, 
  className = '', 
  maxTilt = 10, 
  perspective = 1000, 
  glow = true,
  glowColor = 'rgba(99, 102, 241, 0.25)',
  ...props 
}) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const percentX = (mouseX / width) * 100;
    const percentY = (mouseY / height) * 100;
    setMousePos({ x: percentX, y: percentY });

    const tiltY = ((mouseX - width / 2) / (width / 2)) * maxTilt;
    const tiltX = -((mouseY - height / 2) / (height / 2)) * maxTilt;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card-container ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: `${perspective}px`,
        transformStyle: 'preserve-3d',
      }}
      {...props}
    >
      <div
        className="tilt-card-inner"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          position: 'relative',
          height: '100%',
          width: '100%'
        }}
      >
        {glow && (
          <div
            className="tilt-card-glow"
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: 'inherit',
              background: `radial-gradient(circle 300px at ${mousePos.x}% ${mousePos.y}%, ${glowColor}, transparent 80%)`,
              opacity: isHovered ? 1 : 0,
              transition: 'opacity 0.3s ease',
              pointerEvents: 'none',
              zIndex: 1
            }}
          />
        )}
        <div style={{ position: 'relative', zIndex: 2, height: '100%' }}>
          {children}
        </div>
      </div>
    </div>
  );
};
