import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// FAQ Data
const faqs = [
  {
    id: 1,
    question: "What is Cryptix?",
    answer: "Cryptix is a next-generation platform for buying, selling, and converting cryptocurrencies with real-time market insights."
  },
  {
    id: 2,
    question: "Is Cryptix secure?",
    answer: "Yes, Cryptix uses top-tier encryption, multi-layer security, and cold storage solutions to keep your assets safe."
  },
  {
    id: 3,
    question: "Which cryptocurrencies are supported?",
    answer: "Cryptix supports a vast range of cryptocurrencies, including Bitcoin (BTC), Ethereum (ETH), and many others."
  },
  {
    id: 4,
    question: "What are the fees for transactions??",
    answer: "We optimize transaction fees to offer the best rates. You’ll always see the fee before confirming a transaction."
  },
  {
    id: 5,
    question: "How fast are transactions?",
    answer: "Most transactions are processed instantly, but network congestion may cause slight delays."
  },
  {
    id: 6,
    question: "Do I need to verify my identity?",
    answer: "Yes, for security and compliance, identity verification is required for certain transactions."
  },
  {
    id: 7,
    question: "Can I access Cryptix on mobile?",
    answer: "Yes, Cryptix is fully optimized for both desktop and mobile, ensuring a seamless experience everywhere."
  },
  {
    id: 8,
    question: "How can I contact support?",
    answer: "Our support team is available 24/7 via live chat and email. Premium members also get access to a dedicated phone line for urgent queries."
  }
];

// Hook for fade + slide in
const useInView = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
};

const FAQ = () => {
  const [openId, setOpenId] = useState(null);
  const [headerRef, headerVisible] = useInView();

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const leftFaqs = faqs.slice(0, 4);
  const rightFaqs = faqs.slice(4, 8);

  return (
    <section className="text-white border-t border-b border-gray-800 " id='FAQ'>

      {/* Header */}
     <div className="border-b border-gray-800">
            <div
              ref={headerRef}
              className={`max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-end border-l border-r border-gray-800 transition-all duration-700 ease-out
                ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
              `}
            >
    
              {/* Left side */}
              <div className="border-r border-gray-800 w-full lg:max-w-4xl p-5 lg:pr-20">
                <h2 className="text-3xl sm:text-4xl font-medium mb-4">Your Questions, Answered</h2>
                <p className="text-white text-base">
                 Find everything you need to know about Cryptix, from security to supported assets.
                </p>
              </div>
    
              {/* Right side CTA */}
              <div className="w-full lg:w-[52.2%] border-l border-gray-800">
                <div className="border-b border-gray-800 py-9 w-full"></div>
    
                <a
                  href="#"
                  className="hidden md:flex gap-2 justify-end items-center p-5 text-green-400 hover:text-green-300 font-medium whitespace-nowrap w-full transition-all duration-700 ease-out hover:bg-[rgb(51 195 69 / 5%)]"
                >
                  Create account now
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
    
            </div>
          </div>
      {/* FAQ Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-800 border-l border-r border-gray-800 border-b">
        <div className="flex flex-col">
           {leftFaqs.map((faq) => (
             <FAQItem key={faq.id} faq={faq} isOpen={openId === faq.id} toggle={() => toggleFAQ(faq.id)} />
           ))}
        </div>
        <div className="flex flex-col">
           {rightFaqs.map((faq) => (
             <FAQItem key={faq.id} faq={faq} isOpen={openId === faq.id} toggle={() => toggleFAQ(faq.id)} />
           ))}
        </div>
      </div>
    </section>
  );
};

// Single FAQ Item with Unified Hover Effect
const FAQItem = ({ faq, isOpen, toggle }) => {
  return (
    <div className="border-b border-gray-800 last:border-b-0 md:last:border-b-0 group hover:bg-white/[0.02] transition-colors duration-300">
      
      <button 
        onClick={toggle} 
        className="w-full text-left p-6 md:p-8 flex items-start justify-between transition-colors"
      >
        <span className={`text-lg font-semibold pr-8 transition-colors ${isOpen ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
            {faq.question}
        </span>
        
        {/* Animated Icon Container */}
        <div className="relative flex items-center justify-center shrink-0 mt-1">
            <motion.div
                animate={{ rotate: isOpen ? 45 : 0, color: isOpen ? "#ffffff" : "#6b7280" }} 
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <Plus size={24} className="group-hover:text-white transition-colors" />
            </motion.div>
        </div>

      </button>

      {/* Answer Dropdown Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 md:px-8 pb-8 text-gray-400 leading-relaxed font-medium">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQ;
