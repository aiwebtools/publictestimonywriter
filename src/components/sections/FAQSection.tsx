
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  return (
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
            
            <AccordionItem value="item-2">
              <AccordionTrigger>How does the testimony writer tool work?</AccordionTrigger>
              <AccordionContent>
                Our AI-powered tool analyzes your input and helps formulate well-structured, persuasive public testimony. You provide your key points and position, and the system generates a professionally formatted statement that maintains your authentic voice while enhancing clarity and impact.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>Do I need technical skills to use this tool?</AccordionTrigger>
              <AccordionContent>
                Not at all. The testimony writer is designed to be user-friendly with an intuitive interface. Simply enter your thoughts on the issue, select your position, and let the AI do the heavy lifting. No technical expertise required.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger>Can I edit the generated testimony?</AccordionTrigger>
              <AccordionContent>
                Absolutely. While our AI creates a solid foundation for your testimony, we encourage you to review and personalize the output. You can modify any part of the generated text to better reflect your voice and specific concerns before submission.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger>Is my data kept private when using this tool?</AccordionTrigger>
              <AccordionContent>
                We take privacy seriously. Your input and generated testimony are not stored on our servers after your session ends. We do not share your information with third parties, ensuring your personal data and political positions remain confidential.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
