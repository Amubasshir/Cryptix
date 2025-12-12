"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// --------------------------------------------------------------------------
// NAVBAR PART (Updated with Smooth Slide & Hamburger Animation)
// --------------------------------------------------------------------------
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const buttonClass = `px-4 py-2 rounded-full transition-colors duration-300 cursor-pointer font-medium ${
    scrolled
      ? "bg-[#00ffb2] text-black hover:shadow-[0px_0px_0px_7px_#00ffb21f]"
      : "bg-white/10 hover:bg-white/20 text-white"
  }`;

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  // --- 1. MENU SLIDE ANIMATION (From Navbar Bottom) ---
  const menuVariants = {
    initial: { 
      opacity: 0,
      y: -20,       // Starts slightly above (behind Navbar)
      height: 0,
      clipPath: "inset(0% 0% 100% 0%)" // Masking effect
    },
    animate: { 
      opacity: 1,
      y: 0,
      height: "auto",
      clipPath: "inset(0% 0% 0% 0%)",
      transition: { 
        duration: 0.5, 
        ease: [0.76, 0, 0.24, 1] // Premium Quart Ease
      } 
    },
    exit: { 
      opacity: 0,
      y: -20,
      height: 0,
      clipPath: "inset(0% 0% 100% 0%)",
      transition: { 
        duration: 0.3, 
        ease: "easeInOut" 
      } 
    }
  };

  // --- 2. TEXT STAGGER ANIMATION ---
  const containerVars = {
    animate: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
    exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
  };

  const itemVars = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.3 } },
    exit: { y: -20, opacity: 0, transition: { duration: 0.2 } }
  };

  return (
    <nav
      className={`fixed dm-sans top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled || open
          ? "bg-[#0E0E12]/90 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-[1184px] mx-auto text-white relative">
        <div className="py-4 md:py-6 flex items-center justify-between px-3 md:px-5 lg:px-0">
          
          {/* Logo */}
          <div className="flex items-center gap-8">
              <div 
            className="flex items-center gap-2 cursor-pointer z-50"
            onClick={() => window.scrollTo(0, 0)}
          >
            <img src="https://framerusercontent.com/images/4ApMrTB8uizXZ8qPNGF601tK8.svg" alt="Logo" className="w-[90%] md:w-[100%]"/>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-[24px] text-[16px] font-medium text-gray-300">
            <li onClick={() => handleScrollTo("why-cryptix")} className="cursor-pointer hover:text-[#1bf1a1] transition-colors">Why Cryptix?</li>
            <li onClick={() => handleScrollTo("Cryptos")} className="cursor-pointer hover:text-white transition-colors">Cryptos</li>
            <li onClick={() => handleScrollTo("how-it-works")} className="cursor-pointer hover:text-white transition-colors">How it works</li>
            <li onClick={() => handleScrollTo("TestimonialGrid")} className="cursor-pointer hover:text-white transition-colors">Testimonials</li>
            <li onClick={() => handleScrollTo("FAQ")} className="cursor-pointer hover:text-white transition-colors">FAQ</li>
          </ul>
        </div>

          {/* Desktop Button */}
          <button className={`${buttonClass} hidden lg:block`}>
            Use template
          </button>

          {/* --- HAMBURGER TO X ANIMATED BUTTON --- */}
          <div className="lg:hidden flex items-center z-50">
            <button
              onClick={() => setOpen(!open)}
              className="focus:outline-none text-white p-2 relative w-12 h-10 flex items-center justify-center"
            >
              <motion.div
                className="w-8 flex flex-col items-end gap-[6px]"
                animate={open ? "open" : "closed"}
              >
                {/* Top Line */}
                <motion.span
                  className="w-full h-[2px] bg-white rounded-full"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 7 } 
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Middle Line */}
                <motion.span
                  className="w-full h-[2px] bg-white rounded-full"
                  variants={{
                    closed: { opacity: 1, x: 0 },
                    open: { opacity: 0, x: 20 }
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Bottom Line */}
                <motion.span
                  className="w-full h-[2px] bg-white rounded-full "
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -7 }
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </button>
          </div>
        </div>

        {/* --- MOBILE MENU DROPDOWN (FROM BOTTOM BORDER) --- */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-menu"
              variants={menuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              // Absolute Positioning: Right below the navbar
              className="lg:hidden absolute top-[100%] left-0 w-full bg-[#0E0E12] border-b border-white/10 shadow-2xl overflow-hidden"
            >
              <motion.ul 
                variants={containerVars}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex flex-col p-6 text-[16px] font-medium"
              >
                <motion.li variants={itemVars} onClick={() => handleScrollTo("why-cryptix")} className="cursor-pointer text-[#1bf1a1] py-4 border-b border-white/5">Why Cryptix?</motion.li>
                <motion.li variants={itemVars} onClick={() => handleScrollTo("Cryptos")} className="cursor-pointer hover:text-white py-4 border-b border-white/5 text-gray-400">Cryptos</motion.li>
                <motion.li variants={itemVars} onClick={() => handleScrollTo("how-it-works")} className="cursor-pointer hover:text-white py-4 border-b border-white/5 text-gray-400">How it works</motion.li>
                <motion.li variants={itemVars} onClick={() => handleScrollTo("TestimonialGrid")} className="cursor-pointer hover:text-white py-4 border-b border-white/5 text-gray-400">Testimonials</motion.li>
                <motion.li variants={itemVars} onClick={() => handleScrollTo("FAQ")} className="cursor-pointer hover:text-white py-4 text-gray-400">FAQ</motion.li>
                
                <motion.li variants={itemVars} className="pt-6 pb-2">
                  <button className={`w-full ${buttonClass} justify-center flex`}>
                    Use template
                  </button>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};


// --------------------------------------------------------------------------
// HERO SECTION PART (Unchanged)
// --------------------------------------------------------------------------
const blurFadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, delay, ease: "easeOut" },
  },
});

const textContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.9,
    },
  },
};

const wordVariant = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const HeroContent = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true, margin: "-50px" });

  const renderWords = (text, className = "") => {
    return text.split(" ").map((word, i) => (
      <motion.span
        key={i}
        variants={wordVariant}
        className={`inline-block mr-[0.25em] ${className}`}
      >
        {word}
      </motion.span>
    ));
  };

  return (
    <section
      ref={heroRef}
      className="w-full min-h-screen text-white pt-42 lg:pt-50 pb-33 overflow-hidden relative selection:bg-[#1bf1a1] selection:text-black dm-sans "
    >
      <div className="absolute -top-[490px] -left-[395px] w-[930px] h-[930px] bg-[#fff] opacity-[0.01] blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute -top-[362px] -left-[347px] w-[694px] h-[694px] bg-[#abffe6] opacity-[0.05] blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute -top-[54px] -right-[600px] w-[930px] h-[930px] bg-[#fff] opacity-[.01] blur-[90px] rounded-full aspect-square z-0 pointer-events-none"></div>
      <div className="absolute top-[60px] -right-[504px] w-[694px] h-[694px] bg-[#abffe6] opacity-[.05] blur-[90px] rounded-full aspect-square z-0 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-5 text-center relative z-10">
        <motion.h1
          variants={blurFadeUp(0.1)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-4xl md:text-7xl lg:text-[82px] font-medium leading-[1.09]   md:leading-[1.05] tracking-wide text-white dm-sans"
        >
          Take Control of
          <span className="block text-white/90 ">Your Digital Assets</span>
        </motion.h1>

        <motion.p
          variants={blurFadeUp(0.25)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-[#d5d5d5] mt-4 max-w-[40rem] md:max-w-[42rem] mx-auto text-[18px] font-light tracking-wide dm-sans"
        >
          Cryptix offers a seamless, secure experience for managing your digital assets.
          Instant transactions, optimized fees, and premium design.
        </motion.p>

        <motion.div
          variants={blurFadeUp(0.4)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-6"
        >
          <button className="group relative inline-flex items-center gap-2 px-4 py-3 bg-[#00ffb2] text-black font-medium rounded-full transition-all duration-300 hover:scale-3d hover:shadow-[0px_0px_0px_7px_#00ffb21f] cursor-pointer">
            <span className="relative z-10">Get started now</span>
            <ArrowUpRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </motion.div>

        <motion.div
          variants={blurFadeUp(0.55)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12 flex flex-col items-center gap-3"
        >
          <p className="text-[10px] md:text-[14px] font-light  text-white dm-sans">
            They trust us
          </p>

          <div className="flex items-center px-5 gap-2">
            <div className="flex gap-1 text-white">
              {[...Array(5)].map((_, i) =>
                i === 4 ? (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 2 L 8.91 8.26 L 2 9.27 L 7 14.14 L 5.82 21 L 12 17.77 V 2 Z" fill="currentColor" stroke="none" />
                  </svg>
                ) : (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                )
              )}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-white text-[16px] font-bold">4.9</span>
              <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#FFFFFF" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#FFFFFF" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FFFFFF" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#FFFFFF" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={blurFadeUp(0.7)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mt-24 flex justify-center px-4 relative z-10"
      >
        <div className="relative max-w-[1184px] w-full">
          <div className="absolute -top-[1px] left-0 w-full flex justify-center items-center z-50">
             <div className="absolute -top-[23px] w-[80%] h-[50px] bg-[#00ffb2] blur-[55px] opacity-25"></div>
             <div className="absolute -top-[23px] w-[65%] h-[18px] bg-[#00ffb2] blur-[40px] opacity-30"></div>
             <div className="absolute w-[45%] h-[5px] bg-[#00ffb2] blur-[45px] opacity-54 "></div>
             <div className="absolute w-[30%] h-[10px] bg-white blur-[50px] opacity-80 "></div>
             <div className="absolute w-[57%] h-[1px] bg-white blur-[10px] opacity-80 "></div>
             <div className="absolute w-[50%] h-[3px] bg-[#c9f4e3] blur-[20px] opacity-75 "></div>
             <div className="relative w-[65%] lg:h-[2px] h-[1px] bg-gradient-to-r from-transparent via-white via-50% to-transparent opacity-100 shadow-[0_0_15px_rgba(255,255,255,0.8)] "></div>
          </div>

          <div className="relative rounded-2xl border border-white/10 bg-[#050505] shadow-2xl overflow-hidden">
            <motion.div
              className="absolute top-0 h-[1px] w-[50px] z-40 bg-gradient-to-r from-transparent via-white to-transparent opacity-100"
              initial={{ left: "-20%", opacity: 0 }}
              animate={{ left: "120%", opacity: [0, 1, 1, 0] }}
              transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
            />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <img
              src="https://framerusercontent.com/images/6AfF1TCZ0fgDvIyRPSrmwJXP9Hc.png?width=2880&height=1770"
              alt="Dashboard preview"
              className="relative z-10 w-full h-auto opacity-100 block"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={textContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-[57rem] w-full mx-auto px-2 text-center mt-28 relative z-10"
      >
        <p className="text-[#f5f5f5] text-[24px] lg:text-[40px] font-normal md:tracking-wide leading-[-.02em] dm-sans">
          
          {renderWords("Simplicity, performance, and security,")}
         
          {renderWords("empowering you to navigate the digital world")}

            {renderWords("with confidence and agility.")}
     
        </p>
      </motion.div>

     

    </section>
  );
};

// --------------------------------------------------------------------------
// MAIN PARENT COMPONENT
// --------------------------------------------------------------------------
const HeroWithNavbar = () => {
  return (
    <>
      <Navbar />
      <HeroContent />
    </>
  );
};

export default HeroWithNavbar;