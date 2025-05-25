
import { Instagram, Heart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=400&auto=format&fit=crop",
    username: "@sarah_m",
    likes: 342,
    comments: 28
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=400&auto=format&fit=crop",
    username: "@emily_r",
    likes: 189,
    comments: 15
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1544376664-80b17f09d399?q=80&w=400&auto=format&fit=crop",
    username: "@jessica_c",
    likes: 267,
    comments: 32
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=400&auto=format&fit=crop",
    username: "@anna_k",
    likes: 423,
    comments: 41
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=400&auto=format&fit=crop",
    username: "@maria_l",
    likes: 156,
    comments: 19
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1544376664-80b17f09d399?q=80&w=400&auto=format&fit=crop",
    username: "@lisa_w",
    likes: 298,
    comments: 25
  }
];

const SocialProof = () => {
  return (
    <section className="py-16 bg-[#F6F2ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold mb-4">See How Others Wear Eterna</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Join thousands of women sharing their Lustre Rings moments on social media.
          </p>
          
          <Button 
            variant="outline" 
            className="border-[#C49B66] text-[#C49B66] hover:bg-[#C49B66] hover:text-white"
          >
            <Instagram className="h-4 w-4 mr-2" />
            Follow @LustreRings
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {socialPosts.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg aspect-square">
                <img
                  src={post.image}
                  alt={`Post by ${post.username}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-center">
                    <div className="flex items-center justify-center gap-4 mb-2">
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        <span className="text-sm">{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4" />
                        <span className="text-sm">{post.comments}</span>
                      </div>
                    </div>
                    <p className="text-sm font-medium">{post.username}</p>
                  </div>
                </div>

                {/* Instagram Icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Instagram className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">
            Tag us in your photos for a chance to be featured!
          </p>
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-md">
            <Instagram className="h-5 w-5 text-[#C49B66]" />
            <span className="font-medium text-[#C49B66]">#LustreRings</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
