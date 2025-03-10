
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import DisclaimerPopup from "@/components/DisclaimerPopup";
import HeroSection from "@/components/sections/HeroSection";
import NewsFeatureSection from "@/components/sections/NewsFeatureSection";
import VideoSection from "@/components/sections/VideoSection";
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
    <div className="min-h-screen bg-cyberpunk-dark text-white">
      <Header />
      
      {/* Disclaimer Popup */}
      {showDisclaimer && <DisclaimerPopup onAccept={handleDisclaimerAccept} />}
      
      <HeroSection />
      <NewsFeatureSection />
      <VideoSection />
      <FeaturesSection />
      <FAQSection />
      <LegalDisclaimerSection />
      <FooterSection />
    </div>
  );
};

export default Index;
