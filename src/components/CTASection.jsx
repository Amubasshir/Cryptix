"use client";

import React, { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

// Animation Variants
const fadeUpVariant = (delay = 0) => ({
  hidden: { 
    opacity: 0, 
    y: 40, // 40px নিচে থাকবে শুরুতে
    filter: "blur(4px)" // হালকা ব্লার
  },
  visible: { 
    opacity: 1, 
    y: 0, // নিজের জায়গায় আসবে
    filter: "blur(0px)",
    transition: { 
      duration: 0.8, 
      delay: delay, 
      ease: [0.25, 0.4, 0.25, 1] // Smooth easing
    }
  }
});

// Horizontal Line Animation (Center to Sides)
const lineVariant = (delay = 0) => ({
  hidden: { opacity: 0, scaleX: 0 },
  visible: { 
    opacity: 1, 
    scaleX: 1, 
    transition: { duration: 1, delay: delay, ease: "easeInOut" } 
  }
});

const CTASection = () => {
  const containerRef = useRef(null);
  // 'once: true' মানে একবার স্ক্রলে আসলে অ্যানিমেশন হবে, বারবার হবে না
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={containerRef} 
      className="w-full flex justify-center items-center overflow-hidden relative "
    >
      
      {/* Grid Container */}
      <div className="w-full relative">
        
        {/* ==================== 
             4. TOP LASER LINE 
           ==================== */}
        <div className="absolute top-0 left-0 w-full flex justify-center z-20">
          {/* Animated Sharp Line */}
          <motion.div 
            variants={lineVariant(0)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#6c716f] to-transparent opacity-50 origin-center"
          ></motion.div>
          
          {/* Glow Effect */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.2 } : { opacity: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="absolute top-0 w-1/2 h-[50px] bg-[#676e6c] blur-[60px]"
          ></motion.div>
        </div>

        {/* Content Area with Borders */}
        <div className="max-w-[1184px] mx-auto border-x border-white/10 relative">
          
          <div className="relative py-20 px-6 md:px-12 text-center overflow-hidden">
            
            {/* 1. Background Glow */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 1.5 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none"
            ></motion.div>

            {/* 2. Text Content */}
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              
              {/* Heading Animation */}
              <motion.h2 
                variants={fadeUpVariant(0.1)}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-[1.1]"
              >
                Ready to take control <br className="hidden md:block" />
                of your crypto?
              </motion.h2>

              {/* Subtext Animation */}
              <motion.p 
                variants={fadeUpVariant(0.25)}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-medium"
              >
                Join thousands of users who trust Cryptix for secure, seamless, <br className="hidden md:block" />
                and efficient cryptocurrency transactions.
              </motion.p>

              {/* 3. Button Animation */}
              <motion.div 
                variants={fadeUpVariant(0.4)}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="pt-4"
              >
                <button className="group relative inline-flex items-center gap-2 px-6 py-3 bg-[#1BF1A1] text-black font-medium  rounded-full transition-all duration-300 hover:scale-3d hover:shadow-[0_0_0px_6px_#00ffb27a] cursor-pointer">
                           <span className="relative z-10">Get started now</span>
                           <ArrowUpRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                          
                         </button>
              </motion.div>

            </div>

          </div>
        </div>

        {/* =======================  
             4. BOTTOM LASER LINE 
           ======================= */}
        <div className="absolute bottom-0 left-0 w-full flex justify-center z-20">
            {/* Animated Sharp Line */}
            <motion.div 
               variants={lineVariant(0.5)}
               initial="hidden"
               animate={isInView ? "visible" : "hidden"}
               className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#1bf1a1] to-transparent opacity-50 origin-center"
            ></motion.div>
            
            {/* Glow Effect */}
            <motion.div 
               initial={{ opacity: 0 }}
               animate={isInView ? { opacity: 0.2 } : { opacity: 0 }}
               transition={{ duration: 1.5, delay: 0.7 }}
               className="absolute bottom-0 w-1/2 h-[50px] bg-[#1bf1a1] blur-[60px]"
            ></motion.div>
        </div>

      </div>
      
    </section>
  );
};

export default CTASection;