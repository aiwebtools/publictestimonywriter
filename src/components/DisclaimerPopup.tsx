
import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface DisclaimerPopupProps {
  onAccept: () => void;
}

const DisclaimerPopup = ({ onAccept }: DisclaimerPopupProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    localStorage.setItem("disclaimer-accepted", "true");
    setIsVisible(false);
    onAccept();
    toast({
      title: "Welcome!",
      description: "Thank you for accepting the disclaimer. Your voice matters.",
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="divine-glass max-w-md w-full m-4 p-5 rounded-2xl relative">
        <button 
          onClick={() => setIsVisible(false)} 
          className="absolute top-3 right-3 text-divine-silver hover:text-divine-gold transition-colors duration-300"
        >
          <X size={18} />
        </button>
        
        <h2 className="text-xl font-bold mb-3 divine-neon-glow text-center">Legal Disclaimer</h2>
        
        <div className="mb-4 text-divine-silver space-y-2 max-h-[40vh] overflow-y-auto pr-2 text-xs leading-relaxed">
          <p>
            This tool assists in crafting public testimonies. Users are responsible for reviewing all content before submission.
          </p>
          <p>
            All submitted testimonies represent your own personal views. We do not guarantee specific outcomes.
          </p>
          <p className="text-divine-gold font-semibold italic text-sm text-center neon-glow">
            For informational, educational, and research purposes only.
          </p>
          <p className="text-sm font-semibold text-divine-celestial">Featured in:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <a href="https://dabbin-dad.com/in-the-news/ct-cbd-shop-owners-new-ai-tool-makes-public-testimony-easier-a-brave-new-world/" target="_blank" rel="noopener noreferrer" className="text-divine-gold hover:underline">
                Dabbin Dad News
              </a>
            </li>
            <li>
              <a href="https://www.ctinsider.com/connecticut/article/chat-gpt-ai-connecticut-testimony-legislature-18690805.php" target="_blank" rel="noopener noreferrer" className="text-divine-celestial hover:underline">
                CT Insider
              </a>
            </li>
          </ul>
          <p className="text-xs text-center">
            By continuing, you agree to our{" "}
            <a href="https://aiwebtools.lovable.app/disclaimers" target="_blank" rel="noopener noreferrer" className="text-divine-gold underline font-semibold">
              Terms of Service
            </a>.
          </p>
        </div>
        
        <div className="flex flex-col items-center space-y-3">
          <Button 
            className="cyberpunk-button py-3 text-sm font-bold tracking-wider w-full max-w-xs"
            onClick={handleAccept}
          >
            <span className="relative z-10">I ACCEPT</span>
          </Button>
          <div className="h-0.5 w-full bg-gradient-to-r from-divine-celestial via-divine-gold to-divine-purple rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
