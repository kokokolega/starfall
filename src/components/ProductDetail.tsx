
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  X, 
  Heart, 
  ShoppingBag, 
  Star, 
  Shield, 
  Truck, 
  RotateCcw,
  Plus,
  Minus
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

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
}

const ProductDetail = ({ product, onClose }: ProductDetailProps) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showSizeChart, setShowSizeChart] = useState(false);

  const images = [product.image, product.hoverImage];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-serif font-bold">Product Details</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Image Thumbnails */}
            <div className="flex gap-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-[#C49B66]' : 'border-gray-200'
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex gap-2 mb-2">
                {product.isFeatured && (
                  <Badge className="bg-[#C49B66] text-white">Featured</Badge>
                )}
                {product.isNew && (
                  <Badge className="bg-green-600 text-white">New</Badge>
                )}
              </div>
              <h1 className="text-3xl font-serif font-bold mb-2">{product.name}</h1>
              <p className="text-3xl font-bold text-[#C49B66] mb-4">
                ${product.price.toLocaleString()}
              </p>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">(127 reviews)</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="text-gray-700 leading-relaxed">
                Eterna is a symbol of eternal love. Forged in 18k gold and crowned with a 
                brilliant-cut, conflict-free diamond. Made by hand in Jaipur by master artisans 
                who have perfected their craft over generations.
              </p>
            </div>

            {/* Material Info */}
            <div>
              <h3 className="font-semibold mb-2">Material</h3>
              <p className="text-gray-700">{product.material}</p>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold">Size</h3>
                <Button 
                  variant="link" 
                  size="sm"
                  onClick={() => setShowSizeChart(!showSizeChart)}
                  className="text-[#C49B66]"
                >
                  Size Chart
                </Button>
              </div>
              
              <div className="grid grid-cols-5 gap-2">
                {product.size.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    className={`h-12 ${
                      selectedSize === size 
                        ? "bg-[#C49B66] text-white" 
                        : "border-gray-300 hover:border-[#C49B66]"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>

              {showSizeChart && (
                <Card className="mt-4">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Ring Size Guide</h4>
                    <div className="text-sm space-y-1">
                      <div className="flex justify-between">
                        <span>Size 5:</span>
                        <span>15.7mm diameter</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Size 6:</span>
                        <span>16.5mm diameter</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Size 7:</span>
                        <span>17.3mm diameter</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-semibold mb-3">Quantity</h3>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button 
                size="lg" 
                className="w-full bg-[#C49B66] hover:bg-[#B8895A] text-white"
                disabled={!selectedSize}
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" size="lg">
                  Buy Now
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="h-5 w-5 mr-2" />
                  Wishlist
                </Button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              <div className="text-center">
                <Truck className="h-6 w-6 mx-auto mb-2 text-[#C49B66]" />
                <p className="text-xs font-medium">Free Delivery</p>
                <p className="text-xs text-gray-600">2-5 days</p>
              </div>
              <div className="text-center">
                <RotateCcw className="h-6 w-6 mx-auto mb-2 text-[#C49B66]" />
                <p className="text-xs font-medium">30-Day Returns</p>
                <p className="text-xs text-gray-600">Easy process</p>
              </div>
              <div className="text-center">
                <Shield className="h-6 w-6 mx-auto mb-2 text-[#C49B66]" />
                <p className="text-xs font-medium">Lifetime Warranty</p>
                <p className="text-xs text-gray-600">Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
