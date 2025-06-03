
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import DisclaimerPopup from "@/components/DisclaimerPopup";
import StarField from "@/components/StarField";
import HeroSection from "@/components/sections/HeroSection";
import VideoSection from "@/components/sections/VideoSection";
import NewsFeatureSection from "@/components/sections/NewsFeatureSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import FAQSection from "@/components/sections/FAQSection";
import LegalDisclaimerSection from "@/components/sections/LegalDisclaimerSection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    document.title = "Free AI Tools | Public Testimony Writer GPT | AI Web Tools";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Free AI-powered tools for public testimony writing, legislation drafting, and civic engagement. Create powerful testimonies with our AI GPT tools. Featured on CT Insider and Dabbin Dad News.');
    }
    
    // Check if user has already accepted the disclaimer
    const hasAcceptedDisclaimer = localStorage.getItem("disclaimer-accepted") === "true";
    if (!hasAcceptedDisclaimer) {
      setShowDisclaimer(true);
    }
  }, []);

  const handleDisclaimerAccept = () => {
    setShowDisclaimer(false);
  };

  return (
    <div className="min-h-screen bg-divine-dark text-divine-white relative overflow-x-hidden">
      <StarField />
      
      {/* Divine background overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-divine-gold/5 via-divine-purple/3 to-divine-celestial/5 pointer-events-none -z-5" />
      
      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-divine-gold text-divine-dark px-4 py-2 rounded z-50">
        Skip to main content
      </a>
      
      <Header />
      
      {/* Disclaimer Popup */}
      {showDisclaimer && <DisclaimerPopup onAccept={handleDisclaimerAccept} />}
      
      {/* Main content with divine spacing */}
      <main id="main-content" className="pt-48 md:pt-40 space-y-32">
        <HeroSection />
        <VideoSection />
        <NewsFeatureSection />
        <FeaturesSection />
        <FAQSection />
        <LegalDisclaimerSection />
      </main>
      
      <FooterSection />
    </div>
  );
};

export default Index;
