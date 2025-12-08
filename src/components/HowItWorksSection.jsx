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
    <section className=" text-white border-t border-b border-gray-800" id='how-it-works'>

      {/* Header Section */}
        <div className="border-b border-gray-800">
             <div
               ref={headerRef}
               className={`max-w-[1184px] mx-auto flex flex-col lg:flex-row items-start lg:items-end border-l border-r border-gray-800 transition-all duration-700 ease-out
                 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
               `}
             >
     
               {/* Left side */}
               <div className="border-gray-800 w-full lg:max-w-4xl p-5 lg:pr-20">
                 {/* UPDATED: Responsive Text Sizes */}
                 <h2 className="text-3xl md:text-[40px]  font-normal mb-4 ">
                   How It Works
                 </h2>
                 {/* UPDATED: Responsive Text Sizes */}
                 <p className="text-white text-sm md:text-base lg:text-md leading-relaxed text-gray-400">
                   A simple, fast, and secure platform to manage your cryptocurrencies in just a few steps.
                 </p>
               </div>
     
               {/* Right side CTA */}
               <div className="w-full lg:w-[52.2%] border-l border-gray-800">
                 <div className="border-b border-gray-800 py-9 w-full"></div>
     
                 <a
                   href="#"
                   className="hidden md:flex gap-2 justify-end items-center p-5 text-[#00ffb2] font-medium whitespace-nowrap w-full transition-all duration-700 ease-out hover:bg-green-400/5"
                 >
                   Create account now
                   <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                 </a>
               </div>
     
             </div>
           </div>

      {/* Three Steps Grid */}
      <div className="max-w-[1184px] mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-800 border-l border-r border-gray-800 bg-[#05090a]">

        <StepCard
          number="1"
          title="Create your account"
          description="Sign up easily and secure your profile in just a few steps."
          image="https://framerusercontent.com/images/8RXktcqw0OFHZYhz2pBHj5wAQ.png?scale-down-to-1024&width=1440&height=1080"
          delay={0}
        />

        <StepCard
          number="2"
          title="Fund your wallet"
          description="Add funds securely using your preferred payment method."
          image="https://framerusercontent.com/images/h8kNOBrYHUwyj1XhxL3Hi3k.png?scale-down-to-1024&width=1440&height=1080"
          delay={100}
        />

        <StepCard
          number="3"
          title="Buy, sell, or convert"
          description="Start trading cryptocurrencies instantly and safely."
          image="https://framerusercontent.com/images/miiIJ7oMUdFOKJLBBVDKoDIlS4.png?scale-down-to-1024&width=1440&height=1080"
          delay={200}
        />

      </div>
    </section>
  );
};

const StepCard = ({ number, title, description, image, delay }) => {
  const [ref, visible] = useInView();

  return (
    <div className="relative group">

      {/* Image Area */}
      <div className="relative mb-6 overflow-hidden bg-[#141319]">
        {/* Image with Scale on Hover */}
        <img
          src={image}
          alt={title}
          className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Number Badge with Inner Shadow */}
        <span className="absolute top-4 left-4 backdrop-blur-md bg-black/40 p-2 h-12 w-12 text-lg font-semibold text-white rounded-full flex items-center justify-center shadow-[inset_0_0_10px_rgba(255,255,255,0.1)] border border-white/5">
          {number}
        </span>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#05090a] to-transparent"></div>
      </div>

      {/* Text Area with Fade Up Animation */}
      <div
        ref={ref}
        style={{ transitionDelay: `${delay}ms` }}
        className={`px-6 pb-10 pt-2 transition-all duration-700 ease-out transform
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
      >
        <h3 className="text-xl font-medium mb-3 text-white">{title}</h3>
        <p className="text-gray-400 text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default HowItWorksSection;