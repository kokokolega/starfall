
import { Button } from "@/components/ui/button";
import { Instagram, ExternalLink } from "lucide-react";

const SocialProof = () => {
  const instagramPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=400&auto=format&fit=crop",
      likes: 245,
      caption: "My Eterna ring is perfect! #LustreRings"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1596944924591-1bb59f101c82?q=80&w=400&auto=format&fit=crop",
      likes: 189,
      caption: "Couldn't be happier with my choice #LustreRings"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1615655114934-d33c35247b5d?q=80&w=400&auto=format&fit=crop",
      likes: 312,
      caption: "The craftsmanship is incredible #LustreRings"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=400&auto=format&fit=crop",
      likes: 156,
      caption: "Ethically sourced and beautiful #LustreRings"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=400&auto=format&fit=crop",
      likes: 203,
      caption: "Timeless elegance #LustreRings"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=400&auto=format&fit=crop",
      likes: 278,
      caption: "A symbol of forever #LustreRings"
    }
  ];

  return (
    <section className="py-16 bg-[#F6F2ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold mb-4">
            See How Others Wear Eterna
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Join thousands of happy customers sharing their Lustre Rings moments
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="border-[#C49B66] text-[#C49B66] hover:bg-[#C49B66] hover:text-white"
          >
            <Instagram className="h-5 w-5 mr-2" />
            Follow @LustreRings
          </Button>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {instagramPosts.map((post) => (
            <div 
              key={post.id} 
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                src={post.image}
                alt="Customer photo"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <Instagram className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-sm font-medium">❤️ {post.likes}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-lg mb-4">Share your Lustre Rings moment</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="outline"
              className="border-[#C49B66] text-[#C49B66] hover:bg-[#C49B66] hover:text-white"
            >
              <Instagram className="h-4 w-4 mr-2" />
              Instagram
            </Button>
            <Button 
              variant="outline"
              className="border-[#C49B66] text-[#C49B66] hover:bg-[#C49B66] hover:text-white"
            >
              Facebook
            </Button>
            <Button 
              variant="outline"
              className="border-[#C49B66] text-[#C49B66] hover:bg-[#C49B66] hover:text-white"
            >
              Pinterest
            </Button>
          </div>
          
          <p className="text-sm text-gray-600 mt-4">
            Tag us <span className="font-semibold text-[#C49B66]">#LustreRings</span> for a chance to be featured
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
