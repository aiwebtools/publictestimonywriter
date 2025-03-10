
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
            <a href="https://chatgpt.com/g/g-HEYmgtIzH-testimony-writer-gpt" 
               className="text-xl font-bold neon-glow">
              Public Testimony Writer GPT
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink href="https://chatgpt.com/g/g-HEYmgtIzH-testimony-writer-gpt">
              Public Testimony Writer GPT
            </NavLink>
            <NavLink href="https://chatgpt.com/g/g-67531f0471b081919c8dd6f6c0ab8fbc-alex-the-human-public-testimony-writer-gpt">
              Humanized Louis Testimony Writer
            </NavLink>
            <NavLink href="https://legislatorlink.lovable.app/">
              Contact Local Lawmakers
            </NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <NavLink href="#disclaimer">Disclaimer</NavLink>
            <NavLink href="https://www.aiwebtools.ai">More AI Tools</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-white hover:text-cyberpunk-blue"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={cn(
          "fixed inset-0 top-[72px] z-40 bg-cyberpunk-dark/95 glass overflow-y-auto transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="container mx-auto px-4 py-8">
          <nav className="flex flex-col space-y-6">
            <MobileNavLink href="https://chatgpt.com/g/g-HEYmgtIzH-testimony-writer-gpt" onClick={toggleMenu}>
              Public Testimony Writer GPT
            </MobileNavLink>
            <MobileNavLink href="https://chatgpt.com/g/g-67531f0471b081919c8dd6f6c0ab8fbc-alex-the-human-public-testimony-writer-gpt" onClick={toggleMenu}>
              Humanized Louis Testimony Writer
            </MobileNavLink>
            <MobileNavLink href="https://legislatorlink.lovable.app/" onClick={toggleMenu}>
              Contact Local Lawmakers
            </MobileNavLink>
            <MobileNavLink href="#faq" onClick={toggleMenu}>
              FAQ
            </MobileNavLink>
            <MobileNavLink href="#disclaimer" onClick={toggleMenu}>
              Disclaimer
            </MobileNavLink>
            <MobileNavLink href="https://www.aiwebtools.ai" onClick={toggleMenu}>
              More AI Tools
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
    className="text-gray-300 hover:text-white transition-colors duration-200"
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
    className="text-xl text-gray-300 hover:text-white transition-colors duration-200 py-2 border-b border-gray-700/50"
  >
    {children}
  </a>
);

export default Header;
