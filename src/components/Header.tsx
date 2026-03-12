import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const AIWEBTOOLS_URL = "https://aiwebtools.lovable.app/?via=aiwebtools";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  useEffect(() => {
    window.addEventListener('hashchange', closeMenu);
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      window.removeEventListener('hashchange', closeMenu);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen, closeMenu]);

  const goTo = (url: string) => {
    closeMenu();
    window.location.href = url;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/80 border-b border-divine-gold/20">
      <div className="container mx-auto px-3 sm:px-4 py-3">
        <nav className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
            <div className="flex flex-col min-w-0">
              <h1 className="text-sm sm:text-lg md:text-xl font-bold text-divine-gold truncate">
                PUBLIC ACTIVISM AI TOOLS
              </h1>
              <p className="text-[10px] sm:text-xs md:text-sm text-divine-silver leading-tight truncate">
                Presented by{" "}
                <span
                  className="text-divine-celestial hover:text-divine-gold cursor-pointer transition-colors duration-200 underline"
                  onClick={() => goTo(AIWEBTOOLS_URL)}
                >
                  AiWebTools.ai
                </span>
                <span className="hidden sm:inline"> - For The People, By the People</span>
              </p>
            </div>
            <Button
              className="cyberpunk-button text-[10px] sm:text-xs px-2 sm:px-3 py-1.5 sm:py-2 shrink-0 hidden xs:flex"
              onClick={() => goTo("https://chatgpt.com/g/g-HEYmgtIzH-testimony-writer-gpt")}
            >
              <span className="hidden sm:inline">Public Testimony Writer GPT</span>
              <span className="sm:hidden">Write Testimony</span>
            </Button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
            <NavButton onClick={() => goTo("https://chatgpt.com/g/g-67531f0471b081919c8dd6f6c0ab8fbc-alex-the-human-public-testimony-writer-gpt")}>
              Humanized Version ✨
            </NavButton>
            <NavButton onClick={() => goTo("https://legislatorlink.lovable.app/")}>
              Contact Lawmakers
            </NavButton>
            <NavButton onClick={() => goTo("https://legislationwritergpt.lovable.app/?via=aiwebtools")}>
              Write Your Own Laws
            </NavButton>
            <NavButton onClick={() => goTo(AIWEBTOOLS_URL)}>
              More AI Tools
            </NavButton>
            <NavLink href="#faq">FAQ</NavLink>
            <NavLink href="#disclaimer">Disclaimer</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(prev => !prev)}
            className="lg:hidden p-2 text-divine-gold active:scale-90 transition-transform duration-100 z-50 relative touch-manipulation"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-0 top-0 z-40 bg-black/98 backdrop-blur-lg lg:hidden",
          "transition-opacity duration-200 ease-out",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="pt-20 pb-6 px-4 h-full overflow-y-auto">
          <nav className="flex flex-col gap-2 max-w-md mx-auto">
            <MobileButton onClick={() => goTo("https://chatgpt.com/g/g-HEYmgtIzH-testimony-writer-gpt")}>
              Public Testimony Writer GPT
            </MobileButton>
            <MobileButton onClick={() => goTo("https://chatgpt.com/g/g-67531f0471b081919c8dd6f6c0ab8fbc-alex-the-human-public-testimony-writer-gpt")}>
              Humanized Special Version ✨
            </MobileButton>
            <MobileButton onClick={() => goTo("https://legislatorlink.lovable.app/")}>
              Contact Local Lawmakers
            </MobileButton>
            <MobileButton onClick={() => goTo("https://legislationwritergpt.lovable.app/?via=aiwebtools")}>
              Write Your Own Laws
            </MobileButton>
            <MobileButton onClick={() => goTo(AIWEBTOOLS_URL)}>
              More AI Tools
            </MobileButton>
            <MobileNavLink href="#faq" onClick={closeMenu}>FAQ</MobileNavLink>
            <MobileNavLink href="#disclaimer" onClick={closeMenu}>Disclaimer</MobileNavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

const NavButton = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
  <Button
    className="cyberpunk-button text-xs px-3 py-1.5"
    onClick={onClick}
  >
    {children}
  </Button>
);

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-divine-silver hover:text-divine-gold transition-colors duration-200 font-medium text-sm"
  >
    {children}
  </a>
);

const MobileButton = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
  <Button
    className="cyberpunk-button w-full text-sm py-3 px-4 touch-manipulation active:scale-95 transition-transform duration-100"
    onClick={onClick}
  >
    {children}
  </Button>
);

const MobileNavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <a
    href={href}
    onClick={onClick}
    className="text-lg text-divine-silver hover:text-divine-gold transition-colors duration-200 py-3 border-b border-divine-gold/20 font-medium touch-manipulation"
  >
    {children}
  </a>
);

export default Header;
