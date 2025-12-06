"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Animation Variant: Blur + Fade + Up
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
    <section className="w-full text-white pt-24 pb-20 overflow-hidden relative" ref={heroRef}>
      
      {/* Background Gradient Spot (Optional for atmosphere) */}
      {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#1bf1a1]/5 blur-[120px] rounded-full pointer-events-none"></div> */}

      <div className="max-w-5xl mx-auto px-6 text-center relative ">

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
          <button className="group relative inline-flex items-center gap-2 px-8 py-4 bg-[#1bf1a1] text-black font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(27,241,161,0.4)]">
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
          className="mt-10 flex flex-col items-center gap-3"
        >
          <p className=" text-xs font-light uppercase tracking-[0.2em]">They trust us</p>
          
          <div className="flex items-center gap-3 px-4 py-2">
            {/* Stars */}
            <div className="flex text-[#1bf1a1] text-lg">★★★★★</div>
            
            {/* Divider */}
            <div className="w-px h-4 "></div>

            {/* Rating Text + Google Icon */}
            <div className="flex items-center gap-2">
              <span className="text-white text-sm font-bold">4.9</span>
              <span className="text-zinc-400 text-sm">on</span>
              {/* FIXED SVG HERE */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="text-white"
              >
                <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"></path>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
   
      {/* 5. Dashboard Preview (Full Image Width Animation) */}
      <motion.div
        variants={blurFadeUp(0.7)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mt-20 flex justify-center px-4"
      >
        <div className="relative max-w-6xl w-full rounded-xl border border-white/10 shadow-2xl ">
        
          
          {/* Top Glow Ambient */}

          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-3/4 h-30 bg-[#1bf1a1]/20 blur-[60px] rounded-full pointer-events-none z-50"></div>

          <div className="relative max-w-6xl w-full rounded-xl border-t-4 border-white/10 shadow-2xl  overflow-hidden">
            
          {/* Top Border Gradient */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#1bf1a1] to-transparent z-20 opacity-90"></div>

          {/* Moving Scanner Line */}
          <motion.div
            className="absolute top-0 h-[2px] w-[100px] bg-gradient-to-r from-transparent via-[#ffffff] to-transparent z-30 "
            style={{ boxShadow: "0 0 20px #1bf1a1, 0 0 10px white" }}
            initial={{ left: "-200px" }} 
            animate={{ left: "100%" }} 
            transition={{
              duration: 3,
              ease: "linear",
              repeat: Infinity,
              repeatDelay: 0.5
            }}
          />

          {/* Dashboard Image */}
          <img
            src="https://framerusercontent.com/images/6AfF1TCZ0fgDvIyRPSrmwJXP9Hc.png?width=2880&height=1770"
            alt="Dashboard preview"
            className="relative z-10 w-full h-auto opacity-90 hover:opacity-100 transition-opacity duration-500"
          />
        </div>
        </div>
      </motion.div>

      {/* 6. Bottom Statement Text */}
      <motion.div
        variants={blurFadeUp(0.9)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto px-6 text-center mt-24"
      >
        <p className="text-white text-2xl md:text-3xl lg:text-4xl font-normal leading-snug">
          Simplicity, performance, and security, <br />
          empowering you to navigate the digital world <br />
          <span className="text-white font-medium">with confidence and agility.</span>
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;