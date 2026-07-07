"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 md:py-8 text-white bg-black/15 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border-b border-white/5 md:border-transparent transition-all">
      {/* Logo */}
      <div className="flex-1">
        <Link 
          href="/" 
          className="magnetic inline-flex items-center justify-center px-6 h-12 rounded-full border border-white/20 hover:border-white/50 transition-colors"
          data-cursor-text=""
        >
          <span className="font-bold text-lg">BOLWZ</span>
        </Link>
      </div>

      {/* Centered Links */}
      <div className="hidden md:flex flex-[2] lg:flex-1 justify-center items-center gap-2 lg:gap-8 text-sm lg:text-base font-medium">
        <Link href="/" className="magnetic px-4 lg:px-5 py-2 bg-white text-black rounded-full whitespace-nowrap" data-cursor-text="">
          Home
        </Link>
        <Link href="#flavors" className="magnetic px-2 lg:px-4 py-2 hover:text-white/70 transition-colors whitespace-nowrap" data-cursor-text="">
          Flavour
        </Link>
        <Link href="#products" className="magnetic px-2 lg:px-4 py-2 hover:text-white/70 transition-colors whitespace-nowrap" data-cursor-text="">
          All Product
        </Link>
        <Link href="#about" className="magnetic px-2 lg:px-4 py-2 hover:text-white/70 transition-colors whitespace-nowrap" data-cursor-text="">
          About
        </Link>
        <Link href="#contact" className="magnetic px-2 lg:px-4 py-2 hover:text-white/70 transition-colors whitespace-nowrap" data-cursor-text="">
          Contact
        </Link>
      </div>

      {/* Cart */}
      <div className="flex-1 flex justify-end">
        <button 
          className="magnetic flex items-center gap-2 group" 
          data-cursor-text="CART"
          onClick={() => (window as any).toggleCart?.()}
        >
          <span className="font-medium hidden sm:block group-hover:opacity-70 transition-opacity">
            Cart (0)
          </span>
          <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-105 transition-transform">
            <ShoppingCart size={20} />
          </div>
        </button>
      </div>
    </nav>
  );
}
