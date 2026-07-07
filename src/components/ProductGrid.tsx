"use client";

import Image from "next/image";
import { Heart, Plus } from "lucide-react";

const PRODUCTS = [
  { id: 1, name: "Acai Classic", price: "$10.99", image: "/grid-acai.jpg" },
  { id: 2, name: "Green Detox", price: "$11.99", image: "/grid-green.jpg" },
  { id: 3, name: "Protein Power", price: "$12.99", image: "/grid-protein.jpg" },
  { id: 4, name: "Sunset Passion", price: "$13.99", image: "/grid-passion.jpg" },
];

export default function ProductGrid() {
  return (
    <section className="w-full bg-white text-black py-16 md:py-24 px-6 md:px-12" id="products">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black mb-16 text-center">BEST SELLERS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="group relative bg-[#F5F5F7] rounded-[24px] p-6 cursor-pointer hover:-translate-y-4 hover:shadow-2xl transition-all duration-500 ease-out"
            >
              {/* Wishlist Button */}
              <button
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:scale-110 transition-all shadow-sm"
              >
                <Heart size={20} />
              </button>

              {/* Image Container */}
              <div className="relative w-full aspect-square mb-6 rounded-2xl overflow-hidden bg-[#1A1A1A]">
                <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-500 font-bold text-lg mb-6">{product.price}</p>

                {/* Quick Add */}
                <button
                  className="magnetic w-full py-4 rounded-full bg-black text-white font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
                  data-cursor-text="ADD"
                >
                  <Plus size={20} />
                  QUICK ADD
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
