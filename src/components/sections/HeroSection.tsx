
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-20 pb-32 relative" itemScope itemType="https://schema.org/SoftwareApplication">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-float divine-neon-glow leading-tight" itemProp="name">
            Public Testimony Writer GPT
          </h1>
          <h2 className="text-2xl md:text-3xl mb-12 text-divine-silver leading-relaxed max-w-4xl mx-auto" itemProp="description">
            Craft Powerful, Human-Centered Testimonies That Leave a Legacy.
            Turn your ideas into impactful public statements that move hearts, influence policy, and echo for generations with our free AI tools.
            <span className="block mt-6 text-divine-gold font-semibold divine-neon-glow">
              Your Voice. Your Words. Our Future. — WE THE PEOPLE
            </span>
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
            <Button
              className="px-8 py-8 md:px-16 md:py-8 text-lg md:text-2xl font-bold rounded-3xl 
                         bg-gradient-to-r from-divine-gold via-divine-purple to-divine-celestial 
                         text-divine-dark transition-all duration-700 hover:scale-125 
                         shadow-2xl hover:shadow-divine-gold/50 relative overflow-hidden
                         divine-hover max-w-[90vw] whitespace-normal text-center leading-tight
                         animate-divine-pulse"
              onClick={() => window.location.href = "https://chatgpt.com/g/g-HEYmgtIzH-testimony-writer-gpt"}
              aria-label="Access Free AI Public Testimony Writer Tool"
            >
              <span className="relative z-10 font-extrabold tracking-wide">
                <span className="hidden md:inline">WRITE YOUR PUBLIC TESTIMONY - LET YOUR VOICE BE HEARD</span>
                <span className="md:hidden">WRITE YOUR PUBLIC TESTIMONY</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-divine-celestial via-divine-gold to-divine-purple opacity-0 hover:opacity-100 transition-opacity duration-700 rounded-3xl animate-divine-gradient" />
            </Button>
            <Button
              variant="outline"
              className="divine-glass hover:bg-divine-gold/20 text-divine-gold border-divine-gold/50 
                         px-8 py-6 text-lg rounded-2xl font-semibold divine-hover
                         hover:shadow-lg hover:shadow-divine-gold/30 transition-all duration-500"
              onClick={() => window.location.href = "#how-it-works"}
              aria-label="Learn how our AI tools work"
            >
              Learn How It Works
            </Button>
          </div>
          
          {/* SEO-friendly keywords section */}
          <div className="sr-only">
            AI tools, free AI tools, AI web tools, public testimony writer, GPT tools, artificial intelligence tools, 
            civic engagement AI, legislation writer, AI testimony generator, ChatGPT tools, free GPT tools, 
            AI writing tools, public speaking AI, government testimony AI, civic participation tools
          </div>
          
          {/* Particle effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-divine-gold rounded-full opacity-60 animate-holy-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 15}s`,
                  animationDuration: `${15 + Math.random() * 10}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
