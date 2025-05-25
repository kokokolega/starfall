
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-wide">
          Eterna
        </h1>
        <p className="text-2xl md:text-3xl font-light mb-4 tracking-wider">
          A Promise in Gold
        </p>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto font-light">
          Crafted by artisans. Designed for forever.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-[#C49B66] hover:bg-[#B8895A] text-white px-8 py-3 text-lg font-medium tracking-wide"
          >
            Shop Now
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg font-medium tracking-wide"
          >
            View Story
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
