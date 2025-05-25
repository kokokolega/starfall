
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ThumbsUp, Camera } from "lucide-react";

const ReviewsSection = () => {
  const [filter, setFilter] = useState("all");

  const reviews = [
    {
      id: 1,
      name: "Sarah Mitchell",
      rating: 5,
      date: "2 weeks ago",
      title: "Absolutely stunning!",
      content: "The Eterna ring exceeded all my expectations. The quality is exceptional and it looks even more beautiful in person. My fiancé couldn't have chosen better!",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=300&auto=format&fit=crop",
      verified: true,
      helpful: 24
    },
    {
      id: 2,
      name: "Emma Thompson",
      rating: 5,
      date: "1 month ago",
      title: "Perfect craftsmanship",
      content: "The attention to detail is remarkable. You can truly feel the quality and care that went into making this ring. The diamond sparkles beautifully in any light.",
      image: "https://images.unsplash.com/photo-1596944924591-1bb59f101c82?q=80&w=300&auto=format&fit=crop",
      verified: true,
      helpful: 18
    },
    {
      id: 3,
      name: "Jessica Chen",
      rating: 4,
      date: "3 weeks ago",
      title: "Beautiful design",
      content: "Love the elegant design and the ethical sourcing is important to me. Delivery was fast and packaging was luxurious. Highly recommend!",
      verified: true,
      helpful: 12
    }
  ];

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const totalReviews = 127;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold mb-4">
            Real Stories. Real Sparkle.
          </h2>
          
          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className={`h-6 w-6 ${
                      star <= averageRating 
                        ? 'fill-yellow-400 text-yellow-400' 
                        : 'text-gray-300'
                    }`} 
                  />
                ))}
              </div>
              <span className="text-2xl font-bold">{averageRating.toFixed(1)}</span>
            </div>
            <span className="text-gray-600">({totalReviews} reviews)</span>
          </div>
        </div>

        {/* Review Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Button 
            variant={filter === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("all")}
            className={filter === "all" ? "bg-[#C49B66] text-white" : ""}
          >
            All Reviews
          </Button>
          <Button 
            variant={filter === "5" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("5")}
            className={filter === "5" ? "bg-[#C49B66] text-white" : ""}
          >
            5 Stars
          </Button>
          <Button 
            variant={filter === "4" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("4")}
            className={filter === "4" ? "bg-[#C49B66] text-white" : ""}
          >
            4 Stars
          </Button>
          <Button 
            variant={filter === "verified" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("verified")}
            className={filter === "verified" ? "bg-[#C49B66] text-white" : ""}
          >
            Verified Buyers
          </Button>
          <Button 
            variant={filter === "photos" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("photos")}
            className={filter === "photos" ? "bg-[#C49B66] text-white" : ""}
          >
            With Photos
          </Button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {reviews.map((review) => (
            <Card key={review.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                {/* Review Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold">{review.name}</h4>
                      {review.verified && (
                        <Badge variant="outline" className="text-xs border-green-500 text-green-600">
                          Verified
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            className={`h-4 w-4 ${
                              star <= review.rating 
                                ? 'fill-yellow-400 text-yellow-400' 
                                : 'text-gray-300'
                            }`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">{review.date}</span>
                    </div>
                  </div>
                </div>

                {/* Review Content */}
                <h5 className="font-semibold mb-2">{review.title}</h5>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  {review.content}
                </p>

                {/* Review Image */}
                {review.image && (
                  <div className="mb-4">
                    <img
                      src={review.image}
                      alt="Customer photo"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                )}

                {/* Review Footer */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <Button variant="ghost" size="sm" className="text-gray-600 hover:text-[#C49B66]">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    Helpful ({review.helpful})
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More & Write Review */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button variant="outline" size="lg">
            Load More Reviews
          </Button>
          <Button 
            size="lg"
            className="bg-[#C49B66] hover:bg-[#B8895A] text-white"
          >
            <Camera className="h-5 w-5 mr-2" />
            Write a Review
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
