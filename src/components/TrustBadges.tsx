
import { Shield, Truck, RotateCcw, Award } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Truck,
      title: "Free Worldwide Delivery",
      description: "2–5 days on all orders"
    },
    {
      icon: RotateCcw,
      title: "30-Day Easy Returns",
      description: "Hassle-free return policy"
    },
    {
      icon: Shield,
      title: "Lifetime Warranty",
      description: "Guaranteed craftsmanship"
    },
    {
      icon: Award,
      title: "Ethically Sourced",
      description: "Conflict-free diamonds"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="text-center group">
              <div className="bg-[#F6F2ED] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#C49B66] transition-colors duration-300">
                <badge.icon className="h-8 w-8 text-[#C49B66] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{badge.title}</h3>
              <p className="text-gray-600 text-sm">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
