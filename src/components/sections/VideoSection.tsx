
import { useRef } from "react";

const VideoSection = () => {
  const videoRef = useRef<HTMLIFrameElement>(null);

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <iframe
            ref={videoRef}
            className="w-full aspect-video rounded-lg shadow-2xl"
            src="https://www.youtube.com/embed/-q1oyZZFcI4?autoplay=1&mute=0&controls=1&rel=0&hd=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
