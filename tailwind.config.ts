
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        divine: {
          dark: "#0a0118", // Deep cosmic purple-black
          gold: "#FFD700", // Pure divine gold
          celestial: "#4A90E2", // Heavenly blue
          purple: "#8A2BE2", // Divine purple
          rose: "#FF69B4", // Celestial rose
          white: "#FFFFFF", // Pure divine white
          silver: "#C0C0C0", // Ethereal silver
          cosmic: "#1a0a2e", // Deep cosmic background
          ethereal: "#16213e", // Ethereal blue-purple
        },
        cyberpunk: {
          dark: "#0a0118",
          blue: "#4A90E2",
          pink: "#FF69B4",
          cyan: "#00FFFF",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-30px) scale(1.05)' },
        },
        glow: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.6), 0 0 60px rgba(255, 215, 0, 0.4)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 30px rgba(255, 215, 0, 1), 0 0 60px rgba(255, 215, 0, 0.8), 0 0 90px rgba(255, 215, 0, 0.6)' },
        },
        'divine-pulse': {
          '0%, 100%': { 
            transform: 'scale(1)',
            boxShadow: '0 0 20px rgba(255, 215, 0, 0.5), 0 0 40px rgba(138, 43, 226, 0.3), 0 0 60px rgba(74, 144, 226, 0.2)'
          },
          '50%': { 
            transform: 'scale(1.05)',
            boxShadow: '0 0 40px rgba(255, 215, 0, 0.8), 0 0 80px rgba(138, 43, 226, 0.6), 0 0 120px rgba(74, 144, 226, 0.4)'
          },
        },
        'divine-shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'celestial-rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'holy-float': {
          '0%, 100%': { 
            transform: 'translateY(0) translateX(0) rotate(0deg)',
            opacity: '0.8'
          },
          '33%': { 
            transform: 'translateY(-20px) translateX(10px) rotate(2deg)',
            opacity: '1'
          },
          '66%': { 
            transform: 'translateY(-10px) translateX(-5px) rotate(-1deg)',
            opacity: '0.9'
          },
        },
        'divine-gradient': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        ping: {
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: '0',
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 8s ease-in-out infinite",
        "glow": "glow 3s ease-in-out infinite",
        "divine-pulse": "divine-pulse 4s ease-in-out infinite",
        "divine-shimmer": "divine-shimmer 3s linear infinite",
        "celestial-rotate": "celestial-rotate 20s linear infinite",
        "holy-float": "holy-float 12s ease-in-out infinite",
        "divine-gradient": "divine-gradient 8s ease infinite",
        "ping": "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      backdropBlur: {
        'xs': '2px',
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'normal': '0',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
      },
      backgroundSize: {
        '300%': '300%',
        '400%': '400%',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
