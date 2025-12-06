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

// 1. Container Variants (Stagger Control)
const cardVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04, // প্রতিটি শব্দের মাঝে 0.04 সেকেন্ড গ্যাপ
      delayChildren: 0.1,    // কার্ড লোড হওয়ার একটু পর টেক্সট শুরু হবে
    }
  },
  exit: {
    opacity: 0,
    y: -10,
    filter: "blur(5px)",
    transition: { duration: 0.3 }
  }
};

// 2. Word Variants (Blur to Sharp Effect)
const wordVariants = {
  hidden: { 
    opacity: 0, 
    y: 15, 
    filter: "blur(8px)" // শুরুতে ব্লার থাকবে
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)", // শেষে শার্প হবে
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100
    }
  }
};

// 3. Image & Info Variants (Simple Fade)
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
  // টেক্সটকে শব্দে ভাগ করা
  const words = currentTestimonial.quote.split(" ");

  return (
    <div className="w-full border-t border-b border-gray-800 text-white  selection:bg-white/20" id='TestimonialGrid'>
      
      <div className=" border-x border-white/10">
        
        {/* Header Section */}
        <div className=" text-center border-b border-white/10 px-6">
      <div className="py-15 text-center  border-l border-r max-w-[1184px] mx-auto  border-white/10 ">
       <h2 className="text-3xl md:text-4xl font-medium leading-9 mb-4 text-white">
            Trusted by Crypto Enthusiasts Worldwide
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-9 font-medium max-w-6xl mx-auto">
           Join a growing community of investors who choose Cryptix for its seamless experience, security, and premium design.
          </p>
          </div>
        </div>
          <div className="max-w-[1184px] mx-auto border-x border-white/10">
        {/* Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[480px]">
          
          {/* Left: Active Testimonial Card */}
          <div className="lg:col-span-2 p-8 md:p-12  lg:border-r border-white/10 relative  overflow-hidden">
               <div className="absolute -top-60 -left-50 w-[600px] h-[600px] bg-[#3f3f3f] opacity-10 blur-[150px] rounded-full pointer-events-none"></div>
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
                  {/* Avatar Animation */}
                  <motion.div variants={fadeInVariants} className="w-14 h-14 rounded-full overflow-hidden border border-white/10 mb-8">
                    <img 
                      src={currentTestimonial.image} 
                      alt={currentTestimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Word-by-Word Animated Quote */}
                  <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed text-zinc-100">
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
                    <div className="text-zinc-500 text-sm mt-1">{currentTestimonial.role}</div>
                  </div>
                  <div className="text-zinc-600 text-sm font-mono  px-3 py-1  ">
                    {currentIndex + 1}/{testimonials.length}
                  </div>
                </motion.div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Navigation */}
          <div className="col-span-1 flex flex-col  ">
            
            {/* Empty Space filler */}
            <div className="flex-grow hidden lg:block "></div>

            {/* Buttons */}
            <button 
              onClick={handlePrev}
              className="group flex items-center justify-between px-8 py-8 border-y border-white/10 hover:bg-white/5 transition-colors duration-200 text-left"
            >
              <span className="flex items-center gap-3 text-zinc-400 group-hover:text-white transition-colors font-bold">
                <ChevronLeft size={20} />
                Previous
              </span>
            </button>

            <button 
              onClick={handleNext}
              className="group flex items-center justify-between px-8 py-8 hover:bg-white/5 transition-colors duration-200 text-right"
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