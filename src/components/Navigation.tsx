
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  ShoppingBag, 
  Heart, 
  User, 
  Menu,
  X 
} from "lucide-react";

interface NavigationProps {
  onCartOpen: () => void;
}

const Navigation = ({ onCartOpen }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#F6F2ED] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-serif font-bold text-[#C49B66]">
              Lustre Rings
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-black hover:text-[#C49B66] transition-colors">
              Rings
            </a>
            <a href="#" className="text-black hover:text-[#C49B66] transition-colors">
              Collections
            </a>
            <a href="#" className="text-black hover:text-[#C49B66] transition-colors">
              Our Story
            </a>
            <a href="#" className="text-black hover:text-[#C49B66] transition-colors">
              Care Guide
            </a>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search luxury rings..."
                className="pl-10 bg-white border-gray-300 focus:border-[#C49B66]"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={onCartOpen}>
              <ShoppingBag className="h-5 w-5" />
              <Badge className="absolute -top-2 -right-2 bg-[#C49B66] text-white text-xs">
                2
              </Badge>
            </Button>
            
            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <Input
                type="text"
                placeholder="Search luxury rings..."
                className="bg-white border-gray-300"
              />
              <a href="#" className="text-black hover:text-[#C49B66] transition-colors">
                Rings
              </a>
              <a href="#" className="text-black hover:text-[#C49B66] transition-colors">
                Collections
              </a>
              <a href="#" className="text-black hover:text-[#C49B66] transition-colors">
                Our Story
              </a>
              <a href="#" className="text-black hover:text-[#C49B66] transition-colors">
                Care Guide
              </a>
              <div className="flex space-x-4 pt-4">
                <Button variant="outline" size="sm">
                  <Heart className="h-4 w-4 mr-2" />
                  Wishlist
                </Button>
                <Button variant="outline" size="sm">
                  <User className="h-4 w-4 mr-2" />
                  Account
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
