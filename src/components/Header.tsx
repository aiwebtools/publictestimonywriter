
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Zap className="w-8 h-8 text-cyberpunk-blue animate-glow" />
            <a href="https://chatgpt.com/g/g-HEYmgtIzH-testimony-writer-gpt" 
               className="text-xl font-bold neon-glow">
              Public Testimony Writer GPT
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <NavLink href="https://chatgpt.com/g/g-67531f0471b081919c8dd6f6c0ab8fbc-alex-the-human-public-testimony-writer-gpt">
              Humanized Alex Testimony Writer
            </NavLink>
            <NavLink href="https://legislatorlink.lovable.app/">
              Contact Local Lawmakers
            </NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <NavLink href="#disclaimer">Disclaimer</NavLink>
            <NavLink href="https://www.aiwebtools.ai">More AI Tools</NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-white transition-colors duration-200"
  >
    {children}
  </a>
);

export default Header;
