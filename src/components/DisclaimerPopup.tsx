
import { useState, useEffect } from "react";
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
          <p>
            Our tool was recently featured in this news article: 
            <a 
              href="https://dabbin-dad.com/in-the-news/ct-cbd-shop-owners-new-ai-tool-makes-public-testimony-easier-a-brave-new-world/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyberpunk-blue hover:underline ml-1"
            >
              CT CBD Shop Owner's New AI Tool Makes Public Testimony Easier: A Brave New World
            </a>
          </p>
        </div>
        
        <Button className="cyberpunk-button w-full" onClick={handleAccept}>
          I AGREE
        </Button>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
