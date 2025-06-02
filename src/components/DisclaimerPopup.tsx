
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
      <div className="divine-glass max-w-4xl w-full m-6 p-10 rounded-3xl relative divine-hover">
        <button 
          onClick={() => setIsVisible(false)} 
          className="absolute top-6 right-6 text-divine-silver hover:text-divine-gold transition-colors duration-300 divine-hover"
        >
          <X size={28} />
        </button>
        
        <h2 className="text-4xl font-bold mb-8 divine-neon-glow text-center">Legal Disclaimer</h2>
        
        <div className="mb-10 text-divine-silver space-y-6 max-h-[60vh] overflow-y-auto pr-4 text-lg leading-relaxed">
          <p>
            This tool is designed to assist in crafting public testimonies while maintaining the authenticity of your voice and message. 
            Users are responsible for reviewing and ensuring the accuracy of all content before submission.
          </p>
          <p>
            By using this tool, you acknowledge that all submitted testimonies represent your own personal views and opinions. 
            We do not guarantee specific outcomes from testimony submissions.
          </p>
          <p className="text-divine-gold font-semibold italic text-xl text-center neon-glow">
            For informational, educational, and research purposes only.
          </p>
          <p className="text-xl font-semibold text-divine-celestial">
            Our tool has been featured in news articles: 
          </p>
          <ul className="list-disc pl-8 space-y-4">
            <li>
              <a 
                href="https://dabbin-dad.com/in-the-news/ct-cbd-shop-owners-new-ai-tool-makes-public-testimony-easier-a-brave-new-world/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-divine-gold hover:divine-neon-glow transition-all duration-300 divine-hover"
              >
                Dabbin Dad News - CT CBD Shop Owner's New AI Tool Makes Public Testimony Easier: A Brave New World
              </a>
            </li>
            <li>
              <a 
                href="https://www.ctinsider.com/connecticut/article/chat-gpt-ai-connecticut-testimony-legislature-18690805.php" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-divine-celestial hover:divine-neon-glow transition-all duration-300 divine-hover"
              >
                CT Insider - How AI is helping people testify at the Connecticut Legislature
              </a>
            </li>
          </ul>
          <p className="text-lg text-center">
            By continuing, you agree to our{" "}
            <a 
              href="https://aiwebtools.lovable.app/disclaimers" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-divine-gold hover:divine-neon-glow transition-all duration-300 divine-hover underline font-semibold"
            >
              Terms of Service
            </a>
            .
          </p>
        </div>
        
        <div className="flex flex-col items-center space-y-6">
          <Button 
            className="cyberpunk-button py-6 text-2xl font-extrabold tracking-wider w-full max-w-md"
            onClick={handleAccept}
          >
            <span className="relative z-10 inline-flex items-center">
              <span className="animate-glow">I ACCEPT</span>
            </span>
          </Button>
          <div className="h-1 w-full bg-gradient-to-r from-divine-celestial via-divine-gold to-divine-purple rounded-full animate-divine-gradient" />
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
