import React, { useEffect, useRef } from 'react';

const SnakeCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Physics parameters
  const pointer = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const segments = useRef<{ x: number; y: number }[]>([]);
  // Longer snake for better fluid effect
  const numSegments = 45; 
  
  useEffect(() => {
    // Initialize segments
    for (let i = 0; i < numSegments; i++) {
      segments.current.push({ x: 0, y: 0 });
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      pointer.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    handleResize();

    const render = () => {
      // Clear canvas with a very slight fade for motion blur effect (optional, currently using clearRect for crispness)
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Move head towards pointer with "ease-out" feel
      const head = segments.current[0];
      const dx = pointer.current.x - head.x;
      const dy = pointer.current.y - head.y;
      
      head.x += dx * 0.12;
      head.y += dy * 0.12;

      // Move body segments - fluid constraint
      for (let i = 1; i < segments.current.length; i++) {
        const currentSegment = segments.current[i];
        const prevSegment = segments.current[i - 1];
        
        const distanceX = prevSegment.x - currentSegment.x;
        const distanceY = prevSegment.y - currentSegment.y;
        
        // Follow smoothly
        currentSegment.x += distanceX * 0.25;
        currentSegment.y += distanceY * 0.25;
      }

      // Draw the snake
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      // Draw the white glow
      ctx.shadowBlur = 20;
      ctx.shadowColor = 'rgba(255, 255, 255, 0.6)';

      ctx.beginPath();
      ctx.moveTo(segments.current[0].x, segments.current[0].y);

      for (let i = 1; i < segments.current.length; i++) {
         const p0 = segments.current[i - 1];
         const p1 = segments.current[i];
         const xc = (p0.x + p1.x) / 2;
         const yc = (p0.y + p1.y) / 2;
         ctx.quadraticCurveTo(p0.x, p0.y, xc, yc);
      }
      ctx.lineTo(segments.current[segments.current.length - 1].x, segments.current[segments.current.length - 1].y);

      // Gradient for the body: Solid white to transparent
      const gradient = ctx.createLinearGradient(
        segments.current[0].x, 
        segments.current[0].y, 
        segments.current[segments.current.length - 1].x, 
        segments.current[segments.current.length - 1].y
      );
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.5)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      
      ctx.strokeStyle = gradient;
      
      // Dynamic width based on speed or just tapering
      ctx.lineWidth = 3;
      ctx.stroke();

      // Draw a glowing head
      ctx.beginPath();
      ctx.arc(segments.current[0].x, segments.current[0].y, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      id="snake-canvas"
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999] mix-blend-exclusion"
    />
  );
};

export default SnakeCursor;