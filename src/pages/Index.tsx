
import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Zap, MessageSquare, Shield, Users } from "lucide-react";

const Index = () => {
  const videoRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    document.title = "Public Testimony Writer GPT | AI Web Tools";
  }, []);

  return (
    <div className="min-h-screen bg-cyberpunk-dark text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-float neon-glow">
              Public Testimony Writer GPT
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Create powerful, human-like public testimonies that make an impact
            </p>
            <div className="flex justify-center gap-4">
              <Button
                className="cyberpunk-button"
                onClick={() => window.location.href = "https://chatgpt.com/g/g-HEYmgtIzH-testimony-writer-gpt"}
              >
                Start Writing
              </Button>
              <Button
                variant="outline"
                className="glass hover:bg-white/20"
                onClick={() => window.location.href = "#how-it-works"}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <iframe
              ref={videoRef}
              className="w-full aspect-video rounded-lg shadow-2xl"
              src="https://www.youtube.com/embed/qmSNVdV4ykc?autoplay=1&mute=0&controls=1&rel=0&hd=1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
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

      {/* FAQ Section */}
      <section className="py-20 relative" id="faq">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 neon-glow">FAQ</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Is this legal to use?</AccordionTrigger>
                <AccordionContent>
                  Yes. Our tool helps you articulate your genuine thoughts and feelings in a clear and effective manner. We recommend reviewing all content before submission.
                </AccordionContent>
              </AccordionItem>
              {/* Add more FAQ items as needed */}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-20 relative" id="disclaimer">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto glass p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Legal Disclaimer</h2>
            <p className="text-gray-300">
              This tool is designed to assist in crafting public testimonies while maintaining the authenticity of your voice and message. Users are responsible for reviewing and ensuring the accuracy of all content before submission. We do not guarantee specific outcomes from testimony submissions.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <a href="tel:4758008096" className="block text-gray-300 hover:text-white">(475) 800-8096</a>
              <a href="mailto:Contact@ai-webtools.com" className="block text-gray-300 hover:text-white">Contact@ai-webtools.com</a>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <a href="https://openai.com/policies/privacy-policy" className="block text-gray-300 hover:text-white">Privacy Policy</a>
              <a href="https://aiwebtools.ai/terms-of-services" className="block text-gray-300 hover:text-white">Terms of Service</a>
            </div>
            <div>
              <h3 className="font-bold mb-4">Tools</h3>
              <a href="https://chatgpt.com/g/g-HEYmgtIzH-testimony-writer-gpt" className="block text-gray-300 hover:text-white">Public Testimony Writer GPT</a>
              <a href="https://legislatorlink.lovable.app/" className="block text-gray-300 hover:text-white">Contact Local Lawmakers</a>
            </div>
            <div>
              <Button
                className="cyberpunk-button w-full"
                onClick={() => window.location.href = "https://www.aiwebtools.ai"}
              >
                More AI Tools
              </Button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <a href="https://www.aiwebtools.ai" className="text-gray-300 hover:text-white">
              © 2025 AI WEB TOOLS LLC All rights reserved.
            </a>
          </div>
        </div>
      </footer>
    </div>
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

export default Index;
