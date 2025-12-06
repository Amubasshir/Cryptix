import React, { useState } from 'react';
import { ArrowUpRight, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// FAQ Data
const faqs = [
  {
    id: 1,
    question: "How do I create an account?",
    answer: "Click on the 'Create account now' button in the top right corner. Fill in your email, create a secure password, and verify your identity to get started instantly."
  },
  {
    id: 2,
    question: "Is my cryptocurrency secure?",
    answer: "Yes, we use bank-grade security protocols, cold storage for 98% of assets, and 2FA authentication to ensure your funds remain safe at all times."
  },
  {
    id: 3,
    question: "What are the transaction fees?",
    answer: "Our fees are transparent and competitive. We charge a flat 0.1% maker/taker fee. There are no hidden charges for deposits or withdrawals."
  },
  {
    id: 4,
    question: "Can I withdraw my funds anytime?",
    answer: "Absolutely. You have 24/7 access to your funds. Withdrawals are processed immediately via local bank transfer or crypto networks."
  },
  {
    id: 5,
    question: "Do you support all countries?",
    answer: "We support over 180 countries worldwide. However, due to regulatory reasons, some specific regions may have limited features."
  },
  {
    id: 6,
    question: "How can I contact support?",
    answer: "Our support team is available 24/7 via live chat and email. Premium members also get access to a dedicated phone line for urgent queries."
  },
  {
    id: 7,
    question: "How can I contact support?",
    answer: "Our support team is available 24/7 via live chat and email. Premium members also get access to a dedicated phone line for urgent queries."
  },
  {
    id:8,
    question: "How can I contact support?",
    answer: "Our support team is available 24/7 via live chat and email. Premium members also get access to a dedicated phone line for urgent queries."
  }
];

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const leftFaqs = faqs.slice(0, 4);
  const rightFaqs = faqs.slice(4, 8);

  return (
    <section className="text-white border-t border-b border-gray-800 ">

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
    // CHANGE 1: 'group' এবং 'hover:bg-white/[0.02]' এখানে প্যারেন্ট ডিভে আনা হয়েছে
    <div className="border-b border-gray-800 last:border-b-0 md:last:border-b-0 group hover:bg-white/[0.02] transition-colors duration-300">
      
      <button 
        onClick={toggle} 
        // CHANGE 2: বাটন থেকে hover ব্যাকগ্রাউন্ড সরিয়ে নেওয়া হয়েছে
        className="w-full text-left p-6 md:p-8 flex items-start justify-between transition-colors"
      >
        <span className={`text-lg font-medium pr-8 transition-colors ${isOpen ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
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
            {/* প্যারাগ্রাফের ব্যাকগ্রাউন্ড ট্রান্সপারেন্ট, তাই প্যারেন্টের hover কালার দেখা যাবে */}
            <p className="px-6 md:px-8 pb-8 text-gray-400 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQ;