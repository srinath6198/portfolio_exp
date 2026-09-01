import React, { useEffect, useRef, useState } from 'react';
import './CustomCursor.scss';

export const CustomCursor = () => {
  const cursorRef = useRef(null);
  const trailCanvasRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouse = useRef({ x: -100, y: -100 });
  const pos = useRef({ x: -100, y: -100 });
  const particles = useRef([]);
  const animId = useRef(null);

  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isTouch) {
      setIsTouchDevice(true);
      return;
    }

    const canvas = trailCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const onMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };

      // Spawn stardust sparkle particle on movement
      if (Math.random() > 0.4) {
        particles.current.push({
          x: e.clientX + (Math.random() - 0.5) * 6,
          y: e.clientY + (Math.random() - 0.5) * 6,
          size: Math.random() * 2.2 + 1.2,
          alpha: 0.8,
          speedX: (Math.random() - 0.5) * 1.2,
          speedY: (Math.random() - 0.5) * 1.2,
          color: '#121316'
        });
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    const onMouseOver = (e) => {
      const target = e.target;
      const interactiveEl = target.closest('a, button, input, textarea, [role="button"], .project-editorial-card, .disclosure-accordion-row, .philosophy-pillar-card');
      setIsHovered(!!interactiveEl);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', onMouseOver, { passive: true });

    // Animation Loop
    const render = () => {
      // Smooth star follower physics
      const ease = 0.25;
      pos.current.x += (mouse.current.x - pos.current.x) * ease;
      pos.current.y += (mouse.current.y - pos.current.y) * ease;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      // Draw stardust particle trail on canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.current.length; i++) {
        const p = particles.current[i];
        p.x += p.speedX;
        p.y += p.speedY;
        p.alpha -= 0.035;

        if (p.alpha <= 0) {
          particles.current.splice(i, 1);
          i--;
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animId.current = requestAnimationFrame(render);
    };

    animId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', onMouseOver);
      if (animId.current) cancelAnimationFrame(animId.current);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* 60fps Stardust Trail Canvas */}
      <canvas ref={trailCanvasRef} className="cursor-stardust-canvas" />

      {/* Glowing Star Sparkle Symbol */}
      <div 
        ref={cursorRef} 
        className={`celestial-star-cursor ${isHovered ? 'hovered' : ''} ${isClicked ? 'clicked' : ''}`}
      >
        <span className="star-symbol">✦</span>
      </div>
    </>
  );
};

export default CustomCursor;
