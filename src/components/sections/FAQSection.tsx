
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
            {/* Add more FAQ items as needed */}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
