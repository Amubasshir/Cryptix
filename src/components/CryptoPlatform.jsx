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
      className="w-full  border px-3 lg:px-0 border-gray-800"
    >
      <div className="max-w-[1184px] mx-auto border-x border-gray-800">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 text-center lg:text-left">

          {/* Left Column: Text & CTA */}
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
           
            className="lg:col-span-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-gray-800 "
          >
            {/* Text Content */}
            <div className="p-6  mb-8">
              <motion.h2
                variants={fadeUp(0.2)}
                className="text-[24px] tracking-wide lg:text-[40px] font-normal mb-3 text-[#f5f5f5]"
              >
                All Cryptos, One Platform
              </motion.h2>

              <motion.p
                variants={fadeUp(0.35)}
                className="text-[16px] font-light  tracking-wide text-[#d5d5d5]  leading-relaxed w-full"
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
                className="flex items-center justify-center lg:justify-start gap-3 p-5 border-t border-gray-800 text-[#00ffb2] font-medium group hover:bg-green-400/5 transition-colors duration-300 "
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
           
            <CryptoTickerGrid />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CryptoPlatform;