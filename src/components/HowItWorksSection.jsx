import React, { useRef, useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

// Custom Hook for detecting when an element is in view
const useInView = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // Trigger only once
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
};

const HowItWorksSection = () => {
  const [headerRef, headerVisible] = useInView();

  return (
    <section className="text-white border px-3 lg:px-0 border-[#1d1d22]" id='how-it-works'>

      {/* Header Section */}
      <div className="border-b border-[#1d1d22]">
        <div
          ref={headerRef}
          className={`max-w-[1184px] mx-auto flex flex-col lg:flex-row text-center lg:text-start items-start lg:items-end border-l border-r border-[#1d1d22] transition-all duration-700 ease-out
            ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
          `}
        >
          {/* Left side */}
          <div className="border-[#1d1d22] border-r w-full lg:max-w-4xl p-6 lg:pr-20">
            <h2 className="text-[24px] lg:text-[40px] font-normal  tracking-wide text-[#f5f5f5] mb-2">
              How It Works
            </h2>
            <p className=" text-[16px] md:text-base lg:text-md leading-relaxed text-[#d5d5d5] font-light tracking-wide">
              A simple, fast, and secure platform to manage your cryptocurrencies in just a few steps.
            </p>
          </div>

          {/* Right side CTA */}
          <div className="w-full lg:w-[52.2%] ">
            <div className=" hidden lg:flex border-[#1d1d22] py-9 w-full"></div>

            <a
              href="#"
              className="flex items-center justify-center lg:justify-start gap-3 p-6 border-t border-[#1d1d22] text-[#00ffb2] font-medium group hover:bg-green-400/5 transition-colors duration-300 "
            >
              Create account now
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

        </div>
      </div>

      {/* Three Steps Grid */}
      <div className="max-w-[1184px] mx-auto grid grid-cols-1 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-800 border-l border-r border-[#1d1d22] ">

        {/* Card 1: Left Side Glow */}
        <StepCard
          number="1"
          title="Create your account"
          description="Sign up easily and secure your profile in just a few steps."
          image="https://framerusercontent.com/images/8RXktcqw0OFHZYhz2pBHj5wAQ.png?scale-down-to-1024&width=1440&height=1080"
          delay={0}
        
          customGlow="absolute -top-[165px] -left-[80px] w-[396px] h-[396px] bg-[#fff] rounded-full blur-[79px] opacity-[0.08] z-[2] pointer-events-none"
        />

        {/* Card 2: Center Glow */}
        <StepCard
          number="2"
          title="Fund your wallet"
          description="Deposit your cryptos or make a transfer to start trading."
          image="https://framerusercontent.com/images/h8kNOBrYHUwyj1XhxL3Hi3k.png?scale-down-to-1024&width=1440&height=1080"
          delay={100}
         
          customGlow="absolute -top-[188px] left-1/2 -translate-x-1/2 w-[396px] h-[396px] bg-[#fff] rounded-full blur-[79px] opacity-[0.08] z-[2] pointer-events-none"
        />

        {/* Card 3: Right Side Glow */}
        <StepCard
          number="3"
          title="Buy, sell, or convert"
          description="Enjoy the simplicity of a platform that makes every transaction seamless in real-time."
          image="https://framerusercontent.com/images/miiIJ7oMUdFOKJLBBVDKoDIlS4.png?scale-down-to-1024&width=1440&height=1080"
          delay={200}
         
          customGlow="absolute -top-[240px] -right-[91px] w-[396px] h-[396px] bg-[#fff] rounded-full blur-[79px] opacity-[0.08] z-[2] pointer-events-none"
        />

      </div>
    </section>
  );
};

// Updated Component accepting customGlow
const StepCard = ({ number, title, description, image, delay, customGlow }) => {
  const [ref, visible] = useInView();

  return (
    <div className="relative group">

      {/* Image Area */}
      <div className={`relative mb-6 overflow-hidden `}>
        
        {/* 🔥 Custom Glow Effect Rendered Here 🔥 */}
        {customGlow && <div className={customGlow}></div>}

        {/* Image */}
        <img
          src={image}
          alt={title}
          className="relative z-10 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
        />

        {/* Number Badge */}
        <span className="absolute top-4 left-4 z-20 backdrop-blur-md bg-black/40 p-2 h-12 w-12 text-lg font-semibold text-white rounded-full flex items-center justify-center shadow-[inset_0_0_10px_rgba(255,255,255,0.1)] border border-white/5">
          {number}
        </span>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#05090a] to-transparent z-10"></div>
      </div>

      {/* Text Area */}
      <div
        ref={ref}
        style={{ transitionDelay: `${delay}ms` }}
        className={`px-5 pb-10 pt-2 transition-all duration-700 ease-out transform
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
      >
        <h3 className="text-xl font-medium mb-3 text-[#f5f5f5]">{title}</h3>
        <p className="font-normal tracking-wide text-[#d5d5d5]  text-[16px] leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default HowItWorksSection;