import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full text-white pt-24 ">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Main Title */}
       <h1 className="text-4xl md:text-6xl lg:text-[82px] font-medium leading-tight">
  Take Control of
  <span className="block">Your Digital Assets</span>
</h1>

        {/* Subtext */}
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Cryptix offers a seamless, secure experience for managing your digital assets.
          Instant transactions, optimized fees, and premium design.
        </p>

        {/* Button */}
        <div className="mt-8">
          <button className="bg-emerald-500 hover:bg-emerald-600 transition px-6 py-3 rounded-full text-black font-medium">
            Get started now →
          </button>
        </div>

        {/* Trust Rating */}
        <div className="mt-6">
          <p className="text-gray-400 text-sm">They trust us</p>
          <div className="flex justify-center mt-2 text-yellow-400 text-lg">
            ★★★★★ <span className="text-white ml-2 text-sm">4.9</span>
          </div>
        </div>
      </div>

      {/* Dashboard Preview */}
      <div className="mt-16 flex justify-center">
        <div className="relative max-w-7xl w-full">
       
          <div
          className="absolute -top-4 left-0 right-0 h-20
                     bg-emerald-500/50  blur-3xl rounded-full z-20"
        >
        </div>

  
       
          <img
            src="https://framerusercontent.com/images/6AfF1TCZ0fgDvIyRPSrmwJXP9Hc.png?width=2880&height=1770"
            alt="Dashboard preview"
            className="relative rounded-xl border-t-4 border-emerald-500/50 w-full"
          />
        </div>
      </div>

      {/* Bottom Text */}
     <div className="max-w-5xl mx-auto px-6 text-center mt-16">
  <p className="text-gray-300 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
    Simplicity, performance, and security,
    empowering you to navigate the digital world
    with confidence and agility.
  </p>
</div>

    </section>
  );
};

export default HeroSection;



