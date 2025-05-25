
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    id: 1,
    name: "Sarah Mitchell",
    rating: 5,
    date: "2 weeks ago",
    review: "The Eterna ring exceeded all my expectations. The craftsmanship is incredible and it fits perfectly. I get compliments every day!",
    product: "Eterna Ring",
    verified: true,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=100&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Emily Rodriguez",
    rating: 5,
    date: "1 month ago",
    review: "Absolutely stunning quality. The ethical sourcing was important to me, and the ring is even more beautiful in person.",
    product: "Aurora Ring",
    verified: true,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Jessica Chen",
    rating: 5,
    date: "3 weeks ago",
    review: "The customer service was exceptional, and the ring arrived beautifully packaged. It's truly a work of art.",
    product: "Celestial Band",
    verified: true,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop"
  }
];

const ReviewsSection = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? "fill-[#C49B66] text-[#C49B66]" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold mb-4">Real Stories. Real Sparkle.</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our customers are saying about their Lustre Rings experience.
          </p>
          
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex">{renderStars(5)}</div>
            <span className="text-lg font-semibold">4.9 out of 5</span>
            <span className="text-gray-600">(2,847 reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card key={review.id} className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold">{review.name}</h4>
                      {review.verified && (
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                          Verified
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex">{renderStars(review.rating)}</div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                  </div>
                </div>

                <Quote className="h-6 w-6 text-[#C49B66] mb-2" />
                <p className="text-gray-700 mb-4 leading-relaxed">{review.review}</p>
                
                <div className="text-sm text-gray-500">
                  Purchased: <span className="font-medium">{review.product}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Review Summary */}
        <div className="mt-12 bg-[#F6F2ED] rounded-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-[#C49B66] mb-1">98%</div>
              <p className="text-sm text-gray-600">Would recommend</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#C49B66] mb-1">4.9</div>
              <p className="text-sm text-gray-600">Average rating</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#C49B66] mb-1">2,847</div>
              <p className="text-sm text-gray-600">Total reviews</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#C49B66] mb-1">24h</div>
              <p className="text-sm text-gray-600">Avg. response time</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#C49B66] mb-1">99.5%</div>
              <p className="text-sm text-gray-600">On-time delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
