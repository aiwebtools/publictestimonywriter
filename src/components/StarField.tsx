
import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  prevX: number;
  prevY: number;
  color: string;
  twinkle: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  angle: number;
  color: string;
}

interface DivineStar {
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
  pulsePhase: number;
}

const StarField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const starsRef = useRef<Star[]>([]);
  const shootingStarsRef = useRef<ShootingStar[]>([]);
  const divineStarsRef = useRef<DivineStar[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Optimize canvas settings
    ctx.imageSmoothingEnabled = false;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // Limit DPR for performance
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Reduced color palette for better performance
    const colors = ['#FFD700', '#8A2BE2', '#4A90E2', '#FFFFFF'];

    // Reduced number of stars for better performance
    const numStars = 600; // Reduced from 1200
    const stars: Star[] = [];
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        z: Math.random() * 1000,
        prevX: 0,
        prevY: 0,
        color: colors[Math.floor(Math.random() * colors.length)],
        twinkle: Math.random() * Math.PI * 2,
      });
    }
    starsRef.current = stars;

    // Reduced divine stars
    const numDivineStars = 50; // Reduced from 200
    const divineStars: DivineStar[] = [];
    for (let i = 0; i < numDivineStars; i++) {
      divineStars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.6 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }
    divineStarsRef.current = divineStars;

    const shootingStars: ShootingStar[] = [];
    shootingStarsRef.current = shootingStars;

    const createShootingStar = () => {
      if (Math.random() < 0.003 && shootingStars.length < 3) { // Reduced frequency and limit
        shootingStars.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight * 0.6,
          length: Math.random() * 80 + 30,
          speed: Math.random() * 6 + 2,
          opacity: 1,
          angle: Math.random() * 60 + 15,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    let lastTime = 0;
    const targetFPS = 60;
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime: number) => {
      // Frame rate limiting
      if (currentTime - lastTime < frameInterval) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastTime = currentTime;

      // Clear canvas efficiently
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Simplified background
      const gradient = ctx.createRadialGradient(
        window.innerWidth / 2, window.innerHeight / 2, 0,
        window.innerWidth / 2, window.innerHeight / 2, Math.max(window.innerWidth, window.innerHeight) / 2
      );
      gradient.addColorStop(0, 'rgba(26, 10, 46, 0.8)');
      gradient.addColorStop(1, 'rgba(10, 1, 24, 1)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      // Draw divine static stars with simplified effects
      divineStars.forEach((star) => {
        star.pulsePhase += 0.01; // Reduced animation speed
        const pulseSize = star.size * (1 + Math.sin(star.pulsePhase) * 0.2);
        
        ctx.beginPath();
        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.opacity * (0.8 + Math.sin(star.pulsePhase) * 0.2);
        ctx.arc(star.x, star.y, pulseSize, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // Draw moving stars with simplified effects
      stars.forEach((star) => {
        star.prevX = star.x;
        star.prevY = star.y;
        star.twinkle += 0.02; // Reduced animation speed

        star.z -= 2; // Reduced speed
        if (star.z <= 0) {
          star.z = 1000;
          star.x = Math.random() * window.innerWidth;
          star.y = Math.random() * window.innerHeight;
        }

        const x = (star.x - window.innerWidth / 2) * (1000 / star.z) + window.innerWidth / 2;
        const y = (star.y - window.innerHeight / 2) * (1000 / star.z) + window.innerHeight / 2;

        const size = ((1000 - star.z) / 1000) * 1.5;
        const opacity = Math.max(0, Math.min(1, size * (0.7 + Math.sin(star.twinkle) * 0.3)));

        if (x >= -10 && x <= window.innerWidth + 10 && y >= -10 && y <= window.innerHeight + 10 && opacity > 0.1) {
          ctx.beginPath();
          ctx.fillStyle = star.color;
          ctx.globalAlpha = opacity;
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalAlpha = 1;
        }

        star.x = x;
        star.y = y;
      });

      // Create and draw shooting stars with simplified effects
      createShootingStar();

      shootingStars.forEach((shootingStar, index) => {
        const radians = (shootingStar.angle * Math.PI) / 180;
        const endX = shootingStar.x + Math.cos(radians) * shootingStar.length;
        const endY = shootingStar.y + Math.sin(radians) * shootingStar.length;

        // Simplified shooting star
        ctx.beginPath();
        ctx.strokeStyle = shootingStar.color;
        ctx.globalAlpha = shootingStar.opacity;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        ctx.globalAlpha = 1;

        // Move shooting star
        shootingStar.x += Math.cos(radians) * shootingStar.speed;
        shootingStar.y += Math.sin(radians) * shootingStar.speed;
        shootingStar.opacity -= 0.01;

        // Remove shooting star if it's off screen or faded
        if (
          shootingStar.opacity <= 0 ||
          shootingStar.x > window.innerWidth + 100 ||
          shootingStar.y > window.innerHeight + 100 ||
          shootingStar.x < -100 ||
          shootingStar.y < -100
        ) {
          shootingStars.splice(index, 1);
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ 
        background: 'linear-gradient(135deg, #1a0a2e 0%, #16213e 50%, #0a0118 100%)'
      }}
    />
  );
};

export default StarField;
