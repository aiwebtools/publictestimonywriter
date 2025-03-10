
const NewsFeatureSection = () => {
  return (
    <section className="py-10 relative bg-cyberpunk-blue/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto glass p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-center neon-glow">As Featured In</h2>
          <div className="flex flex-col space-y-4">
            <a 
              href="https://dabbin-dad.com/in-the-news/ct-cbd-shop-owners-new-ai-tool-makes-public-testimony-easier-a-brave-new-world/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyberpunk-blue hover:underline text-lg font-medium flex items-center"
            >
              <span className="mr-2">Dabbin Dad News</span>
              <span className="text-sm text-cyberpunk-pink">- CT CBD Shop Owner's New AI Tool Makes Public Testimony Easier</span>
            </a>
            <a 
              href="https://www.ctinsider.com/connecticut/article/chat-gpt-ai-connecticut-testimony-legislature-18690805.php" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyberpunk-blue hover:underline text-lg font-medium flex items-center"
            >
              <span className="mr-2">CT Insider</span>
              <span className="text-sm text-cyberpunk-pink">- How AI is helping people testify at the Connecticut Legislature</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsFeatureSection;
