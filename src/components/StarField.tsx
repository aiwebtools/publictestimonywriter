
import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  prevX: number;
  prevY: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  angle: number;
}

const StarField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const starsRef = useRef<Star[]>([]);
  const shootingStarsRef = useRef<ShootingStar[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize stars
    const numStars = 800;
    const stars: Star[] = [];
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        prevX: 0,
        prevY: 0,
      });
    }
    starsRef.current = stars;

    // Initialize shooting stars
    const shootingStars: ShootingStar[] = [];
    shootingStarsRef.current = shootingStars;

    const createShootingStar = () => {
      if (Math.random() < 0.003) { // Low probability for shooting stars
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.5, // Upper half of screen
          length: Math.random() * 80 + 20,
          speed: Math.random() * 6 + 2,
          opacity: 1,
          angle: Math.random() * 60 + 15, // 15-75 degrees
        });
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw moving stars
      stars.forEach((star) => {
        star.prevX = star.x;
        star.prevY = star.y;

        star.z -= 2;
        if (star.z <= 0) {
          star.z = 1000;
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
        }

        const x = (star.x - canvas.width / 2) * (1000 / star.z) + canvas.width / 2;
        const y = (star.y - canvas.height / 2) * (1000 / star.z) + canvas.height / 2;

        const size = (1000 - star.z) / 1000;
        const opacity = Math.max(0, Math.min(1, size * 2));

        if (x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height) {
          ctx.beginPath();
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();

          // Draw star trail for faster moving stars
          if (size > 0.5) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.5})`;
            ctx.lineWidth = size * 0.5;
            ctx.moveTo(star.prevX, star.prevY);
            ctx.lineTo(x, y);
            ctx.stroke();
          }
        }

        star.x = x;
        star.y = y;
      });

      // Create new shooting stars
      createShootingStar();

      // Draw shooting stars
      shootingStars.forEach((shootingStar, index) => {
        const radians = (shootingStar.angle * Math.PI) / 180;
        const endX = shootingStar.x + Math.cos(radians) * shootingStar.length;
        const endY = shootingStar.y + Math.sin(radians) * shootingStar.length;

        const gradient = ctx.createLinearGradient(
          shootingStar.x,
          shootingStar.y,
          endX,
          endY
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${shootingStar.opacity})`);
        gradient.addColorStop(0.5, `rgba(100, 200, 255, ${shootingStar.opacity * 0.8})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        // Move shooting star
        shootingStar.x += Math.cos(radians) * shootingStar.speed;
        shootingStar.y += Math.sin(radians) * shootingStar.speed;
        shootingStar.opacity -= 0.01;

        // Remove shooting star if it's off screen or faded
        if (
          shootingStar.opacity <= 0 ||
          shootingStar.x > canvas.width + 100 ||
          shootingStar.y > canvas.height + 100
        ) {
          shootingStars.splice(index, 1);
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

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
      style={{ background: 'linear-gradient(to bottom, #000000, #0a0a0a, #1a1a1a)' }}
    />
  );
};

export default StarField;
