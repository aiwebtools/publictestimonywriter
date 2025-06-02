
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

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Divine color palette
    const divineColors = [
      '#FFD700', // Divine gold
      '#8A2BE2', // Divine purple
      '#4A90E2', // Celestial blue
      '#FF69B4', // Celestial rose
      '#FFFFFF', // Pure white
      '#C0C0C0', // Ethereal silver
    ];

    // Initialize moving stars
    const numStars = 1200;
    const stars: Star[] = [];
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        prevX: 0,
        prevY: 0,
        color: divineColors[Math.floor(Math.random() * divineColors.length)],
        twinkle: Math.random() * Math.PI * 2,
      });
    }
    starsRef.current = stars;

    // Initialize divine static stars
    const numDivineStars = 200;
    const divineStars: DivineStar[] = [];
    for (let i = 0; i < numDivineStars; i++) {
      divineStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: divineColors[Math.floor(Math.random() * divineColors.length)],
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }
    divineStarsRef.current = divineStars;

    // Initialize shooting stars
    const shootingStars: ShootingStar[] = [];
    shootingStarsRef.current = shootingStars;

    const createShootingStar = () => {
      if (Math.random() < 0.008) { // Increased probability for more divine shooting stars
        const color = divineColors[Math.floor(Math.random() * divineColors.length)];
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.6,
          length: Math.random() * 120 + 40,
          speed: Math.random() * 8 + 3,
          opacity: 1,
          angle: Math.random() * 60 + 15,
          color: color,
        });
      }
    };

    const animate = (time: number) => {
      // Divine gradient background effect
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height)
      );
      gradient.addColorStop(0, 'rgba(26, 10, 46, 0.95)');
      gradient.addColorStop(0.3, 'rgba(22, 33, 62, 0.9)');
      gradient.addColorStop(0.6, 'rgba(10, 1, 24, 0.95)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 1)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add divine light rays
      const rayGradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 3, 0,
        canvas.width / 2, canvas.height / 3, Math.max(canvas.width, canvas.height) * 0.8
      );
      rayGradient.addColorStop(0, 'rgba(255, 215, 0, 0.1)');
      rayGradient.addColorStop(0.5, 'rgba(138, 43, 226, 0.05)');
      rayGradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = rayGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw divine static stars with pulsing effect
      divineStars.forEach((star) => {
        star.pulsePhase += 0.02;
        const pulseSize = star.size * (1 + Math.sin(star.pulsePhase) * 0.3);
        const pulseOpacity = star.opacity * (0.7 + Math.sin(star.pulsePhase + Math.PI / 4) * 0.3);
        
        // Main star
        ctx.beginPath();
        ctx.fillStyle = star.color.replace(')', `, ${pulseOpacity})`).replace('rgb', 'rgba');
        ctx.arc(star.x, star.y, pulseSize, 0, Math.PI * 2);
        ctx.fill();
        
        // Divine glow effect
        const glowGradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, pulseSize * 4
        );
        glowGradient.addColorStop(0, star.color.replace(')', `, ${pulseOpacity * 0.8})`).replace('rgb', 'rgba'));
        glowGradient.addColorStop(0.5, star.color.replace(')', `, ${pulseOpacity * 0.3})`).replace('rgb', 'rgba'));
        glowGradient.addColorStop(1, 'transparent');
        
        ctx.beginPath();
        ctx.fillStyle = glowGradient;
        ctx.arc(star.x, star.y, pulseSize * 4, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw moving stars with enhanced effects
      stars.forEach((star) => {
        star.prevX = star.x;
        star.prevY = star.y;
        star.twinkle += 0.05;

        star.z -= 3;
        if (star.z <= 0) {
          star.z = 1000;
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
          star.color = divineColors[Math.floor(Math.random() * divineColors.length)];
        }

        const x = (star.x - canvas.width / 2) * (1000 / star.z) + canvas.width / 2;
        const y = (star.y - canvas.height / 2) * (1000 / star.z) + canvas.height / 2;

        const size = ((1000 - star.z) / 1000) * 2;
        const twinkleOpacity = Math.max(0, Math.min(1, (size * 2) * (0.5 + Math.sin(star.twinkle) * 0.5)));

        if (x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height) {
          // Main star
          ctx.beginPath();
          ctx.fillStyle = star.color.replace(')', `, ${twinkleOpacity})`).replace('rgb', 'rgba');
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();

          // Star trail for faster moving stars
          if (size > 0.8) {
            const trailGradient = ctx.createLinearGradient(star.prevX, star.prevY, x, y);
            trailGradient.addColorStop(0, 'transparent');
            trailGradient.addColorStop(1, star.color.replace(')', `, ${twinkleOpacity * 0.6})`).replace('rgb', 'rgba'));
            
            ctx.beginPath();
            ctx.strokeStyle = trailGradient;
            ctx.lineWidth = size * 0.8;
            ctx.moveTo(star.prevX, star.prevY);
            ctx.lineTo(x, y);
            ctx.stroke();
          }

          // Divine glow effect for larger stars
          if (size > 1) {
            const glowGradient = ctx.createRadialGradient(
              x, y, 0,
              x, y, size * 6
            );
            glowGradient.addColorStop(0, star.color.replace(')', `, ${twinkleOpacity * 0.6})`).replace('rgb', 'rgba'));
            glowGradient.addColorStop(0.5, star.color.replace(')', `, ${twinkleOpacity * 0.2})`).replace('rgb', 'rgba'));
            glowGradient.addColorStop(1, 'transparent');
            
            ctx.beginPath();
            ctx.fillStyle = glowGradient;
            ctx.arc(x, y, size * 6, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        star.x = x;
        star.y = y;
      });

      // Create new shooting stars
      createShootingStar();

      // Draw divine shooting stars
      shootingStars.forEach((shootingStar, index) => {
        const radians = (shootingStar.angle * Math.PI) / 180;
        const endX = shootingStar.x + Math.cos(radians) * shootingStar.length;
        const endY = shootingStar.y + Math.sin(radians) * shootingStar.length;

        // Create divine gradient for shooting star
        const gradient = ctx.createLinearGradient(
          shootingStar.x,
          shootingStar.y,
          endX,
          endY
        );
        gradient.addColorStop(0, shootingStar.color.replace(')', `, ${shootingStar.opacity})`).replace('rgb', 'rgba'));
        gradient.addColorStop(0.3, shootingStar.color.replace(')', `, ${shootingStar.opacity * 0.8})`).replace('rgb', 'rgba'));
        gradient.addColorStop(0.7, shootingStar.color.replace(')', `, ${shootingStar.opacity * 0.4})`).replace('rgb', 'rgba'));
        gradient.addColorStop(1, 'transparent');

        // Main shooting star trail
        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        // Divine glow effect
        ctx.beginPath();
        ctx.strokeStyle = shootingStar.color.replace(')', `, ${shootingStar.opacity * 0.3})`).replace('rgb', 'rgba');
        ctx.lineWidth = 8;
        ctx.lineCap = 'round';
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        // Head glow
        const headGradient = ctx.createRadialGradient(
          shootingStar.x, shootingStar.y, 0,
          shootingStar.x, shootingStar.y, 15
        );
        headGradient.addColorStop(0, shootingStar.color.replace(')', `, ${shootingStar.opacity})`).replace('rgb', 'rgba'));
        headGradient.addColorStop(0.5, shootingStar.color.replace(')', `, ${shootingStar.opacity * 0.5})`).replace('rgb', 'rgba'));
        headGradient.addColorStop(1, 'transparent');
        
        ctx.beginPath();
        ctx.fillStyle = headGradient;
        ctx.arc(shootingStar.x, shootingStar.y, 15, 0, Math.PI * 2);
        ctx.fill();

        // Move shooting star
        shootingStar.x += Math.cos(radians) * shootingStar.speed;
        shootingStar.y += Math.sin(radians) * shootingStar.speed;
        shootingStar.opacity -= 0.008;

        // Remove shooting star if it's off screen or faded
        if (
          shootingStar.opacity <= 0 ||
          shootingStar.x > canvas.width + 200 ||
          shootingStar.y > canvas.height + 200 ||
          shootingStar.x < -200 ||
          shootingStar.y < -200
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
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-10"
        style={{ 
          background: 'radial-gradient(ellipse at center, #1a0a2e 0%, #16213e 25%, #0a0118 50%, #000000 100%)'
        }}
      />
      <div className="divine-rays fixed inset-0 -z-5" />
    </>
  );
};

export default StarField;
