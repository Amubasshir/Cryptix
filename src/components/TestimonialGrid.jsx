import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Danielle R.",
    role: "Blockchain enthusiast",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    quote: "Cryptix makes buying and converting crypto incredibly intuitive. No more juggling between platforms, everything is here fully optimized.",
  },
  {
    id: 2,
    name: "Michael T.",
    role: "DeFi Investor",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    quote: "The security features are unmatched. I finally feel safe managing my portfolio. The interface is clean, dark, and exactly what I needed.",
  },
  {
    id: 3,
    name: "Sarah L.",
    role: "Day Trader",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    quote: "Fast execution speeds and low fees. I've tried a dozen exchanges, but this design and performance combo is currently unbeatable.",
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
  hidden: { 
    opacity: 0, 
    y: 15, 
    filter: "blur(8px)" 
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)", 
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100
    }
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
    <div className="w-full border px-3 lg:px-0 border-gray-800 text-white selection:bg-white/20" id='TestimonialGrid'>
      
      <div className="border-x border-white/10">
        
        {/* Header Section */}
        <div className="text-center">
          <div className="py-5 text-center border-l border-r max-w-[1184px] mx-auto border-white/10">
            <h2 className="text-[24px] lg:text-[40px] font-normal leading-9 mb-4 text-white">
              Trusted by Crypto Enthusiasts Worldwide
            </h2>
            <p className="text-zinc-400 text-[16px] md:text-base leading-5 font-medium max-w-6xl mx-auto lg:px-0 px-3">
              Join a growing community of investors who choose Cryptix for its seamless experience, security, and premium design.
            </p>
          </div>
        </div>

        <div className="max-w-[1184px] mx-auto border-x border-white/10">
          {/* Grid Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[480px]">
            
            {/* Left: Active Testimonial Card */}
            <div className="lg:col-span-2 p-8 md:p-12 lg:border-r border-white/10 relative overflow-hidden">
              <div className="absolute -top-[585px] -left-[183px] w-[949px] h-[949px] bg-[#fff] opacity-[0.08] blur-[88px] rounded-full pointer-events-none"></div>

              <AnimatePresence mode='wait'>
                <motion.div 
                  key={currentIndex}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex flex-col h-full justify-between"
                >
                  
                  {/* Top Content */}
                  <div>
                    <motion.div variants={fadeInVariants} className="w-14 h-14 rounded-full overflow-hidden mb-8">
                      <img 
                        src={currentTestimonial.image} 
                        alt={currentTestimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </motion.div>

                    <blockquote className="text-[20px] md:text-2xl lg:text-3xl font-normal leading-relaxed text-zinc-100">
                      <span className="text-zinc-500 mr-2">"</span>
                      {words.map((word, i) => (
                        <motion.span
                          key={i}
                          variants={wordVariants}
                          className="inline-block mr-2"
                        >
                          {word}
                        </motion.span>
                      ))}
                      <span className="text-zinc-500 ml-1">"</span>
                    </blockquote>
                  </div>

                  {/* Bottom: Author Info */}
                  <motion.div variants={fadeInVariants} className="mt-12 flex items-end justify-between">
                    <div>
                      <div className="font-bold text-white text-lg">{currentTestimonial.name}</div>
                      <div className="text-zinc-500 text-[16px] font-normal mt-1">{currentTestimonial.role}</div>
                    </div>
                    <div className="text-zinc-600 text-sm font-mono px-3 py-1">
                      {currentIndex + 1}/{testimonials.length}
                    </div>
                  </motion.div>

                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: Navigation */}
            {/* Flex Container: Default row (tablet/mobile), lg:flex-col (desktop) */}
            <div className="col-span-1 flex lg:flex-col w-full">
              
              {/* Empty Space filler (Desktop only) */}
              <div className="flex-grow hidden lg:block border-t border-white/10"></div>

              {/* Previous Button */}
              <button 
                onClick={handlePrev}
                // UPDATE: flex-1 ensures equal width on tablet/mobile, lg:flex-none prevents vertical stretching on desktop
                className="flex-1 lg:flex-none group flex items-center justify-between lg:px-8 px-6 py-8 border-t border-r border-white/10 hover:bg-white/5 transition-colors duration-200 text-left"
              >
                <span className="flex items-center gap-3 text-zinc-400 group-hover:text-white transition-colors font-bold">
                  <ChevronLeft size={20} />
                  Previous
                </span>
              </button>

              {/* Next Button */}
              <button 
                onClick={handleNext}
                // UPDATE: flex-1 ensures equal width on tablet/mobile, lg:flex-none prevents vertical stretching on desktop
                className="flex-1 lg:flex-none group flex items-center justify-between px-9 py-8 hover:bg-white/5 transition-colors duration-200 text-right border-t border-white/10"
              >
                <span className="w-full flex items-center justify-end gap-3 text-zinc-400 group-hover:text-white transition-colors font-bold">
                  Next
                  <ChevronRight size={20} />
                </span>
              </button>
              
            </div>
          </div>

          {/* Decorative Line */}
          <div className="h-px w-full bg-white/10"></div>
        </div>
      </div>

    </div>
  );
};

export default TestimonialGrid;