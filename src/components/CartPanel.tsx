"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";

export default function CartPanel() {
  const [isOpen, setIsOpen] = useState(false);

  // Example toggler (in a real app, this state would be global/context)
  // For demo, we attach a global event listener or just let it be openable from elsewhere.
  // We'll expose a global open function for simplicity in this demo.
  if (typeof window !== "undefined") {
    (window as any).toggleCart = () => setIsOpen(!isOpen);
  }

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] transition-opacity duration-500 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Panel */}
      <div 
        className={`fixed top-4 bottom-4 right-4 w-[90%] md:w-[450px] bg-white text-black z-[101] rounded-[32px] shadow-2xl p-6 flex flex-col transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? "translate-x-0" : "translate-x-[120%]"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-black flex items-center gap-2">
            <ShoppingBag />
            YOUR CART
          </h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto pr-2 space-y-6">
          {/* Sample Item */}
          <div className="flex gap-4 items-center group">
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-gray-100">
              <Image src="/mango-bowl.png" alt="Bowl" fill className="object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold">Mango Sunrise</h3>
              <p className="text-sm text-gray-500 mb-2">Extra Coconut</p>
              <div className="font-bold">$12.99</div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 bg-gray-50 rounded-full p-2 border border-gray-100">
              <button className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors"><Plus size={14} /></button>
              <span className="font-bold text-sm">1</span>
              <button className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors"><Minus size={14} /></button>
            </div>
          </div>
        </div>

        {/* Footer / Checkout */}
        <div className="border-t pt-6 mt-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-500">Subtotal</span>
            <span className="font-bold">$12.99</span>
          </div>
          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-500">Shipping</span>
            <span className="font-bold">Calculated at next step</span>
          </div>
          
          <button className="magnetic w-full py-4 rounded-full bg-black text-white font-bold text-lg hover:scale-[1.02] transition-transform">
            CHECKOUT
          </button>
        </div>
      </div>
    </>
  );
}
