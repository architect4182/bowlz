"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FRUITS = [
  {
    id: 1,
    name: "MANGO",
    gradient: "from-[#FDB515] to-[#E38D00]",
    bgColor: "#FDB515",
    btnColor: "text-[#E38D00]",
    desc: "A tropical escape in every bite. Sweet mangoes, fresh coconut, and crunchy granola.",
    price: "$12.99",
    bowlImg: "/mango-bowl.png",
    scale: "scale-100"
  },
  {
    id: 2,
    name: "BERRY BLISS",
    gradient: "from-[#F86E73] to-[#E5484D]",
    bgColor: "#F86E73",
    btnColor: "text-[#E5484D]",
    desc: "A powerful mix of strawberries, raspberries, and açaí for an antioxidant boost.",
    price: "$11.99",
    bowlImg: "/strawberry-bowl.png",
    scale: "scale-[1.6]"
  },
  {
    id: 3,
    name: "KIWI KICK",
    gradient: "from-[#8ED94D] to-[#76B93B]",
    bgColor: "#8ED94D",
    btnColor: "text-[#76B93B]",
    desc: "Fresh green kiwi mixed with matcha and spirulina for a vibrant start.",
    price: "$13.99",
    bowlImg: "/kiwi-bowl.png",
    scale: "scale-[1.85]"
  },
  {
    id: 4,
    name: "PITAYA",
    gradient: "from-[#D64AFF] to-[#B82EE5]",
    bgColor: "#D64AFF",
    btnColor: "text-[#B82EE5]",
    desc: "Vibrant dragon fruit blended with coconut water and chia seeds.",
    price: "$14.99",
    bowlImg: "/pitaya-bowl.png", // Used placeholder
    scale: "scale-[1.25]"
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFruit = FRUITS[activeIndex];

  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const bowlRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Update body background color when active fruit changes
  useEffect(() => {
    document.body.style.backgroundColor = activeFruit.bgColor;
  }, [activeFruit]);

  // Initial mount animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      gsap.set(textRef.current, { scale: 0.8, opacity: 0 });
      gsap.set(bowlRef.current, { scale: 0.5, rotation: -45, opacity: 0 });
      gsap.set(contentRef.current, { x: -50, opacity: 0 });


      tl.to(containerRef.current, { opacity: 1, duration: 0.2 })
        .to(textRef.current, { scale: 1, opacity: 0.9, duration: 0.8, ease: "power3.out" }, "-=0.1")
        .to(bowlRef.current, { scale: 1, rotation: 0, opacity: 1, duration: 1, ease: "elastic.out(1, 0.7)" }, "-=0.6")
        .to(textRef.current, { opacity: 0.4, duration: 0.5 }, "-=0.4")
        .to(contentRef.current, { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.6");
    }, containerRef);
    return () => ctx.revert();
  }, []);





  // Handle fruit change animation
  const changeFruit = (dir: "next" | "prev") => {
    const newIndex = dir === "next" ? (activeIndex + 1) % FRUITS.length : (activeIndex - 1 + FRUITS.length) % FRUITS.length;

    // Animate out
    gsap.to(bowlRef.current, {
      scale: 0.5, opacity: 0, rotation: dir === "next" ? 45 : -45, duration: 0.4, ease: "power2.in"
    });
    gsap.to(textRef.current, {
      opacity: 0, scale: 0.9, y: dir === "next" ? -20 : 20, duration: 0.3, ease: "power2.in"
    });
    gsap.to(contentRef.current, {
      opacity: 0, x: -30, duration: 0.3, ease: "power2.in"
    });


    // Wait for animate out, then update state and animate in
    setTimeout(() => {
      setActiveIndex(newIndex);

      // Animate in
      gsap.fromTo(bowlRef.current,
        { scale: 0.5, opacity: 0, rotation: dir === "next" ? -45 : 45 },
        { scale: 1, opacity: 1, rotation: 0, duration: 0.8, ease: "elastic.out(1, 0.7)" }
      );
      gsap.fromTo(textRef.current,
        { opacity: 0, scale: 0.9, y: dir === "next" ? 20 : -20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
      gsap.fromTo(contentRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.6, ease: "power2.out", delay: 0.2 }
      );

    }, 400); // Wait 400ms for out animation
  };

  return (
    <div className="w-full h-[100vh] min-h-[800px] flex items-center justify-center">
      <div
        ref={containerRef}
        className={`relative w-full h-full overflow-hidden bg-gradient-to-br ${activeFruit.gradient} flex items-center opacity-0 transition-colors duration-700 ease-in-out`}
      >
        {/* Massive Background Typography */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none flex justify-center items-center">
          <h1
            ref={textRef}
            className="text-[28vw] md:text-[18vw] leading-none font-black text-white whitespace-nowrap select-none tracking-widest drop-shadow-2xl"
          >
            {activeFruit.name}
          </h1>
        </div>

        {/* Content (Centered on mobile) */}
        <div className="absolute left-0 right-0 md:left-24 bottom-12 md:bottom-20 z-20 w-full px-6 md:px-0 md:max-w-sm pointer-events-none">
          <div ref={contentRef} className="flex flex-col items-center md:items-start gap-4 md:gap-6 text-center md:text-left pointer-events-auto">
            <p className="text-white text-sm md:text-base font-medium leading-relaxed opacity-95">
              {activeFruit.desc}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full justify-center md:justify-start">
              <div className="text-white font-bold text-3xl md:text-4xl">{activeFruit.price}</div>
              <button
                className={`magnetic bg-white ${activeFruit.btnColor} px-8 py-3 rounded-full font-bold text-sm tracking-wide shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto`}
                data-cursor-text="ORDER"
              >
                ORDER NOW
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Buttons (Sides on mobile, bottom right on desktop) */}
        <div className="absolute top-[45%] md:top-auto md:bottom-20 left-0 right-0 md:left-auto md:right-24 z-30 flex justify-between md:justify-end px-4 md:px-0 w-full md:w-auto pointer-events-none md:gap-4 -translate-y-1/2 md:translate-y-0">
          <button
            onClick={() => changeFruit("prev")}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/50 hover:bg-white text-white hover:text-black flex items-center justify-center backdrop-blur-sm transition-all magnetic pointer-events-auto"
            data-cursor-text=""
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => changeFruit("next")}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/50 hover:bg-white text-white hover:text-black flex items-center justify-center backdrop-blur-sm transition-all magnetic pointer-events-auto"
            data-cursor-text=""
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Massive Centered Bowl */}
        <div className="absolute left-1/2 top-[45%] md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[280px] h-[280px] md:w-[550px] md:h-[550px] lg:w-[700px] lg:h-[700px] pointer-events-none">
          <div
            ref={bowlRef}
            className="relative w-full h-full drop-shadow-[0_40px_60px_rgba(0,0,0,0.5)] pointer-events-auto"
          >
            <div className={`relative w-full h-full transition-transform duration-700 ${activeFruit.scale}`}>
              <Image
                key={activeFruit.id}
                src={activeFruit.bowlImg}
                alt={activeFruit.name}
                fill
                sizes="(max-width: 768px) 300px, (max-width: 1024px) 550px, 700px"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
