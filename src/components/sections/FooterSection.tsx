
import { Button } from "@/components/ui/button";

const FooterSection = () => {
  return (
    <footer className="divine-glass mt-32" itemScope itemType="https://schema.org/Organization">
      <div className="container mx-auto px-4 py-16">
        {/* Logo Section */}
        <div className="mb-16 text-center">
          <div className="flex flex-col items-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-divine-gold divine-neon-glow tracking-tight" itemProp="name">
              AI WEB TOOLS - FREE AI TOOLS
            </h2>
            <p className="text-lg md:text-xl text-divine-silver leading-tight max-w-2xl" itemProp="description">
              Presented by{" "}
              <span 
                className="text-divine-celestial hover:text-divine-gold cursor-pointer transition-colors duration-300 underline font-semibold divine-hover"
                onClick={() => window.location.href = "https://www.aiwebtools.ai"}
                itemProp="url"
              >
                AiWebTools.ai
              </span>
              {" "}- For The People, By the People. Free artificial intelligence tools for civic engagement and public participation.
            </p>
            <p className="text-sm text-divine-silver/80 mt-4 italic">
              Informational, educational, and research purposes only.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4" itemScope itemType="https://schema.org/ContactPoint">
            <h3 className="font-bold mb-6 text-divine-gold text-xl">Contact</h3>
            <a href="tel:4758008096" className="block text-divine-silver hover:text-divine-gold transition-colors duration-300 text-lg divine-hover" itemProp="telephone">(475) 800-8096</a>
            <a href="mailto:Contact@ai-webtools.com" className="block text-divine-silver hover:text-divine-gold transition-colors duration-300 text-lg divine-hover" itemProp="email">Contact@ai-webtools.com</a>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold mb-6 text-divine-gold text-xl">Legal</h3>
            <a href="https://openai.com/policies/privacy-policy" className="block text-divine-silver hover:text-divine-gold transition-colors duration-300 text-lg divine-hover">Privacy Policy</a>
            <a href="https://aiwebtools.lovable.app/disclaimers" className="block text-divine-silver hover:text-divine-gold transition-colors duration-300 text-lg divine-hover">Terms of Service</a>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold mb-6 text-divine-gold text-xl">Free AI Tools</h3>
            <div className="space-y-4">
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start text-left h-auto py-4 px-4 text-sm bg-transparent border-divine-gold/40 text-divine-silver hover:bg-divine-gold/10 hover:text-divine-gold hover:border-divine-gold divine-hover transition-all duration-300"
                onClick={() => window.location.href = "https://chatgpt.com/g/g-HEYmgtIzH-testimony-writer-gpt"}
                aria-label="Free Public Testimony Writer GPT Tool"
              >
                Public Testimony Writer GPT
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start text-left h-auto py-4 px-4 text-sm bg-transparent border-divine-purple/40 text-divine-silver hover:bg-divine-purple/10 hover:text-divine-purple hover:border-divine-purple divine-hover transition-all duration-300"
                onClick={() => window.location.href = "https://chatgpt.com/g/g-67531f0471b081919c8dd6f6c0ab8fbc-alex-the-human-public-testimony-writer-gpt"}
                aria-label="Free Humanized AI Testimony Writer"
              >
                Humanized Special Version ✨
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start text-left h-auto py-4 px-4 text-sm bg-transparent border-divine-celestial/40 text-divine-silver hover:bg-divine-celestial/10 hover:text-divine-celestial hover:border-divine-celestial divine-hover transition-all duration-300"
                onClick={() => window.location.href = "https://legislatorlink.lovable.app/"}
                aria-label="Free Contact Local Lawmakers Tool"
              >
                Contact Local Lawmakers
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start text-left h-auto py-4 px-4 text-sm bg-transparent border-divine-rose/40 text-divine-silver hover:bg-divine-rose/10 hover:text-divine-rose hover:border-divine-rose divine-hover transition-all duration-300"
                onClick={() => window.location.href = "https://legislationwritergpt.lovable.app/?via=aiwebtools"}
                aria-label="Free AI Legislation Writer Tool"
              >
                Write Your Own Laws
              </Button>
            </div>
          </div>
          <div className="space-y-6">
            <Button
              className="cyberpunk-button w-full text-lg py-6"
              onClick={() => window.location.href = "https://www.aiwebtools.ai"}
              aria-label="Discover More Free AI Tools"
            >
              More Free AI Tools
            </Button>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-divine-gold/30 text-center">
          <a href="https://www.aiwebtools.ai" className="text-divine-silver hover:text-divine-gold transition-colors duration-300 text-lg divine-hover" itemProp="copyrightHolder">
            © 2025 AI WEB TOOLS LLC All rights reserved.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
