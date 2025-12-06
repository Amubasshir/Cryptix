"use client";

import React from "react";
import { Home, Zap, Minimize2, Monitor } from "lucide-react";
import { motion } from "framer-motion";

// Animation Variant
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, delay, ease: "easeOut" },
  },
});

// Feature Card Component
const FeatureCard = ({ icon: Icon, title, description, delay, className }) => (
  <motion.div
    variants={fadeUp(delay)}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    // Responsive Padding: p-6 on mobile, p-8 on desktop
    // Responsive Borders: Handled via className prop passed from parent
    className={`flex flex-col items-start p-6 md:p-8 transition-colors duration-300 h-full group border-gray-800 ${className}`}
  >
    {/* Icon Container */}
    <div className="w-16 h-16 mb-6 md:mb-8 rounded-full border border-gray-800 flex items-center justify-center transition-colors shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] group-hover:border-white/20 group-hover:bg-white/[0.02]">
      <Icon strokeWidth={1.5} className="w-8 h-8 text-white" />
    </div>
    
    <h3 className="text-sm font-bold tracking-[0.08em] mb-3 md:mb-4 text-white uppercase">
      {title}
    </h3>
    <p className="text-sm md:text-base font-medium text-gray-400 leading-relaxed max-w-xs">
      {description}
    </p>
  </motion.div>
);

const WhyCryptix = () => {
  return (
    <section id="why-cryptix" className="w-full  md:pt-24  text-white">
      
      {/* Header Text */}
      <div className="text-center px-4 md:px-6 mb-12 md:mb-20">
        <motion.h2
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl md:text-5xl font-medium mb-4 md:mb-6 tracking-tight"
        >
          Why Choose Cryptix?
        </motion.h2>

        <motion.p
          variants={fadeUp(0.25)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Benefits designed to provide a seamless, secure, and accessible experience for all users.
        </motion.p>
      </div>

      {/* Grid Section */}
      <div className="border-t border-b border-gray-800">
        {/* max-w updated for responsive margins */}
        <div className="max-w-[1184px] mx-auto border-x border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            
            <FeatureCard
              icon={Home} 
              title="Maximum Security"
              description="Your assets are protected with cutting-edge security protocols."
              delay={0.35}
              // Borders: Bottom on mobile, Right on Desktop. 
              // Tablet: Right border on item 1.
              className="border-b md:border-b lg:border-b-0 md:border-r lg:border-r"
            />
            
            <FeatureCard
              icon={Zap}
              title="Instant Transactions"
              description="Execute your transactions in real-time, without delays."
              delay={0.45}
              // Tablet: No Right border (end of row 1). Bottom border exists.
              // Desktop: Right border exists.
              className="border-b md:border-r-0 lg:border-r lg:border-b-0"
            />
            
            <FeatureCard
              icon={Minimize2}
              title="Optimized Fees"
              description="Benefit from some of the lowest fees on the market."
              delay={0.55}
              // Tablet: Right border exists. No bottom border (end of column).
              className="border-b md:border-b-0 md:border-r lg:border-r last:border-b-0"
            />
            
            <FeatureCard
              icon={Monitor}
              title="Premium Interface"
              description="An elegant, intuitive design that's easy to use."
              delay={0.65}
              // Tablet & Desktop: No borders (Last item).
              className="md:border-r-0 border-b-0"
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCryptix;