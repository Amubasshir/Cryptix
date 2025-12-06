import React from 'react';

const cryptoData = [
  { 
    name: 'Bitcoin', symbol: 'BTC', price: 89198.38, change: 1.71, 
    logo: '₿', logoColor: 'text-yellow-500', bgColor: 'bg-orange-500', 
    fontColor: 'text-white', priceColor: 'text-gray-300', changeColor: 'text-green-500'
  },
  { 
    name: 'Solana', symbol: 'SOL', price: 132.14, change: -0.65, 
    logo: '🖈', logoColor: 'text-purple-500', bgColor: 'bg-purple-600',
    fontColor: 'text-white', priceColor: 'text-gray-300', changeColor: 'text-red-500'
  },
  { 
    name: 'Dash', symbol: 'DASH', price: 47.405, change: 1.71, 
    logo: 'Ð', logoColor: 'text-blue-500', bgColor: 'bg-blue-600', 
    fontColor: 'text-white', priceColor: 'text-gray-300', changeColor: 'text-green-500'
  },
  { 
    name: 'XRP', symbol: 'XRP', price: 2.03125, change: -1.66, 
    logo: '✕', logoColor: 'text-gray-200', bgColor: 'bg-black', 
    fontColor: 'text-white', priceColor: 'text-gray-300', changeColor: 'text-red-500'
  },
];


// Crypto Card
const CryptoCard = ({ data }) => {
  const isPositive = data.change >= 0;
  const changeColor = isPositive ? 'text-green-500' : 'text-red-500';
  const priceFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 5,
  });

  return (
    <div className="flex items-center bg-gray-900 rounded-full mx-2 min-w-[150px] shadow-lg flex-shrink-0 p-2">
      <div className={`h-8 w-8  rounded-full ${data.bgColor} text-xl font-bold flex justify-center items-center`}>
        <span className={data.logoColor}>{data.logo}</span>
      </div>
      <div className="ml-2 flex-grow">
        <div className="flex justify-between items-center">
          <span className="text-white text-sm font-medium">{data.name}</span>
        </div>
        <div className="mt-1 flex items-center">
          <span className="text-gray-300 text-xs">{priceFormatter.format(data.price)}</span>
          <span className={`text-xs  ${changeColor}`}>{isPositive ? '+' : ''}{data.change.toFixed(2)}%</span>
        </div>
      </div>
    </div>
  );
};

// Crypto Ticker Grid
const CryptoTickerGrid = () => {
  const duplicatedData = [...cryptoData, ...cryptoData, ...cryptoData];

  return (
    <>
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
        .scroll-left { animation: scroll-left 40s linear infinite; }
        .scroll-right { animation: scroll-right 50s linear infinite; }
      `}</style>

      <div className="py-4 overflow-hidden space-y-4">
        <div className="flex scroll-left">
          {duplicatedData.map((crypto, index) => (
            <CryptoCard key={`row1-${index}`} data={crypto} />
          ))}
        </div>
        <div className="flex scroll-right">
          {duplicatedData.map((crypto, index) => (
            <CryptoCard key={`row2-${index}`} data={crypto} />
          ))}
        </div>
        <div className="flex scroll-left">
          {duplicatedData.map((crypto, index) => (
            <CryptoCard key={`row3-${index}`} data={crypto} />
          ))}
        </div>
        <div className="flex scroll-right">
          {duplicatedData.map((crypto, index) => (
            <CryptoCard key={`row4-${index}`} data={crypto} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CryptoTickerGrid;
