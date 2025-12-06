import { ArrowUpRight } from 'lucide-react';
import React from 'react';

const HowItWorksSection = () => {
  return (
    <section className="text-white border-t border-b border-gray-800">

      {/* Header */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-end border-l border-r border-gray-800">

          {/* Left side */}
          <div className="border-r border-gray-800 w-full lg:max-w-4xl p-5 lg:pr-20">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-2">How It Works</h2>
            <p className="text-gray-400 text-base">
              A simple, fast, and secure platform to manage your cryptocurrencies in just a few steps.
            </p>
          </div>

          {/* Right side CTA */}
          <div className="w-full lg:w-[40%]">
            <div className="border-b border-gray-800 p-5 w-full"></div>

            <a
              href="#"
              className="hidden md:flex gap-2 justify-end items-center p-5 text-green-400 hover:text-green-300 font-medium whitespace-nowrap w-full"
            >
              Create account now
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

        </div>
      </div>

      {/* Three Steps */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-800 border-l border-r border-gray-800">

        {/* Step 1 */}
        <StepCard
          number="1"
          title="Create your account"
          description="Sign up easily and secure your profile in just a few steps."
          image="https://framerusercontent.com/images/8RXktcqw0OFHZYhz2pBHj5wAQ.png?scale-down-to=1024&width=1440&height=1080"
        />

        {/* Step 2 */}
        <StepCard
          number="2"
          title="Fund your wallet"
          description="Add funds securely using your preferred payment method."
          image="https://framerusercontent.com/images/h8kNOBrYHUwyj1XhxL3Hi3k.png?scale-down-to=1024&width=1440&height=1080"
        />

        {/* Step 3 */}
        <StepCard
          number="3"
          title="Buy, sell, or convert"
          description="Start trading cryptocurrencies instantly and safely."
          image="https://framerusercontent.com/images/miiIJ7oMUdFOKJLBBVDKoDIlS4.png?scale-down-to=1024&width=1440&height=1080"
        />

      </div>
    </section>
  );
};

const StepCard = ({ number, title, description, image }) => (
  <div className="">

    {/* Image container */}
    <div className="relative mb-6 overflow-hidden">
      <img
        src={image}
        alt=""
        className="w-full rounded-lg scale-110"
      />

      <span className="absolute top-3 left-3 bg-[#08070E] backdrop-blur-sm p-2 h-10 w-10 
                       text-sm font-semibold text-white rounded-full flex items-center justify-center">
        {number}
      </span>

      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#0E0E12] to-transparent rounded-b-lg"></div>
    </div>

    {/* Text */}
    <div className="-mt-5 p-5">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-base font-medium">{description}</p>
    </div>
  </div>
);

export default HowItWorksSection;
