
import { Button } from "@/components/ui/button";

const FooterSection = () => {
  return (
    <footer className="glass mt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Logo Section */}
        <div className="mb-8 text-center">
          <div className="flex flex-col items-center">
            <h2 className="text-xl md:text-2xl font-bold text-white neon-glow tracking-tight mb-2">
              PUBLIC ACTIVISM AI TOOLS
            </h2>
            <p className="text-sm md:text-base text-gray-300 leading-tight">
              Presented by{" "}
              <span 
                className="text-cyberpunk-blue hover:text-cyberpunk-pink cursor-pointer transition-colors duration-200 underline"
                onClick={() => window.location.href = "https://www.aiwebtools.ai"}
              >
                AiWebTools
              </span>
              {" "}- For The People, By the People
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <a href="tel:4758008096" className="block text-gray-300 hover:text-white">(475) 800-8096</a>
            <a href="mailto:Contact@ai-webtools.com" className="block text-gray-300 hover:text-white">Contact@ai-webtools.com</a>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <a href="https://openai.com/policies/privacy-policy" className="block text-gray-300 hover:text-white">Privacy Policy</a>
            <a href="https://aiwebtools.ai/terms-of-services" className="block text-gray-300 hover:text-white">Terms of Service</a>
          </div>
          <div>
            <h3 className="font-bold mb-4">Tools</h3>
            <div className="space-y-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start text-left h-auto py-2 px-3 text-xs bg-transparent border-cyberpunk-blue/30 text-gray-300 hover:bg-cyberpunk-blue/10 hover:text-white hover:border-cyberpunk-blue"
                onClick={() => window.location.href = "https://chatgpt.com/g/g-HEYmgtIzH-testimony-writer-gpt"}
              >
                Public Testimony Writer GPT
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start text-left h-auto py-2 px-3 text-xs bg-transparent border-cyberpunk-blue/30 text-gray-300 hover:bg-cyberpunk-blue/10 hover:text-white hover:border-cyberpunk-blue"
                onClick={() => window.location.href = "https://chatgpt.com/g/g-67531f0471b081919c8dd6f6c0ab8fbc-alex-the-human-public-testimony-writer-gpt"}
              >
                Humanized Louis Testimony Writer
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start text-left h-auto py-2 px-3 text-xs bg-transparent border-cyberpunk-blue/30 text-gray-300 hover:bg-cyberpunk-blue/10 hover:text-white hover:border-cyberpunk-blue"
                onClick={() => window.location.href = "https://legislatorlink.lovable.app/"}
              >
                Contact Local Lawmakers
              </Button>
            </div>
          </div>
          <div className="space-y-3">
            <Button
              className="cyberpunk-button w-full"
              onClick={() => window.location.href = "https://legislationwritergpt.lovable.app/?via=aiwebtools"}
            >
              WRITE YOUR OWN LAWS
            </Button>
            <Button
              className="cyberpunk-button w-full"
              onClick={() => window.location.href = "https://www.aiwebtools.ai"}
            >
              More AI Tools
            </Button>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <a href="https://www.aiwebtools.ai" className="text-gray-300 hover:text-white">
            © 2025 AI WEB TOOLS LLC All rights reserved.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
