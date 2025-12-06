import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="w-full  flex justify-center items-center  overflow-hidden relative">
      
      {/* Grid Container (The Top/Bottom lines sit on these borders) */}
      <div className="w-full border-y border-white/10 relative">
        
        {/* ==================== 
             4. TOP LASER LINE 
           ==================== */}
        <div className="absolute top-0 left-0 w-full flex justify-center z-20">
          {/* The sharp line */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#6c716f] to-transparent opacity-50"></div>
          {/* The blurred glow (hanging down) */}
          <div className="absolute top-0 w-1/2 h-[50px] bg-[#676e6c] blur-[60px] opacity-20"></div>
        </div>

        {/* Vertical borders for the center content */}
        <div className="max-w-7xl mx-auto border-x border-white/10 relative">
          
          {/* Main Content Area */}
          <div className="relative py-10 px-6 md:px-12 text-center overflow-hidden">
            
            {/* 1. Background Subtle Glow (Behind Text) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>

            {/* 2. Text Content */}
            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              
              {/* Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-[1.1]">
                Ready to take control <br className="hidden md:block" />
                of your crypto?
              </h2>

              {/* Subtext */}
              <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-medium">
                Join thousands of users who trust Cryptix for secure, seamless, <br className="hidden md:block" />
                and efficient cryptocurrency transactions.
              </p>

              {/* 3. Glowing Button */}
              <div className="pt-8">
                <button className="group relative inline-flex items-center gap-2 px-8 py-4 bg-[#1bf1a1] text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(27,241,161,0.4)]">
                  <span className="relative z-10">Get started now</span>
                  <ArrowUpRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  
                  {/* Internal button glow/shine effect */}
                  <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* ======================= 
             4. BOTTOM LASER LINE 
           ======================= */}
        <div className="absolute bottom-0 left-0 w-full flex justify-center z-20">
            {/* The sharp line */}
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#1bf1a1] to-transparent opacity-50"></div>
            {/* The blurred glow (rising up) */}
            <div className="absolute bottom-0 w-1/2 h-[50px] bg-[#1bf1a1] blur-[60px] opacity-20"></div>
        </div>

      </div>
      
    </section>
  );
};

export default CTASection;