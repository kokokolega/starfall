
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Eye, ShoppingBag } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  hoverImage: string;
  isNew?: boolean;
  isBestseller?: boolean;
  rating: number;
  reviews: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Eterna Ring",
    price: 1499,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=500&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=500&auto=format&fit=crop",
    isBestseller: true,
    rating: 5,
    reviews: 127
  },
  {
    id: 2,
    name: "Aurora Ring",
    price: 899,
    originalPrice: 1199,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=500&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=500&auto=format&fit=crop",
    isNew: true,
    rating: 4.8,
    reviews: 84
  },
  {
    id: 3,
    name: "Celestial Band",
    price: 749,
    image: "https://images.unsplash.com/photo-1544376664-80b17f09d399?q=80&w=500&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1544376664-80b17f09d399?q=80&w=500&auto=format&fit=crop",
    rating: 4.9,
    reviews: 92
  },
  {
    id: 4,
    name: "Luna Solitaire",
    price: 1299,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=500&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=500&auto=format&fit=crop",
    rating: 4.7,
    reviews: 156
  },
  {
    id: 5,
    name: "Stellar Ring",
    price: 649,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=500&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=500&auto=format&fit=crop",
    isNew: true,
    rating: 4.6,
    reviews: 73
  },
  {
    id: 6,
    name: "Eternal Promise",
    price: 1899,
    image: "https://images.unsplash.com/photo-1544376664-80b17f09d399?q=80&w=500&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1544376664-80b17f09d399?q=80&w=500&auto=format&fit=crop",
    isBestseller: true,
    rating: 5,
    reviews: 203
  }
];

interface ProductGalleryProps {
  onProductSelect: (product: Product) => void;
}

const ProductGallery = ({ onProductSelect }: ProductGalleryProps) => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < Math.floor(rating) ? "text-[#C49B66]" : "text-gray-300"}>
        ★
      </span>
    ));
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold mb-4">Featured Collection</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handcrafted rings, each piece telling a unique story of love and artisanship.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={hoveredProduct === product.id ? product.hoverImage : product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.isNew && (
                      <Badge className="bg-green-500 text-white">New</Badge>
                    )}
                    {product.isBestseller && (
                      <Badge className="bg-[#C49B66] text-white">Bestseller</Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="icon" 
                      variant="secondary" 
                      className="bg-white/90 hover:bg-white"
                      onClick={() => onProductSelect(product)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Quick Add to Cart */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button className="w-full bg-[#C49B66] hover:bg-[#B8895A] text-white">
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      Quick Add
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  
                  <div className="flex items-center gap-1 mb-2">
                    {renderStars(product.rating)}
                    <span className="text-sm text-gray-500 ml-1">({product.reviews})</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-[#C49B66]">
                      ${product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        ${product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-[#C49B66] text-[#C49B66] hover:bg-[#C49B66] hover:text-white"
          >
            View All Collections
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
