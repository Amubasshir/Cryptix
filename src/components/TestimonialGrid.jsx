import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Danielle R.",
    role: "Blockchain enthusiast",
    // একাধিক ছবি (আগের মতো)
    avatars: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    ],
    quote: "“Cryptix makes crypto trading effortless. Fast transactions, low fees, and a sleek interface—exactly what I needed.”",
  },
  {
    id: 2,
    name: "Michael T.",
    role: "DeFi Investor",
    // একাধিক ছবি
    avatars: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    ],
    quote: "“Security and ease of use are my top priorities. Cryptix delivers on both with style.”",
  },
  {
    id: 3,
    name: "Sarah L.",
    role: "Day Trader",
    // এখানে মাত্র ১টি ছবি দেওয়া হলো (আপনার রিকোয়ারমেন্ট অনুযায়ী)
    avatars: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    ],
    quote: "“Cryptix makes buying and converting crypto incredibly intuitive. No more juggling between platforms, everything is here, fully optimized.”",
  }
];

const cardVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.1,
    }
  },
  exit: {
    opacity: 0,
    y: -10,
    filter: "blur(5px)",
    transition: { duration: 0.3 }
  }
};

const wordVariants = {
  hidden: { opacity: 0, y: 15, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", damping: 20, stiffness: 100 }
  }
};

const fadeInVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const TestimonialGrid = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];
  const words = currentTestimonial.quote.split(" ");

  return (
    <div className="w-full border px-3 lg:px-0 border-[#1d1d22] text-white " id='TestimonialGrid'>
      <div>
        
        {/* Header Section */}
        <div className="text-center ">
          <div className="py-7 text-center border-l border-r max-w-[1184px] mx-auto border-[#1d1d22]">
            <h2 className="text-[24px] lg:text-[40px] font-normal leading-9 mb-5 text-[#f5f5f5] tracking-wide">
              Trusted by Crypto Enthusiasts Worldwide
            </h2>
            <p className="text-[#d5d5d5] md:text-[16px] text-base leading-5 font-normal max-w-6xl mx-auto lg:px-0 px-3 ">
              Join a growing community of investors who choose Cryptix for its seamless experience, security, and premium design.
            </p>
          </div>
        </div>

        <div className="border-t border-[#1d1d22] w-full">
           <div className="max-w-[1184px] mx-auto border-x border-[#1d1d22]">
          {/* Grid Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[440px]">
            
            {/* Left: Active Testimonial Card */}
            <div className="lg:col-span-2 p-8 md:p-[40px] lg:border-r  border-[#1d1d22] relative overflow-hidden">
              <div className="absolute -top-[585px] -left-[183px] w-[949px] h-[949px] bg-[#fff] opacity-[0.08] blur-[88px] rounded-full pointer-events-none"></div>

              <AnimatePresence mode='wait'>
                <motion.div 
                  key={currentIndex}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex flex-col h-full justify-between gap-14"
                >
                  
                  {/* Avatar Section */}
                  <motion.div variants={fadeInVariants} className="flex">
                    {currentTestimonial.avatars.map((imgSrc, index) => (
                      <img 
                        key={index}
                        src={imgSrc} 
                        alt="User Avatar" 
                        className={`w-14 h-14 rounded-full object-cover border-2 border-[#1d1d22] ${index > 0 ? '-ml-5' : ''}`}
                      />
                    ))}
                  </motion.div>

                  {/* Quote */}
                  <blockquote className="text-[20px] md:text-[28px] font-normal leading-relaxed text-[#f5f5f5]">
                    {words.map((word, i) => (
                      <motion.span
                        key={i}
                        variants={wordVariants}
                        className="inline-block mr-2"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </blockquote>

                  {/* Author Info */}
                  <motion.div variants={fadeInVariants} className="flex items-end justify-between">
                    <div>
                      <div className="font-semibold text-white text-[18px]">{currentTestimonial.name}</div>
                      <div className="text-[#d5d5d5] text-[16px] font-normal mt-1">{currentTestimonial.role}</div>
                    </div>
                    <div className="text-[#d5d5d5] text-[16px] font-[dm-sans] font-medium px-3 py-1">
                      {currentIndex + 1}/{testimonials.length}
                    </div>
                  </motion.div>

                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: Navigation */}
            <div className="col-span-1 flex lg:flex-col w-full">
              
              <div className="flex-grow hidden lg:block"></div>

              <button 
                onClick={handlePrev}
                className="flex-1 lg:flex-none group flex items-center justify-between lg:px-8 px-6 py-7 border-t border-[#1d1d22] transition-colors duration-200 text-left"
              >
                <span className="flex items-center justify-end gap-3 text-[#d5d5d5] group-hover:text-white transition-colors font-normal">
                  <ChevronLeft size={20} />
                  Previous
                </span>
              </button>

              <button 
                onClick={handleNext}
                className="flex-1 lg:flex-none group flex items-center justify-between px-9 py-7 hover:bg-white/5 transition-colors duration-200 text-right border-t border-[#1d1d22]"
              >
                <span className="w-full flex items-center justify-end gap-3 text-[#d5d5d5] group-hover:text-white transition-colors font-normal">
                  Next
                  <ChevronRight size={20} />
                </span>
              </button>
              
            </div>
          </div>
          
        </div>
       </div>
      </div>

    </div>
  );
};

export default TestimonialGrid;