"use client";

import React from "react";
import { Shield, Zap, TrendingUp, MonitorPlay } from "lucide-react";
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
const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    variants={fadeUp(delay)}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    className="flex flex-col items-start p-6 md:p-8 border-b md:border-b-0 border-gray-800 md:border-r last:border-r-0 hover:bg-white/[0.02] transition-colors duration-300 h-full"
  >
    <div className="p-3 mb-4 rounded-lg bg-gray-800/50 border border-gray-700 group-hover:border-[#1bf1a1]/50 transition-colors">
      <Icon className="w-6 h-6 text-[#1bf1a1]" />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
  </motion.div>
);

const WhyCryptix = () => {
  return (
    <section id="why-cryptix" className="w-full  pt-24  text-white">
      
      {/* Header Text */}
      <div className="text-center px-6">
        <motion.h2
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl font-bold mb-4"
        >
          Why Choose Cryptix?
        </motion.h2>

        <motion.p
          variants={fadeUp(0.25)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-lg text-gray-400 max-w-2xl mx-auto"
        >
          Benefits designed to provide a seamless, secure, and accessible experience for all users.
        </motion.p>
      </div>

      {/* Grid Section */}
      <div className="border-t border-b border-gray-800 mt-16">
        <div className="max-w-7xl mx-auto border-x border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={Shield}
              title="Maximum Security"
              description="Your assets are protected with cutting-edge security protocols."
              delay={0.35}
            />
            <FeatureCard
              icon={Zap}
              title="Instant Transactions"
              description="Execute your transactions in real-time, without delays."
              delay={0.45}
            />
            <FeatureCard
              icon={TrendingUp}
              title="Optimized Fees"
              description="Benefit from some of the lowest fees on the market."
              delay={0.55}
            />
            <FeatureCard
              icon={MonitorPlay}
              title="Premium Interface"
              description="An elegant, intuitive design that's easy to use, even for beginners."
              delay={0.65}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCryptix;