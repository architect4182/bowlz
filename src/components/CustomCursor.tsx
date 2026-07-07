"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorTextRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorText = cursorTextRef.current;
    if (!cursor || !cursorText) return;

    // Center cursor initially
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(cursorText, { xPercent: -50, yPercent: -50 });

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out",
      });
      gsap.to(cursorText, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("magnetic")
      ) {
        setIsHovering(true);
        gsap.to(cursor, {
          scale: 3,
          backgroundColor: "rgba(255, 255, 255, 1)",
          mixBlendMode: "difference",
          duration: 0.3,
          ease: "power2.out",
        });
        
        if (target.dataset.cursorText) {
          cursorText.innerText = target.dataset.cursorText;
          gsap.to(cursorText, {
            opacity: 1,
            scale: 1,
            duration: 0.2,
          });
          gsap.to(cursor, {
            scale: 4,
          });
        }
      } else {
        setIsHovering(false);
        gsap.to(cursor, {
          scale: 1,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          mixBlendMode: "normal",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(cursorText, {
          opacity: 0,
          scale: 0.5,
          duration: 0.2,
        });
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-white/80 pointer-events-none z-[9999]"
        style={{ mixBlendMode: "normal" }}
      />
      <div
        ref={cursorTextRef}
        className="fixed top-0 left-0 pointer-events-none z-[10000] text-black text-[10px] font-bold tracking-widest opacity-0 scale-50"
      ></div>
    </>
  );
}
