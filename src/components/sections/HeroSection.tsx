
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-float neon-glow">
            Public Testimony Writer GPT
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Craft Powerful, Human-Centered Testimonies That Leave a Legacy.
            Turn your ideas into impactful public statements that move hearts, influence policy, and echo for generations.
            Your Voice. Your Words. Our Future. — WE THE PEOPLE
          </p>
          <div className="flex justify-center gap-4">
            <Button
              className="px-4 py-4 md:px-12 md:py-6 text-sm md:text-xl font-bold rounded-full bg-gradient-to-r from-cyberpunk-pink via-cyberpunk-blue to-cyberpunk-cyan 
                         text-white transition-all duration-300 hover:scale-110 hover:shadow-2xl 
                         animate-pulse shadow-lg shadow-cyberpunk-blue/30
                         hover:shadow-cyberpunk-pink/50 hover:from-cyberpunk-cyan hover:via-cyberpunk-pink hover:to-cyberpunk-blue
                         active:scale-95 transform-gpu backdrop-blur-sm border border-white/20
                         before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r 
                         before:from-cyberpunk-pink/20 before:to-cyberpunk-blue/20 before:animate-ping before:duration-1000
                         relative overflow-hidden group max-w-[90vw] whitespace-normal text-center leading-tight"
              onClick={() => window.location.href = "https://chatgpt.com/g/g-HEYmgtIzH-testimony-writer-gpt"}
            >
              <span className="relative z-10 group-hover:text-shadow-glow break-words">
                <span className="hidden md:inline">WRITE YOUR PUBLIC TESTIMONY - LET YOUR VOICE BE HEARD</span>
                <span className="md:hidden">WRITE YOUR PUBLIC TESTIMONY</span>
              </span>
            </Button>
            <Button
              variant="outline"
              className="glass hover:bg-white/20"
              onClick={() => window.location.href = "#how-it-works"}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
