
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, Heart, ShoppingBag, Star, Shield, Truck, RotateCcw } from "lucide-react";

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

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
}

const ProductDetail = ({ product, onClose }: ProductDetailProps) => {
  const [selectedSize, setSelectedSize] = useState("7");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const sizes = ["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9"];
  const images = [product.image, product.hoverImage, product.image];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? "fill-[#C49B66] text-[#C49B66]" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="absolute inset-4 bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="flex h-full">
          {/* Image Gallery */}
          <div className="flex-1 p-8">
            <div className="relative h-full">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-0 right-0 z-10"
                onClick={onClose}
              >
                <X className="h-6 w-6" />
              </Button>
              
              <div className="h-full flex flex-col">
                <div className="flex-1 mb-4">
                  <img
                    src={images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                
                <div className="flex gap-2">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-20 h-20 rounded border-2 overflow-hidden ${
                        selectedImage === index ? "border-[#C49B66]" : "border-gray-200"
                      }`}
                    >
                      <img src={image} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex-1 p-8 overflow-y-auto">
            <div className="space-y-6">
              {/* Title and Badges */}
              <div>
                <div className="flex gap-2 mb-2">
                  {product.isNew && (
                    <Badge className="bg-green-500 text-white">New</Badge>
                  )}
                  {product.isBestseller && (
                    <Badge className="bg-[#C49B66] text-white">Bestseller</Badge>
                  )}
                </div>
                <h1 className="text-3xl font-serif font-bold">{product.name}</h1>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex">{renderStars(product.rating)}</div>
                <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-[#C49B66]">
                  ${product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through">
                    ${product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>

              {/* Description */}
              <div>
                <p className="text-gray-600 leading-relaxed">
                  {product.name} is a symbol of eternal love. Forged in 18k gold and crowned with a 
                  brilliant-cut, conflict-free diamond. Made by hand by master artisans in Jaipur, 
                  each piece tells a unique story of craftsmanship and dedication.
                </p>
              </div>

              {/* Size Selection */}
              <div>
                <label className="block text-sm font-semibold mb-2">Ring Size</label>
                <div className="grid grid-cols-5 gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`p-2 border rounded text-center ${
                        selectedSize === size
                          ? "border-[#C49B66] bg-[#C49B66] text-white"
                          : "border-gray-300 hover:border-[#C49B66]"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <Button variant="link" className="text-[#C49B66] p-0 mt-2">
                  Size Guide
                </Button>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-semibold mb-2">Quantity</label>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <Button className="w-full bg-[#C49B66] hover:bg-[#B8895A] text-white py-3">
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Add to Cart - ${(product.price * quantity).toLocaleString()}
                </Button>
                <Button variant="outline" className="w-full">
                  <Heart className="h-5 w-5 mr-2" />
                  Add to Wishlist
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                <div className="text-center">
                  <Truck className="h-6 w-6 mx-auto text-[#C49B66] mb-1" />
                  <p className="text-xs text-gray-600">Free Shipping</p>
                </div>
                <div className="text-center">
                  <RotateCcw className="h-6 w-6 mx-auto text-[#C49B66] mb-1" />
                  <p className="text-xs text-gray-600">30-Day Returns</p>
                </div>
                <div className="text-center">
                  <Shield className="h-6 w-6 mx-auto text-[#C49B66] mb-1" />
                  <p className="text-xs text-gray-600">Lifetime Warranty</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
