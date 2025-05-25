
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Mail, Gift } from "lucide-react";

interface NewsletterProps {
  isOpen: boolean;
  onClose: () => void;
}

const Newsletter = ({ isOpen, onClose }: NewsletterProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setEmail("");
      }, 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8 relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>

          {!isSubmitted ? (
            <div className="text-center">
              <div className="bg-[#C49B66] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Gift className="h-8 w-8 text-white" />
              </div>
              
              <h2 className="text-2xl font-serif font-bold mb-2">
                Get 10% Off Your First Order
              </h2>
              
              <p className="text-gray-600 mb-6">
                Subscribe to our newsletter and be the first to know about new collections, 
                exclusive offers, and styling tips from our jewelry experts.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="text-center"
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-[#C49B66] hover:bg-[#B8895A] text-white"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Get My 10% Off Code
                </Button>
              </form>

              <p className="text-xs text-gray-500 mt-4">
                By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
              </p>
            </div>
          ) : (
            <div className="text-center">
              <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              
              <h2 className="text-2xl font-serif font-bold mb-2">
                Welcome to Lustre Rings!
              </h2>
              
              <p className="text-gray-600 mb-4">
                Check your email for your exclusive 10% off code.
              </p>
              
              <div className="bg-[#F6F2ED] rounded-lg p-4">
                <p className="font-mono text-lg font-bold text-[#C49B66]">
                  WELCOME10
                </p>
                <p className="text-sm text-gray-600">
                  Use this code at checkout
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
