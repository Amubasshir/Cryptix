"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react"; // Imported the missing icon

// Blur + fade + upward motion variant
const blurFadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      delay,
      ease: "easeOut"
    }
  }
});

const HeroSection = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true, margin: "-50px" });

  return (
    <section className="w-full text-white pt-24 pb-20  overflow-hidden" ref={heroRef}>
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">

        {/* 1. Main Title */}
        <motion.h1
          variants={blurFadeUp(0.1)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-4xl md:text-6xl lg:text-[82px] font-medium leading-[1.1] tracking-tight"
        >
          Take Control of
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
            Your Digital Assets
          </span>
        </motion.h1>

        {/* 2. Subtext */}
        <motion.p
          variants={blurFadeUp(0.25)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-zinc-400 mt-6 max-w-xl mx-auto text-lg leading-relaxed"
        >
          Cryptix offers a seamless, secure experience for managing your digital assets.
          Instant transactions, optimized fees, and premium design.
        </motion.p>

        {/* 3. Button */}
        <motion.div
          variants={blurFadeUp(0.4)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-10"
        >
          <button className="group relative inline-flex items-center gap-2 px-8 py-4 bg-[#1bf1a1] text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(27,241,161,0.4)]">
            <span className="relative z-10">Get started now</span>
            <ArrowUpRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </motion.div>

        {/* 4. Trust Rating */}
        <motion.div
          variants={blurFadeUp(0.55)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-8 flex flex-col items-center gap-2"
        >
          <p className="text-zinc-500 text-sm font-medium uppercase tracking-widest">Trusted by Investors</p>
          <div className="flex items-center gap-2 text-[#1bf1a1]">
            <div className="flex text-lg">★★★★★</div>
            <span className="text-white text-sm font-bold">4.9/5.0</span>
          </div>
        </motion.div>
      </div>

      {/* 5. Dashboard Preview with Laser Effect */}
      <motion.div
        variants={blurFadeUp(0.7)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mt-20 flex justify-center px-4"
      >
        <div className="relative max-w-6xl w-full">
          
          {/* Top Glow (Ambient) */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#1bf1a1]/20 blur-[80px] rounded-full -z-10"></div>
          
          {/* Laser Line on Top Border */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#1bf1a1] to-transparent opacity-70 z-20"></div>

          {/* Image */}
          <img
            src="https://framerusercontent.com/images/6AfF1TCZ0fgDvIyRPSrmwJXP9Hc.png?width=2880&height=1770"
            alt="Dashboard preview"
            className="relative rounded-xl border border-white/10 w-full shadow-2xl bg-[#0a0a0a]"
          />
        </div>
      </motion.div>

      {/* 6. Bottom Statement Text */}
      <motion.div
        variants={blurFadeUp(0.9)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto px-6 text-center mt-24"
      >
        <p className="text-zinc-300 text-2xl md:text-3xl lg:text-4xl font-light leading-snug">
          Simplicity, performance, and security, <br />
          empowering you to navigate the digital world <br />
          <span className="text-white font-medium">with confidence and agility.</span>
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;