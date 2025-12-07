"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// --- Configuration ---
const ACCENT_GREEN = "#1BF1A1";

// Existing Animation for other elements
const blurFadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, delay, ease: "easeOut" }
  }
});

// --- NEW ANIMATION VARIANTS FOR BOTTOM TEXT ---

// 1. Container: Controls the speed of the stagger
const textContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Time between each word appearing
      delayChildren: 0.9,    // Wait for the dashboard to finish animating
    },
  },
};

// 2. Child: The actual blur/fade effect for each word
const wordVariant = {
  hidden: { 
    opacity: 0, 
    filter: "blur(10px)", 
    y: 20 
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
};

const HeroSection = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true, margin: "-50px" });

  // Helper to split text into animated words
  const renderWords = (text, className = "") => {
    return text.split(" ").map((word, i) => (
      <motion.span 
        key={i} 
        variants={wordVariant} 
        className={`inline-block mr-[0.25em] ${className}`}
      >
        {word}
      </motion.span>
    ));
  };

  return (
    <section
      ref={heroRef}
      className="w-full min-h-screen text-white pt-32 pb-20 overflow-hidden relative selection:bg-[#1bf1a1] selection:text-black"
    >
      {/* 1. Ambient Background Glow */}
      <div className="absolute -top-80 -left-70 w-[600px] h-[600px] bg-[#3f3f3f] opacity-10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute top-40 -right-50 w-[400px] h-[400px] bg-[#3f3f3f] opacity-10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        
        {/* 2. Main Title */}
        <motion.h1
          variants={blurFadeUp(0.1)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-5xl md:text-7xl lg:text-[84px] font-medium leading-[1.05] tracking-tight text-white"
        >
          Take Control of
          <span className="block text-white/90">Your Digital Assets</span>
        </motion.h1>

        {/* 3. Subtext */}
        <motion.p
          variants={blurFadeUp(0.25)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-zinc-400 mt-8 max-w-[46rem] mx-auto text-lg md:text-xl leading-relaxed font-light"
        >
          Cryptix offers a seamless, secure experience for managing your digital assets.
          Instant transactions, optimized fees, and premium design.
        </motion.p>

        {/* 4. Button */}
        <motion.div
          variants={blurFadeUp(0.4)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-10"
        >
          <button className="group relative inline-flex items-center gap-2 px-6 py-3 bg-[#1BF1A1] text-black font-medium  rounded-full transition-all duration-300 hover:scale-3d hover:shadow-[0_0_0px_6px_#00ffb27a] cursor-pointer">
            <span className="relative z-10">Get started now</span>
            <ArrowUpRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            {/* <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div> */}
          </button>
        </motion.div>

        {/* 5. Trust Rating Section */}
        <motion.div
          variants={blurFadeUp(0.55)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12 flex flex-col items-center gap-3"
        >
          <p className="text-[10px] md:text-xs font-medium uppercase text-white dm-sans">
            They trust us
          </p>

          <div className="flex items-center px-5 py-2 gap-2">
           <div className="flex gap-1 text-white">
  {[...Array(5)].map((_, i) =>
    i === 4 ? (
      /* Half Star (4.5 Rating Style) */
      <svg key={i} width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        {/* 1. পুরো স্টারের আউটলাইন (Outline) */}
        <path 
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        
        {/* 2. শুধু বাম পাশ ভরাট করা (Left Half Fill) */}
        <path 
          d="M12 2 L 8.91 8.26 L 2 9.27 L 7 14.14 L 5.82 21 L 12 17.77 V 2 Z" 
          fill="currentColor" 
          stroke="none" 
        />
      </svg>
    ) : (
      /* Full Star */
      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    )
  )}
</div>

            <div className="flex items-center gap-2">
              <span className="text-white text-sm font-bold">4.9</span>
              <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#FFFFFF" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#FFFFFF" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FFFFFF" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#FFFFFF" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 6. Dashboard Preview */}
      <motion.div
        variants={blurFadeUp(0.7)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mt-24 flex justify-center px-4 relative z-10"
      >
        <div className="relative max-w-[1184px] w-full">
          {/* Background Haze */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-3/4 h-30 bg-[#1BF1A1] opacity-30 blur-[80px] rounded-full pointer-events-none"></div>

          {/* Card Container */}
          <div className="relative rounded-xl border border-white/5  shadow-2xl overflow-hidden">
            {/* Top Scanner Line */}
            <div className="absolute -top-1 left-0 right-0 mx-auto w-[70%] h-[7px] bg-gradient-to-r from-transparent via-[#feffff] to-transparent opacity-100 z-20 shadow-[0_0_60px_#afedd6]"></div>
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#1BF1A1] opacity-30 blur-[80px] rounded-full pointer-events-none z-40"></div>

            {/* Moving Scanner Beam */}
            <motion.div
              className="absolute top-0 h-[1px] w-[50px] z-30 bg-gradient-to-r from-transparent via-white to-transparent"
              style={{ boxShadow: `0 0 0 1px ${ACCENT_GREEN}`, filter: "blur(0.5px)" }}
              initial={{ left: "-200px", opacity: 0 }}
              animate={{ left: "120%", opacity: [0, 1, 1, 0] }}
              transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
            />

            {/* Image */}
            <img
              src="https://framerusercontent.com/images/6AfF1TCZ0fgDvIyRPSrmwJXP9Hc.png?width=2880&height=1770"
              alt="Dashboard preview"
              className="relative z-10 w-full h-auto opacity-90 transition-opacity duration-500 block"
            />
          </div>
        </div>
      </motion.div>

      {/* 7. Bottom Statement Text (UPDATED WITH WORD-BY-WORD ANIMATION) */}
      <motion.div
        variants={textContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto px-6 text-center mt-28 relative z-10"
      >
        <p className="text-zinc-300 text-2xl md:text-3xl lg:text-4xl font-normal leading-snug">
          {/* Line 1 */}
          {renderWords("Simplicity, performance, and security,")}
          <br className="hidden md:block" />
          
          {/* Line 2 */}
          {renderWords("empowering you to navigate the digital world")}
          <br className="hidden md:block" />
          
          {/* Line 3 (Bold) */}
          <span className="text-white font-medium">
            {renderWords("with confidence and agility.")}
          </span>
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;