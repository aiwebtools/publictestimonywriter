
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
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <StarField />
      <Header />
      
      {/* Disclaimer Popup */}
      {showDisclaimer && <DisclaimerPopup onAccept={handleDisclaimerAccept} />}
      
      {/* Main content with increased top padding to account for fixed header */}
      <div className="pt-40 md:pt-32">
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
