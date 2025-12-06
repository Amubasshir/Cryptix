import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full max-w-7xl mx-auto text-white">
      <div className="px-6 py-4 flex items-center justify-between">
        
        <div className="flex gap-10 items-center">
           {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-teal-400 rounded-md rotate-12"></div>
          <span className="text-xl font-semibold">Cryptix</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-sm">
          <li className="cursor-pointer hover:text-gray-300">Why Cryptix?</li>
          <li className="cursor-pointer hover:text-gray-300">Cryptos</li>
          <li className="cursor-pointer hover:text-gray-300">How it works</li>
          <li className="cursor-pointer hover:text-gray-300">Testimonials</li>
          <li className="cursor-pointer hover:text-gray-300">FAQ</li>
        </ul>
       </div>

        {/* Desktop Button */}
        <button className="hidden md:block bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition">
          Use template
        </button>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setOpen(!open)} className="focus:outline-none">
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-4 text-sm">
          <li className="cursor-pointer hover:text-gray-300">Why Cryptix?</li>
          <li className="cursor-pointer hover:text-gray-300">Cryptos</li>
          <li className="cursor-pointer hover:text-gray-300">How it works</li>
          <li className="cursor-pointer hover:text-gray-300">Testimonials</li>
          <li className="cursor-pointer hover:text-gray-300">FAQ</li>
          <li>
            <button className="w-full bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition">
              Use template
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
