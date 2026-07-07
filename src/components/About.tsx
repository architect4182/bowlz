export default function About() {
  return (
    <section className="w-full bg-[#111] text-white py-16 md:py-32 px-6 md:px-12 overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-8">
            REAL FRUIT.<br />NO <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">BULLSH*T.</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-medium max-w-2xl leading-relaxed mb-10">
            We source the most vibrant ingredients on the planet to craft smoothie bowls that don't just look like a masterpiece—they taste like one. 
            No artificial syrups, no ice fillers. Just pure, unapologetic flavor.
          </p>
          <button 
            className="magnetic px-8 py-4 rounded-full font-bold text-black bg-white hover:scale-105 transition-transform"
            data-cursor-text="EXPLORE"
          >
            OUR STORY
          </button>
        </div>
        <div className="flex-1 relative w-full aspect-square md:aspect-auto md:h-[600px] rounded-[40px] overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent z-10 rounded-[40px]" />
          <img 
            src="/about-image.jpg" 
            alt="Fresh Ingredients" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>
      </div>
    </section>
  )
}
