
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Heart, 
  Search, 
  ShoppingBag, 
  Star, 
  Play, 
  Shield, 
  Truck, 
  RotateCcw,
  Instagram,
  Facebook,
  X,
  Menu
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ProductGallery from "@/components/ProductGallery";
import ProductDetail from "@/components/ProductDetail";
import Navigation from "@/components/Navigation";
import Cart from "@/components/Cart";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import VideoSection from "@/components/VideoSection";
import ReviewsSection from "@/components/ReviewsSection";
import SocialProof from "@/components/SocialProof";
import TrustBadges from "@/components/TrustBadges";

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showNewsletter, setShowNewsletter] = useState(false);

  useEffect(() => {
    // Show newsletter popup after 3 seconds
    const timer = setTimeout(() => {
      setShowNewsletter(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#F6F2ED] text-black">
      {/* Promotion Banner */}
      <div className="bg-[#C49B66] text-white text-center py-2 text-sm">
        Free worldwide shipping on orders over $500
      </div>

      <Navigation onCartOpen={() => setIsCartOpen(true)} />
      
      <main>
        <HeroSection />
        <ProductGallery onProductSelect={setSelectedProduct} />
        <TrustBadges />
        <VideoSection />
        <ReviewsSection />
        <SocialProof />
      </main>

      <Footer />

      {/* Cart Drawer */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetail 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}

      {/* Newsletter Popup */}
      <Newsletter 
        isOpen={showNewsletter} 
        onClose={() => setShowNewsletter(false)} 
      />
    </div>
  );
};

export default Index;
