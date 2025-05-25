
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Eye, 
  ShoppingBag,
  Filter,
  SlidersHorizontal 
} from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  hoverImage: string;
  material: string;
  size: string[];
  isNew?: boolean;
  isFeatured?: boolean;
}

interface ProductGalleryProps {
  onProductSelect: (product: Product) => void;
}

const ProductGallery = ({ onProductSelect }: ProductGalleryProps) => {
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("popularity");
  const [showFilters, setShowFilters] = useState(false);

  const products: Product[] = [
    {
      id: 1,
      name: "Eterna Ring",
      price: 1499,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=500&auto=format&fit=crop",
      hoverImage: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=500&auto=format&fit=crop",
      material: "18k Gold",
      size: ["5", "6", "7", "8", "9"],
      isFeatured: true
    },
    {
      id: 2,
      name: "Luna Solitaire",
      price: 899,
      image: "https://images.unsplash.com/photo-1596944924591-1bb59f101c82?q=80&w=500&auto=format&fit=crop",
      hoverImage: "https://images.unsplash.com/photo-1596944924591-1bb59f101c82?q=80&w=500&auto=format&fit=crop",
      material: "14k Gold",
      size: ["5", "6", "7", "8"],
      isNew: true
    },
    {
      id: 3,
      name: "Celestial Band",
      price: 1299,
      image: "https://images.unsplash.com/photo-1615655114934-d33c35247b5d?q=80&w=500&auto=format&fit=crop",
      hoverImage: "https://images.unsplash.com/photo-1615655114934-d33c35247b5d?q=80&w=500&auto=format&fit=crop",
      material: "Rose Gold",
      size: ["5", "6", "7", "8", "9", "10"]
    },
    {
      id: 4,
      name: "Aurora Diamond",
      price: 2199,
      image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=500&auto=format&fit=crop",
      hoverImage: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=500&auto=format&fit=crop",
      material: "Platinum",
      size: ["5", "6", "7", "8"]
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif font-bold mb-4">
          Luxury Collection
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Each piece is meticulously crafted with ethically sourced materials and conflict-free diamonds
        </p>
      </div>

      {/* Filters and Sort */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="flex flex-wrap gap-2">
          <Button 
            variant={filter === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("all")}
            className={filter === "all" ? "bg-[#C49B66] text-white" : ""}
          >
            All Rings
          </Button>
          <Button 
            variant={filter === "gold" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("gold")}
            className={filter === "gold" ? "bg-[#C49B66] text-white" : ""}
          >
            Gold
          </Button>
          <Button 
            variant={filter === "diamond" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("diamond")}
            className={filter === "diamond" ? "bg-[#C49B66] text-white" : ""}
          >
            Diamond
          </Button>
          <Button 
            variant={filter === "new" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("new")}
            className={filter === "new" ? "bg-[#C49B66] text-white" : ""}
          >
            New Arrivals
          </Button>
        </div>

        <div className="flex gap-2">
          <select 
            className="px-3 py-2 border border-gray-300 rounded-md bg-white"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="popularity">Sort by Popularity</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest First</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <Card 
            key={product.id}
            className="group cursor-pointer bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <CardContent className="p-0">
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isFeatured && (
                    <Badge className="bg-[#C49B66] text-white">Featured</Badge>
                  )}
                  {product.isNew && (
                    <Badge className="bg-green-600 text-white">New</Badge>
                  )}
                </div>

                {/* Hover Actions */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                  <Button 
                    size="icon" 
                    variant="secondary"
                    onClick={(e) => {
                      e.stopPropagation();
                      onProductSelect(product);
                    }}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary">
                    <ShoppingBag className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.material}</p>
                <p className="text-xl font-bold text-[#C49B66]">
                  ${product.price.toLocaleString()}
                </p>
                
                {/* Size Options */}
                <div className="mt-4 flex gap-2">
                  {product.size.slice(0, 3).map((size) => (
                    <span 
                      key={size}
                      className="px-2 py-1 text-xs border border-gray-300 rounded"
                    >
                      {size}
                    </span>
                  ))}
                  {product.size.length > 3 && (
                    <span className="px-2 py-1 text-xs text-gray-500">
                      +{product.size.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <Button 
          variant="outline" 
          size="lg"
          className="border-[#C49B66] text-[#C49B66] hover:bg-[#C49B66] hover:text-white"
        >
          Load More Rings
        </Button>
      </div>
    </section>
  );
};

export default ProductGallery;
