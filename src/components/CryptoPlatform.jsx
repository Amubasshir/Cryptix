"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import CryptoTickerGrid from "./CryptoTickerGrid"; // আপনার ফোল্ডারে এই ফাইলটি থাকতে হবে

// Animation variant (রিইউজেবল এনিমেশন)
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, delay, ease: "easeOut" },
  },
});

const CryptoPlatform = () => {
  return (
    <section 
      id="Cryptos" 
      className="w-full  border-t border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto border-x border-gray-800">
        
        <div className="grid grid-cols-1 lg:grid-cols-12">

          {/* Left Column: Text & CTA */}
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            // flex flex-col justify-between ব্যবহার করা হয়েছে যাতে বাটন নিচে থাকে
            className="lg:col-span-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-gray-800 "
          >
            {/* Text Content */}
            <div className="p-8  mb-10">
              <motion.h2
                variants={fadeUp(0.2)}
                className="text-3xl md:text-4xl font-medium mb-6 text-white"
              >
                All Cryptos, One Platform
              </motion.h2>

              <motion.p
                variants={fadeUp(0.35)}
                className="text-md text-gray-400 leading-relaxed max-w-md"
              >
                Buy, sell, and convert all major cryptocurrencies on a single platform. 
                A smooth experience with no compromises.
              </motion.p>
            </div>

            {/* CTA Button (Bottom aligned) */}
            <motion.div
              variants={fadeUp(0.45)}
            >
              <a
                href="#"
                className="flex items-center gap-3 p-5 border-t border-gray-800 text-[#1bf1a1] font-semibold group hover:bg-white/[0.02] transition-colors duration-300 "
              >
                <span>Buy crypto now</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Ticker Grid */}
          <motion.div
            variants={fadeUp(0.55)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 overflow-hidden items-center flex"
          >
            {/* এখানে আপনার CryptoTickerGrid কম্পোনেন্ট রেন্ডার হবে */}
            <CryptoTickerGrid />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CryptoPlatform;