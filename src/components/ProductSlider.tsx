"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Parallax } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const SLIDES = [
  {
    id: 1,
    name: "Berry Blast",
    color: "#F86E73",
    image: "/slider-berry.jpg",
    desc: "A powerful mix of strawberries, raspberries, and açaí.",
    price: "$11.99",
  },
  {
    id: 2,
    name: "Kiwi Kick",
    color: "#8ED94D",
    image: "/slider-kiwi.jpg",
    desc: "Fresh green kiwi mixed with matcha and spirulina.",
    price: "$13.99",
  },
  {
    id: 3,
    name: "Dragon Fruit",
    color: "#D64AFF",
    image: "/slider-dragon.jpg",
    desc: "Vibrant pitaya blended with coconut water and chia seeds.",
    price: "$14.99",
  },
];

export default function ProductSlider() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="relative w-full h-[100vh] min-h-[850px] md:min-h-[1050px] lg:min-h-[800px] lg:h-[800px] overflow-hidden bg-[#1A1A1A] text-white py-16 lg:py-24" id="flavors">
      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <h2 className="text-[25vw] font-black leading-none whitespace-nowrap text-center opacity-10">FLAVORS</h2>
      </div>

      <Swiper
        modules={[Navigation, Parallax]}
        speed={800}
        parallax={true}
        grabCursor={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-full h-full max-w-7xl mx-auto px-6"
      >
        {SLIDES.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center gap-12">
              <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left w-full px-4 lg:px-0" data-swiper-parallax="-300" data-swiper-parallax-opacity="0">
                <h3 className="text-6xl md:text-7xl lg:text-8xl font-black mb-4 md:mb-6 leading-tight" style={{ color: slide.color }}>
                  {slide.name}
                </h3>
                <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-lg opacity-80 leading-relaxed">{slide.desc}</p>
                <div className="text-3xl md:text-4xl font-bold mb-8">{slide.price}</div>
                <button 
                  className="magnetic px-8 py-4 rounded-full font-bold text-black bg-white hover:scale-105 transition-transform shadow-xl"
                  data-cursor-text="ADD"
                >
                  QUICK ADD
                </button>
              </div>
              
              <div className="flex-1 flex justify-center" data-swiper-parallax="300" data-swiper-parallax-scale="0.8" data-swiper-parallax-opacity="0">
                <div 
                  className="relative w-[220px] h-[220px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] bg-white p-2 lg:p-4 rounded-full"
                >
                  <div className={`relative w-full h-full rounded-full overflow-hidden bg-white`}>
                    <Image src={slide.image} alt={slide.name} fill sizes="(max-width: 1024px) 350px, 450px" className="object-cover" priority />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <div className="absolute bottom-6 md:bottom-12 right-6 md:right-12 flex gap-4 z-10">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="magnetic w-14 h-14 rounded-full border-2 border-white/50 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
          data-cursor-text=""
        >
          <ArrowLeft size={24} />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="magnetic w-14 h-14 rounded-full border-2 border-white/50 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
          data-cursor-text=""
        >
          <ArrowRight size={24} />
        </button>
      </div>
    </section>
  );
}
