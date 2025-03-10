
import { Card } from "@/components/ui/card";
import { MessageSquare, Shield, Users, Zap } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="py-20 relative" id="how-it-works">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 neon-glow">How It Works</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<MessageSquare className="w-8 h-8 text-cyberpunk-blue" />}
            title="AI-Powered Writing"
            description="Advanced AI technology that crafts human-like testimonies while maintaining your unique voice"
          />
          <FeatureCard
            icon={<Shield className="w-8 h-8 text-cyberpunk-pink" />}
            title="Anti-Detection"
            description="Sophisticated algorithms ensure your testimony passes AI detection tools"
          />
          <FeatureCard
            icon={<Users className="w-8 h-8 text-cyberpunk-cyan" />}
            title="Personal Touch"
            description="Maintains your tone and style while making your message more impactful"
          />
          <FeatureCard
            icon={<Zap className="w-8 h-8 text-cyberpunk-blue" />}
            title="Instant Results"
            description="Get your perfectly crafted testimony in minutes, not hours"
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <Card className="cyberpunk-card">
    <div className="flex flex-col items-center text-center">
      {icon}
      <h3 className="text-xl font-bold mt-4 mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  </Card>
);

export default FeaturesSection;
