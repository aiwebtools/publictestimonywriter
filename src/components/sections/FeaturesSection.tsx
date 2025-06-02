
import { Card } from "@/components/ui/card";
import { MessageSquare, Shield, Users, Zap } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="py-32 relative" id="how-it-works">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 divine-neon-glow">
          How Divine Magic Works
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <FeatureCard
            icon={<MessageSquare className="w-12 h-12 text-divine-gold animate-glow" />}
            title="AI-Powered Divine Writing"
            description="Advanced celestial AI technology that crafts human-like testimonies while maintaining your unique divine voice"
          />
          <FeatureCard
            icon={<Shield className="w-12 h-12 text-divine-purple animate-divine-pulse" />}
            title="Ethereal Anti-Detection"
            description="Sophisticated divine algorithms ensure your testimony passes all AI detection tools with heavenly grace"
          />
          <FeatureCard
            icon={<Users className="w-12 h-12 text-divine-celestial animate-glow" />}
            title="Sacred Personal Touch"
            description="Maintains your divine tone and style while making your message more impactful and spiritually resonant"
          />
          <FeatureCard
            icon={<Zap className="w-12 h-12 text-divine-rose animate-divine-pulse" />}
            title="Instant Divine Results"
            description="Get your perfectly crafted divine testimony in minutes, blessed with the speed of celestial light"
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <Card className="cyberpunk-card text-center p-10 divine-hover">
    <div className="flex flex-col items-center space-y-6">
      <div className="p-4 rounded-full bg-gradient-to-br from-divine-gold/20 to-divine-purple/20 
                      border-2 border-divine-gold/30 animate-celestial-rotate">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-divine-gold neon-glow">{title}</h3>
      <p className="text-divine-silver text-lg leading-relaxed">{description}</p>
    </div>
  </Card>
);

export default FeaturesSection;
