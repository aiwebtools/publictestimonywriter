
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
      description: "Thank you for accepting the disclaimer.",
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70">
      <div className="glass max-w-2xl w-full m-4 p-6 rounded-lg relative">
        <button 
          onClick={() => setIsVisible(false)} 
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
        >
          <X size={20} />
        </button>
        
        <h2 className="text-2xl font-bold mb-4 neon-glow">Legal Disclaimer</h2>
        
        <div className="mb-6 text-gray-300 space-y-4 max-h-[60vh] overflow-y-auto pr-2">
          <p>
            This tool is designed to assist in crafting public testimonies while maintaining the authenticity of your voice and message. 
            Users are responsible for reviewing and ensuring the accuracy of all content before submission.
          </p>
          <p>
            By using this tool, you acknowledge that all submitted testimonies represent your own personal views and opinions. 
            We do not guarantee specific outcomes from testimony submissions.
          </p>
          <p className="text-sm text-gray-400 italic">
            For informational, educational, and research purposes only.
          </p>
          <p>
            Our tool has been featured in news articles: 
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <a 
                href="https://dabbin-dad.com/in-the-news/ct-cbd-shop-owners-new-ai-tool-makes-public-testimony-easier-a-brave-new-world/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyberpunk-blue hover:underline"
              >
                Dabbin Dad News - CT CBD Shop Owner's New AI Tool Makes Public Testimony Easier: A Brave New World
              </a>
            </li>
            <li>
              <a 
                href="https://www.ctinsider.com/connecticut/article/chat-gpt-ai-connecticut-testimony-legislature-18690805.php" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyberpunk-blue hover:underline"
              >
                CT Insider - How AI is helping people testify at the Connecticut Legislature
              </a>
            </li>
          </ul>
          <p className="text-sm">
            By continuing, you agree to our{" "}
            <a 
              href="https://aiwebtools.lovable.app/disclaimers" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyberpunk-blue hover:underline"
            >
              Terms of Service
            </a>
            .
          </p>
        </div>
        
        <div className="flex flex-col">
          <Button 
            className="relative overflow-hidden group py-4 text-lg font-bold tracking-wider bg-gradient-to-r from-cyberpunk-pink to-cyberpunk-blue rounded-md hover:shadow-lg hover:shadow-cyberpunk-blue/30 transition-all duration-300 hover:scale-105"
            onClick={handleAccept}
          >
            <span className="relative z-10 inline-flex items-center">
              <span className="animate-glow">I AGREE</span>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-cyberpunk-blue to-cyberpunk-pink opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-md"></span>
          </Button>
          <div className="h-[2px] w-full bg-gradient-to-r from-cyberpunk-blue via-cyberpunk-cyan to-cyberpunk-pink mt-2 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
