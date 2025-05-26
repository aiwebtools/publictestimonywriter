import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
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
          <div className="flex items-center space-x-2">
            <Zap className="w-8 h-8 text-cyberpunk-blue animate-glow" />
            <Button
              className="cyberpunk-button text-sm px-4 py-2"
              onClick={() => window.location.href = "https://chatgpt.com/g/g-HEYmgtIzH-testimony-writer-gpt"}
            >
              Public Testimony Writer GPT
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
            className="md:hidden p-2 text-white hover:text-cyberpunk-blue"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-x-0 top-[72px] bottom-0 z-40 bg-cyberpunk-dark/95 glass overflow-y-auto md:hidden">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col space-y-4">
              <div className="py-2">
                <Button
                  className="cyberpunk-button w-full"
                  onClick={() => {
                    window.location.href = "https://chatgpt.com/g/g-HEYmgtIzH-testimony-writer-gpt";
                    toggleMenu();
                  }}
                >
                  Public Testimony Writer GPT
                </Button>
              </div>
              <div className="py-2">
                <Button
                  className="cyberpunk-button w-full"
                  onClick={() => {
                    window.location.href = "https://chatgpt.com/g/g-67531f0471b081919c8dd6f6c0ab8fbc-alex-the-human-public-testimony-writer-gpt";
                    toggleMenu();
                  }}
                >
                  Humanized Special Version ✨
                </Button>
              </div>
              <div className="py-2">
                <Button
                  className="cyberpunk-button w-full"
                  onClick={() => {
                    window.location.href = "https://legislatorlink.lovable.app/";
                    toggleMenu();
                  }}
                >
                  Contact Local Lawmakers
                </Button>
              </div>
              <div className="py-2">
                <Button
                  className="cyberpunk-button w-full"
                  onClick={() => {
                    window.location.href = "https://legislationwritergpt.lovable.app/?via=aiwebtools";
                    toggleMenu();
                  }}
                >
                  WRITE YOUR OWN LAWS
                </Button>
              </div>
              <div className="py-2">
                <Button
                  className="cyberpunk-button w-full"
                  onClick={() => {
                    window.location.href = "https://www.aiwebtools.ai";
                    toggleMenu();
                  }}
                >
                  More AI Tools
                </Button>
              </div>
              <MobileNavLink href="#faq" onClick={toggleMenu}>
                FAQ
              </MobileNavLink>
              <MobileNavLink href="#disclaimer" onClick={toggleMenu}>
                Disclaimer
              </MobileNavLink>
            </nav>
          </div>
        </div>
      )}
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
    className="text-xl text-gray-300 hover:text-white transition-colors duration-200 py-2 border-b border-gray-700/50 font-medium tracking-wide"
  >
    {children}
  </a>
);

export default Header;
