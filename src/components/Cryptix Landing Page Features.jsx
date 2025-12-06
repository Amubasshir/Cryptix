import React from 'react';
import { Shield, Zap, TrendingUp, MonitorPlay, ArrowUpRight } from 'lucide-react';
import './Sectiongap'
import Sectiongap from './Sectiongap';
import CryptoTickerGrid from './CryptoTickerGrid';
// --- Card Component for "Why Choose Cryptix?" ---
const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="flex flex-col items-start p-6  border border-gray-700/50 hover:border-emerald-600 transition-colors duration-300 h-full">
        <div className="p-3 mb-4 rounded-lg bg-gray-800/50 border border-gray-700">
            <Icon className="w-6 h-6 text-emerald-400" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
    </div>
);

// --- Small Crypto Card Component ---
const CryptoCard = ({ symbol, name, price, change, iconColor, bgColor }) => (
    <div className={`flex flex-col p-4 w-40 h-40 rounded-xl shadow-lg border border-gray-700/50 flex-shrink-0 snap-center`}
         style={{ backgroundColor: 'rgba(26, 30, 34, 0.8)' }}>
        
        {/* Header (Icon and Name) */}
        <div className="flex items-center justify-between mb-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${bgColor} ${iconColor} shadow-md`}>
                {symbol.charAt(0)}
            </div>
            <div className="text-xs font-semibold uppercase text-gray-300">{symbol}</div>
        </div>

        {/* Price */}
        <h4 className="text-2xl font-bold mb-1">{price}</h4>
        
        {/* Name */}
        <p className="text-xs text-gray-400 truncate">{name}</p>

        {/* Change */}
        <div className="mt-auto flex justify-between items-center text-xs font-medium">
            <span className="text-emerald-400">{change}</span>
            <span className="text-gray-500">
                {change.startsWith('+') ? '+1.71' : '-0.65'}%
            </span>
        </div>
    </div>
);

// --- Main Component ---
const CryptixFeatures = () => {
    // Data setup for the small crypto cards (matching the screenshot's design/colors)
    const cryptoAssets = [
        { symbol: 'SOL', name: 'Solana', price: '$136.285', change: '-$0.65', iconColor: 'text-white', bgColor: 'bg-indigo-600' },
        { symbol: 'DASH', name: 'Dash', price: '$48.825', change: '+$1.71', iconColor: 'text-white', bgColor: 'bg-blue-500' },
        { symbol: 'XRP', name: 'XRP', price: '$2.06845', change: '+$1.88', iconColor: 'text-white', bgColor: 'bg-gray-500' },
        { symbol: 'BTC', name: 'Bitcoin', price: '$90545', change: '+$1.71', iconColor: 'text-white', bgColor: 'bg-orange-500' },
        // Repeat assets to simulate the horizontal scroll seen in the screenshot
        { symbol: 'SOL', name: 'Solana', price: '$136.285', change: '-$0.65', iconColor: 'text-white', bgColor: 'bg-indigo-600' },
        { symbol: 'DASH', name: 'Dash', price: '$48.825', change: '+$1.71', iconColor: 'text-white', bgColor: 'bg-blue-500' },
        { symbol: 'XRP', name: 'XRP', price: '$2.06845', change: '+$1.88', iconColor: 'text-white', bgColor: 'bg-gray-500' },
    ];

    return (
        <div className="min-h-screen  text-white ">
            
            {/* --- Section 1: Why Choose Cryptix? --- */}
            <section className=" text-center  pt-24">
                <h2 className="text-4xl font-bold mb-4">Why Choose Cryptix?</h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                    Benefits designed to provide a seamless, secure, and accessible experience for all users.
                </p>
                  <div className=" border-t border-b border-gray-800 mt-12">
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  text-left max-w-7xl mx-auto">
                    <FeatureCard
                        icon={Shield}
                        title="Maximum Security"
                        description="Your assets are protected with cutting-edge security protocols."
                    />
                    <FeatureCard
                        icon={Zap}
                        title="Instant Transactions"
                        description="Execute your transactions in real-time, without delays."
                    />
                    <FeatureCard
                        icon={TrendingUp}
                        title="Optimized Fees"
                        description="Benefit from some of the lowest fees on the market."
                    />
                    <FeatureCard
                        icon={MonitorPlay}
                        title="Premium Interface"
                        description="An elegant, intuitive design that's easy to use, even for beginners."
                    />
        </div>
        </div>
      </section>
      
      <Sectiongap></Sectiongap>
              <div className=" border-t border-b border-gray-800">
            {/* --- Section 2: All Cryptos, One Platform --- */}
            <section className="max-w-7xl mx-auto  border-t border-gray-800">
                <div className="grid grid-cols-1 lg:grid-cols-12 ">
                    
                    {/* Left Column (Text) */}
                    <div className="lg:col-span-6 flex-col justify-start  border-l border-r border-gray-800">
          <div className='p-5 mb-20'>
            <h2 className="text-4xl font-bold mb-4 ">All Cryptos, One Platform</h2>
                        <p className="text-lg text-gray-400 ">
                            Buy, sell, and convert all major cryptocurrencies on a single platform. A seamless experience with no compromises.
                        </p>
                       </div>
          <div lassName=" border-t border-gray-800">
             <a href="#" className="flex items-center text-emerald-500 font-semibold group border-t p-5 border-gray-800">
                            Buy crypto now 
                            <ArrowUpRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </a>
                      </div>
                    </div>

                    {/* Right Column (Scrolling Cards) */}
                    <div className="lg:col-span-6  scrollbar-hide border-l border-r  border-gray-800">
                       
                        <CryptoTickerGrid />
          
          
                    </div>
                </div>
            </section>
      </div>
      </div>
    );
};

export default CryptixFeatures;