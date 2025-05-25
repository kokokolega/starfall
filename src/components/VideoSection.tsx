
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-16 bg-[#F6F2ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-serif font-bold mb-4">A Story in Every Detail</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch our master artisans craft each ring by hand in our Jaipur workshop, 
            where tradition meets modern luxury.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1566737236500-c8ac43014a8e?q=80&w=1200&auto=format&fit=crop"
              alt="Jewelry crafting process"
              className="w-full h-full object-cover"
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <Button
                size="lg"
                onClick={togglePlay}
                className="bg-white bg-opacity-90 hover:bg-white text-black rounded-full w-20 h-20"
              >
                {isPlaying ? (
                  <Pause className="h-8 w-8" />
                ) : (
                  <Play className="h-8 w-8 ml-1" />
                )}
              </Button>
            </div>

            {/* Video Info */}
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-semibold mb-1">The Making of Eterna</h3>
              <p className="text-sm opacity-90">3:42 minutes</p>
            </div>
          </div>
        </div>

        {/* Video Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-center">
          <div>
            <div className="text-3xl font-bold text-[#C49B66] mb-2">72</div>
            <p className="text-gray-600">Hours of handcrafting</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#C49B66] mb-2">3</div>
            <p className="text-gray-600">Generations of artisans</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#C49B66] mb-2">100%</div>
            <p className="text-gray-600">Ethically sourced materials</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
