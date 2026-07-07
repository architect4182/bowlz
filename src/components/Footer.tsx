import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white pt-16 md:pt-24 pb-8 px-6 md:px-12 border-t border-white/10" id="contact">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 mb-16 md:mb-24">
        <div className="flex-1">
          <h3 className="text-4xl font-black mb-6">STAY FRESH.</h3>
          <p className="text-gray-400 mb-8 max-w-sm">Join the BOLWZ club for exclusive drops, secret menu items, and fresh news.</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 w-full max-w-md">
            <input 
              type="email" 
              placeholder="ENTER YOUR EMAIL" 
              className="bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white outline-none focus:border-white/50 transition-colors w-full"
            />
            <button className="magnetic bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors shrink-0">
              JOIN
            </button>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 md:gap-32 w-full md:w-auto">
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-gray-400 mb-2">MENU</h4>
            <a href="#products" className="hover:text-red-400 transition-colors font-medium">Bowls</a>
            <a href="#flavors" className="hover:text-red-400 transition-colors font-medium">Smoothies</a>
            <a href="#" className="hover:text-red-400 transition-colors font-medium">Toppings</a>
            <a href="#" className="hover:text-red-400 transition-colors font-medium">Nutrition</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-gray-400 mb-2">SOCIAL</h4>
            <a href="#" className="hover:text-red-400 transition-colors flex items-center gap-1 font-medium">Instagram <ArrowUpRight size={16}/></a>
            <a href="#" className="hover:text-red-400 transition-colors flex items-center gap-1 font-medium">TikTok <ArrowUpRight size={16}/></a>
            <a href="#" className="hover:text-red-400 transition-colors flex items-center gap-1 font-medium">Twitter <ArrowUpRight size={16}/></a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col items-center border-t border-white/10 pt-16">
        <h1 className="text-[20vw] md:text-[15vw] font-black leading-none tracking-tighter text-white/5 selection:bg-transparent pointer-events-none">
          BOLWZ
        </h1>
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm mt-8 gap-4 text-center md:text-left">
          <p>© 2026 BOLWZ. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
