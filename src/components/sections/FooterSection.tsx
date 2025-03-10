
import { Button } from "@/components/ui/button";

const FooterSection = () => {
  return (
    <footer className="glass mt-20">
      <div className="container mx-auto px-4 py-8">
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
            <a href="https://chatgpt.com/g/g-HEYmgtIzH-testimony-writer-gpt" className="block text-gray-300 hover:text-white">Public Testimony Writer GPT</a>
            <a href="https://chatgpt.com/g/g-67531f0471b081919c8dd6f6c0ab8fbc-alex-the-human-public-testimony-writer-gpt" className="block text-gray-300 hover:text-white">Humanized Louis Testimony Writer</a>
            <a href="https://legislatorlink.lovable.app/" className="block text-gray-300 hover:text-white">Contact Local Lawmakers</a>
          </div>
          <div>
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
