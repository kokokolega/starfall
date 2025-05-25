
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-serif font-bold text-[#C49B66] mb-4">
              Lustre Rings
            </h3>
            <p className="text-gray-300 mb-6">
              Crafting timeless luxury with ethically sourced materials. 
              Each piece tells a story of love, commitment, and exceptional artisanship.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-[#C49B66]">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-[#C49B66]">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-[#C49B66]">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-[#C49B66] transition-colors">Our Story</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#C49B66] transition-colors">Ring Collections</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#C49B66] transition-colors">Custom Design</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#C49B66] transition-colors">Care Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#C49B66] transition-colors">Size Chart</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-[#C49B66] transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#C49B66] transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#C49B66] transition-colors">Order Tracking</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#C49B66] transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#C49B66] transition-colors">Warranty</a></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe for exclusive offers and new collection updates
            </p>
            
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button 
                className="w-full bg-[#C49B66] hover:bg-[#B8895A] text-white"
              >
                Subscribe
              </Button>
            </div>

            {/* Contact Info */}
            <div className="mt-6 space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>hello@lustrerings.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[#C49B66] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#C49B66] transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-[#C49B66] transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-[#C49B66] transition-colors">GDPR</a>
            </div>
            
            <p className="text-sm text-gray-400">
              © 2024 Lustre Rings. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
