import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking anchor links
  useEffect(() => {
    const handleHashChange = () => {
      setIsMenuOpen(false);
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Also prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex flex-col">
              <h1 className="text-lg md:text-xl font-bold text-white neon-glow tracking-tight">
                PUBLIC ACTIVISM AI TOOLS
              </h1>
              <p className="text-xs md:text-sm text-gray-300 leading-tight">
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
            <Button
              className="cyberpunk-button text-xs sm:text-sm px-2 sm:px-4 py-2"
              onClick={() => window.location.href = "https://chatgpt.com/g/g-HEYmgtIzH-testimony-writer-gpt"}
            >
              <span className="hidden sm:inline">Public Testimony Writer GPT</span>
              <span className="sm:hidden">Write Testimony</span>
            </Button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              className="cyberpunk-button text-sm px-4 py-2"
              onClick={() => window.location.href = "https://chatgpt.com/g/g-67531f0471b081919c8dd6f6c0ab8fbc-alex-the-human-public-testimony-writer-gpt"}
            >
              Humanized Special Version ✨
            </Button>
            <Button
              className="cyberpunk-button text-sm px-4 py-2"
              onClick={() => window.location.href = "https://legislatorlink.lovable.app/"}
            >
              Contact Local Lawmakers
            </Button>
            <Button
              className="cyberpunk-button text-sm px-4 py-2"
              onClick={() => window.location.href = "https://legislationwritergpt.lovable.app/?via=aiwebtools"}
            >
              WRITE YOUR OWN LAWS
            </Button>
            <Button
              className="cyberpunk-button text-sm px-4 py-2"
              onClick={() => window.location.href = "https://www.aiwebtools.ai"}
            >
              More AI Tools
            </Button>
            <NavLink href="#faq">FAQ</NavLink>
            <NavLink href="#disclaimer">Disclaimer</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-white hover:text-cyberpunk-blue z-50 relative"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={cn(
        "fixed inset-x-0 top-0 z-40 bg-black/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out md:hidden",
        isMenuOpen ? "translate-y-0" : "-translate-y-full"
      )}>
        <div className="pt-20 pb-6 px-4">
          <nav className="flex flex-col space-y-3">
            <Button
              className="cyberpunk-button w-full text-xs py-2 px-3"
              onClick={() => {
                window.location.href = "https://chatgpt.com/g/g-HEYmgtIzH-testimony-writer-gpt";
                setIsMenuOpen(false);
              }}
            >
              Public Testimony Writer GPT
            </Button>
            
            <Button
              className="cyberpunk-button w-full text-xs py-2 px-3"
              onClick={() => {
                window.location.href = "https://chatgpt.com/g/g-67531f0471b081919c8dd6f6c0ab8fbc-alex-the-human-public-testimony-writer-gpt";
                setIsMenuOpen(false);
              }}
            >
              Humanized Special Version ✨
            </Button>
            
            <Button
              className="cyberpunk-button w-full text-xs py-2 px-3"
              onClick={() => {
                window.location.href = "https://legislatorlink.lovable.app/";
                setIsMenuOpen(false);
              }}
            >
              Contact Local Lawmakers
            </Button>
            
            <Button
              className="cyberpunk-button w-full text-xs py-2 px-3"
              onClick={() => {
                window.location.href = "https://legislationwritergpt.lovable.app/?via=aiwebtools";
                setIsMenuOpen(false);
              }}
            >
              Write Your Own Laws
            </Button>
            
            <Button
              className="cyberpunk-button w-full text-xs py-2 px-3"
              onClick={() => {
                window.location.href = "https://www.aiwebtools.ai";
                setIsMenuOpen(false);
              }}
            >
              More AI Tools
            </Button>
            
            <MobileNavLink href="#faq" onClick={() => setIsMenuOpen(false)}>
              FAQ
            </MobileNavLink>
            <MobileNavLink href="#disclaimer" onClick={() => setIsMenuOpen(false)}>
              Disclaimer
            </MobileNavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-white transition-colors duration-200 font-medium tracking-wide"
  >
    {children}
  </a>
);

const MobileNavLink = ({ 
  href, 
  children, 
  onClick 
}: { 
  href: string; 
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <a
    href={href}
    onClick={onClick}
    className="text-lg text-gray-300 hover:text-white transition-colors duration-200 py-2 border-b border-gray-700/50 font-medium tracking-wide"
  >
    {children}
  </a>
);

export default Header;
