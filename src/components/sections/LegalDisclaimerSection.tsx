
const LegalDisclaimerSection = () => {
  return (
    <section className="py-32 relative" id="disclaimer">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto divine-glass p-12 rounded-3xl divine-hover">
          <h2 className="text-4xl font-bold mb-8 text-center divine-neon-glow">Legal Disclaimer</h2>
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-divine-silver">
              This tool is designed to assist in crafting public testimonies while maintaining the authenticity of your voice and message. 
              Users are responsible for reviewing and ensuring the accuracy of all content before submission. We do not guarantee specific outcomes from testimony submissions.
            </p>
            <p className="text-divine-silver">
              By using this tool, you acknowledge that all submitted testimonies represent your own personal views and opinions, 
              guided by your personal convictions and commitment to truth and justice.
            </p>
            <p className="text-center text-divine-gold font-semibold italic text-xl neon-glow">
              For informational, educational, and research purposes only.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalDisclaimerSection;
