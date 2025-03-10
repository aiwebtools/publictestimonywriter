
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
            Create powerful, human-like public testimonies that make an impact
          </p>
          <div className="flex justify-center gap-4">
            <Button
              className="cyberpunk-button"
              onClick={() => window.location.href = "https://chatgpt.com/g/g-HEYmgtIzH-testimony-writer-gpt"}
            >
              Start Writing
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
