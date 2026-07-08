"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "#flavors", label: "Flavour" },
  { href: "#products", label: "All Product" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [activeTab, setActiveTab] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["flavors", "products", "about", "contact"];
      let current = "Home";
      
      if (window.scrollY < 200) {
        current = "Home";
      } else {
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
              const link = NAV_LINKS.find(l => l.href === `#${section}`);
              if (link) current = link.label;
            }
          }
        }
      }

      setActiveTab(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 md:py-8 text-white bg-black/15 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border-b border-white/5 md:border-transparent transition-all">
      {/* Logo */}
      <div className="flex-1">
        <Link 
          href="/" 
          className="magnetic inline-flex items-center justify-center px-6 h-12 rounded-full border border-white/20 hover:border-white/50 transition-colors"
          data-cursor-text=""
        >
          <span className="font-bold text-lg">BOWLZ</span>
        </Link>
      </div>

      {/* Centered Links */}
      <div className="hidden md:flex flex-[2] lg:flex-1 justify-center items-center gap-2 lg:gap-8 text-sm lg:text-base font-medium">
        {NAV_LINKS.map((link) => {
          const isActive = activeTab === link.label;
          return (
            <Link 
              key={link.label}
              href={link.href} 
              onClick={() => setActiveTab(link.label)}
              className={`magnetic px-4 lg:px-5 py-2 transition-colors whitespace-nowrap rounded-full ${
                isActive ? "bg-white text-black" : "hover:text-white/70"
              }`}
              data-cursor-text=""
            >
              {link.label}
            </Link>
          );
        })}
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
