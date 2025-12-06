import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tailwind classes for hover + background
  const buttonClass = `px-4 py-2 rounded-lg transition-colors duration-300 ${
    scrolled
      ? "bg-[#00ffb2] text-black  hover:shadow-[0_0_20px_#00ffb2]" 
      : " hover:bg-white/20 text-white"
  }`;

  // Smooth Scroll Function
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // Mobile menu বন্ধ করার জন্য
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "backdrop-blur-md shadow-lg" : ""
      }`}
      style={{
        backgroundColor: scrolled
          ? "rgba(8, 7, 14, 0.6)" // Solid when scrolled
          : "#0E0E12", // Transparent initially
      }}
    >
      <div className="w-full max-w-7xl mx-auto text-white">
        <div className="py-4 flex items-center justify-between px-6 md:px-0">
          
          {/* Logo + Desktop Menu */}
          <div className="flex gap-10 items-center">
            <div className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 17L12 22L22 17" stroke="#1bf1a1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="#1bf1a1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#1bf1a1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-xl font-semibold">Cryptix</span>
            </div>

            {/* DESKTOP MENU LINKS */}
            <ul className="hidden md:flex items-center gap-10 text-sm">
              <li 
                onClick={() => handleScrollTo("why-cryptix")} 
               
                className="cursor-pointer hover:text-[#1bf1a1] transition-colors"
              >
                Why Cryptix?
              </li>
              <li
                 onClick={() => handleScrollTo("Cryptos")} 
                className="cursor-pointer hover:text-gray-300">
                Cryptos</li>
              <li 
                 onClick={() => handleScrollTo("how-it-works")}
                 className="cursor-pointer hover:text-gray-300"
              >
                How it works
              </li>
              <li
                onClick={() => handleScrollTo("TestimonialGrid")} className="cursor-pointer hover:text-gray-300">
                Testimonials
              </li>
              <li
                onClick={() => handleScrollTo("FAQ")}
                className="cursor-pointer hover:text-gray-300">
                FAQ
              </li>
            </ul>
          </div>

          {/* Desktop Button */}
          <button className={`${buttonClass} hidden md:block`}>Use template</button>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setOpen(!open)} className="focus:outline-none text-white">
              {open ? (
                // Close Icon (X)
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              ) : (
                // Hamburger Icon
                <>
                  <div className="w-6 h-0.5 bg-white mb-1"></div>
                  <div className="w-6 h-0.5 bg-white mb-1"></div>
                  <div className="w-6 h-0.5 bg-white"></div>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <ul className="md:hidden flex flex-col gap-4 px-6 pb-4 text-sm bg-[#0E0E12] border-t border-white/10">
            <li 
              onClick={() => handleScrollTo("why-cryptix")}
              className="cursor-pointer hover:text-[#1bf1a1] py-2 border-b border-white/5"
            >
              Why Cryptix?
            </li>
            <li className="cursor-pointer hover:text-gray-300 py-2">Cryptos</li>
            <li className="cursor-pointer hover:text-gray-300 py-2">How it works</li>
            <li className="cursor-pointer hover:text-gray-300 py-2">Testimonials</li>
            <li className="cursor-pointer hover:text-gray-300 py-2">FAQ</li>
            <li>
              <button className={`w-full ${buttonClass} mt-2`}>Use template</button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;