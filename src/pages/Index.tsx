
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
    document.title = "Public Testimony Writer GPT | AI Web Tools";
    
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
      
      <Header />
      
      {/* Disclaimer Popup */}
      {showDisclaimer && <DisclaimerPopup onAccept={handleDisclaimerAccept} />}
      
      {/* Main content with divine spacing */}
      <div className="pt-48 md:pt-40 space-y-32">
        <HeroSection />
        <VideoSection />
        <NewsFeatureSection />
        <FeaturesSection />
        <FAQSection />
        <LegalDisclaimerSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default Index;
