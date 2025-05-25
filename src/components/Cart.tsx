
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart = ({ isOpen, onClose }: CartProps) => {
  const cartItems = [
    {
      id: 1,
      name: "Eterna Ring",
      price: 1499,
      quantity: 1,
      size: "7",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=200&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Luna Solitaire",
      price: 899,
      quantity: 1,
      size: "6",
      image: "https://images.unsplash.com/photo-1596944924591-1bb59f101c82?q=80&w=200&auto=format&fit=crop"
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + shipping;

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}`}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      {/* Cart Drawer */}
      <div className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold">Shopping Cart</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-600">Your cart is empty</p>
              <Button 
                className="mt-4 bg-[#C49B66] hover:bg-[#B8895A]"
                onClick={onClose}
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">Size: {item.size}</p>
                    <p className="text-lg font-bold text-[#C49B66]">
                      ${item.price.toLocaleString()}
                    </p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <Plus className="h-3 w-3" />
                      </Button>
                      <Button variant="ghost" size="sm" className="ml-auto text-red-600">
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Cart Summary */}
        {cartItems.length > 0 && (
          <div className="border-t p-6 space-y-4">
            {/* Discount Code */}
            <div>
              <Input
                placeholder="Discount code"
                className="mb-2"
              />
              <Button variant="outline" size="sm" className="w-full">
                Apply Code
              </Button>
            </div>

            {/* Summary */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
              </div>
              {subtotal > 500 && (
                <div className="text-green-600 text-xs">
                  🎉 You qualify for free shipping!
                </div>
              )}
              <div className="flex justify-between font-bold text-lg border-t pt-2">
                <span>Total:</span>
                <span>${total.toLocaleString()}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <Button 
              size="lg" 
              className="w-full bg-[#C49B66] hover:bg-[#B8895A] text-white"
            >
              Secure Checkout
            </Button>
            
            <p className="text-xs text-center text-gray-600">
              🔒 SSL secured checkout
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
