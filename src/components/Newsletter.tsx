
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
      }, 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg max-w-md w-full p-8 relative">
        {/* Close Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onClose}
          className="absolute top-4 right-4"
        >
          <X className="h-5 w-5" />
        </Button>

        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="text-center mb-6">
              <div className="bg-[#C49B66] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Gift className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-serif font-bold mb-2">
                Get 10% Off Your First Order
              </h2>
              <p className="text-gray-600">
                Join our exclusive newsletter and be the first to know about new collections, 
                artisan stories, and special offers.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-[#C49B66] hover:bg-[#B8895A] text-white"
              >
                Get My 10% Discount
              </Button>
            </form>

            {/* Footer */}
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                By subscribing, you agree to our privacy policy. 
                Unsubscribe anytime.
              </p>
            </div>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-serif font-bold mb-2 text-green-600">
              Welcome to Lustre!
            </h2>
            <p className="text-gray-600 mb-4">
              Check your email for your 10% discount code.
            </p>
            <p className="text-sm text-gray-500">
              This window will close automatically...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
