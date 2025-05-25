
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-16 bg-[#F6F2ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold mb-4">
            A Story in Every Detail
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch our master artisans craft each ring by hand in our Jaipur workshop, 
            where tradition meets timeless elegance.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
            {!isPlaying ? (
              <div 
                className="relative bg-cover bg-center h-full flex items-center justify-center cursor-pointer"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=2000&auto=format&fit=crop')`
                }}
                onClick={() => setIsPlaying(true)}
              >
                <Button 
                  size="lg"
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white border-2 border-white rounded-full w-20 h-20"
                >
                  <Play className="h-8 w-8 ml-1" />
                </Button>
                
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-semibold mb-1">Behind the Scenes</h3>
                  <p className="text-sm opacity-90">Crafting the Eterna Ring</p>
                </div>
              </div>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Crafting Process"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
