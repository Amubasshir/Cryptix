import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full text-white border-t border-white/10 ">
      
      {/* Container with vertical borders to match previous sections */}
      <div className="max-w-[1184px] mx-auto border-x border-white/10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-25 px-6 py-16 md:px-12 md:py-20">
          
          {/* LEFT SECTION: Brand & Credits (Spans 7 columns on desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-12 lg:space-y-0">
            
            {/* Top: Brand Info */}
            <div className="space-y-3">
              {/* Logo */}
              <div className="flex items-center gap-2">
                {/* Custom Green Icon */}
               <img src="https://framerusercontent.com/images/4ApMrTB8uizXZ8qPNGF601tK8.svg" alt="" />
               
              </div>

              <p className="text-[16px] leading-relaxed max-w-sm font-normal">
                Secure, fast, and seamless crypto trading.<br />
                Cryptix makes digital assets effortless.
              </p>
            </div>

            {/* Bottom: Credits */}
            <div className="flex items-center gap-2 text-zinc-400 text-sm">
              <span>Created by</span>
              <div className="w-6 h-6 rounded-full bg-zinc-800 overflow-hidden">
                {/* Placeholder Avatar */}
                <img 
                  src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                  alt="Arthur" 
                  className="w-full h-full object-cover grayscale opacity-80" 
                />
              </div>
              <span className="text-white font-medium">Arthur</span>
              <span>in Framer</span>
            </div>
          </div>

          {/* RIGHT SECTION: Links (Spans 5 columns on desktop) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            
            {/* Column 1: Navigation */}
            <div>
              <h3 className="text-white font-medium mb-6">Navigation</h3>
              <ul className="space-y-4 text-zinc-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Why Cryptix?</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cryptos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">How it works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">404</a></li>
              </ul>
            </div>

            {/* Column 2: Socials */}
            <div>
              <h3 className="text-white font-medium mb-6">Socials</h3>
              <ul className="space-y-4 text-zinc-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Twitter (X)</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;