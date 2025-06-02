
const NewsFeatureSection = () => {
  return (
    <section className="py-20 relative bg-gradient-to-r from-divine-celestial/10 via-divine-purple/5 to-divine-gold/10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto divine-glass p-10 rounded-3xl divine-hover">
          <h2 className="text-4xl font-bold mb-8 text-center divine-neon-glow">Blessed & Featured In Divine Media</h2>
          <div className="flex flex-col space-y-8">
            <a 
              href="https://dabbin-dad.com/in-the-news/ct-cbd-shop-owners-new-ai-tool-makes-public-testimony-easier-a-brave-new-world/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="divine-hover group"
            >
              <div className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-4">
                <span className="text-divine-gold font-bold text-2xl group-hover:divine-neon-glow transition-all duration-300">Dabbin Dad News</span>
                <span className="text-divine-silver text-lg group-hover:text-divine-gold transition-colors duration-300">
                  - CT CBD Shop Owner's New AI Tool Makes Public Testimony Easier: A Brave New World
                </span>
              </div>
            </a>
            <a 
              href="https://www.ctinsider.com/connecticut/article/chat-gpt-ai-connecticut-testimony-legislature-18690805.php" 
              target="_blank" 
              rel="noopener noreferrer"
              className="divine-hover group"
            >
              <div className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-4">
                <span className="text-divine-celestial font-bold text-2xl group-hover:divine-neon-glow transition-all duration-300">CT Insider</span>
                <span className="text-divine-silver text-lg group-hover:text-divine-celestial transition-colors duration-300">
                  - How AI is helping people testify at the Connecticut Legislature
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsFeatureSection;
