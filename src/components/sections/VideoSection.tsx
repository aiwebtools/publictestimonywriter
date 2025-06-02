
import { useRef } from "react";

const VideoSection = () => {
  const videoRef = useRef<HTMLIFrameElement>(null);

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative divine-glass p-4 rounded-3xl divine-hover">
            <iframe
              ref={videoRef}
              className="w-full aspect-video rounded-2xl shadow-2xl"
              src="https://www.youtube.com/embed/-q1oyZZFcI4?autoplay=1&mute=0&controls=1&rel=0&hd=1&loop=1&playlist=-q1oyZZFcI4"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            
            {/* Divine frame glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-divine-gold via-divine-purple to-divine-celestial opacity-20 animate-divine-pulse pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
