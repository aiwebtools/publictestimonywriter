
import { Card } from "@/components/ui/card";
import { MessageSquare, Shield, Users, Zap } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="py-32 relative" id="how-it-works" itemScope itemType="https://schema.org/ItemList">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 divine-neon-glow" itemProp="name">
          How Our Free AI Tools Work
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12" itemProp="itemListElement">
          <FeatureCard
            icon={<MessageSquare className="w-12 h-12 text-divine-gold animate-glow" />}
            title="AI-Powered Writing"
            description="Advanced AI technology that crafts human-like testimonies while maintaining your unique voice and perspective using cutting-edge GPT tools"
            itemProp="1"
          />
          <FeatureCard
            icon={<Shield className="w-12 h-12 text-divine-purple animate-divine-pulse" />}
            title="Anti-Detection Technology"
            description="Sophisticated algorithms ensure your testimony passes all AI detection tools while maintaining authenticity and human-like quality"
            itemProp="2"
          />
          <FeatureCard
            icon={<Users className="w-12 h-12 text-divine-celestial animate-glow" />}
            title="Personal Touch"
            description="Maintains your personal tone and style while making your message more impactful and professionally resonant for maximum civic engagement"
            itemProp="3"
          />
          <FeatureCard
            icon={<Zap className="w-12 h-12 text-divine-rose animate-divine-pulse" />}
            title="Instant Results"
            description="Get your perfectly crafted testimony in minutes with the speed and efficiency of modern AI technology - completely free to use"
            itemProp="4"
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description, itemProp }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  itemProp: string;
}) => (
  <Card className="cyberpunk-card text-center p-10 divine-hover" itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
    <meta itemProp="position" content={itemProp} />
    <div className="flex flex-col items-center space-y-6">
      <div className="p-4 rounded-full bg-gradient-to-br from-divine-gold/20 to-divine-purple/20 
                      border-2 border-divine-gold/30 animate-celestial-rotate">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-divine-gold neon-glow" itemProp="name">{title}</h3>
      <p className="text-divine-silver text-lg leading-relaxed" itemProp="description">{description}</p>
    </div>
  </Card>
);

export default FeaturesSection;
