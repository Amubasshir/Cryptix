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
    <section className="text-white border px-3 lg:px-0 border-gray-800" id='FAQ'>
      {/* Header */}
      <div className="border-b border-gray-800">
        <div
          ref={headerRef}
          className={`max-w-[1184px] text-center lg:text-start mx-auto flex flex-col lg:flex-row items-start lg:items-end border-l border-r border-gray-800 transition-all duration-700 ease-out
            ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
          `}
        >
          <div className="border-gray-800 w-full lg:max-w-4xl p-5 lg:pr-20">
            <h2 className="text-[24px] lg:text-[40px] font-normal mb-4 tracking-wide">
              Your Questions, Answered
            </h2>
            <p className="text-[#d5d5d5] text-sm md:text-[16px]  leading-relaxed ">
              Find everything you need to know about Cryptix, from security to supported assets.
            </p>
          </div>
          <div className="w-full lg:w-[52.9%] border-l border-gray-800">
            <div className="border-b hidden lg:flex border-gray-800 py-9 w-full"></div>
            <a
              href="#"
              className="hidden md:flex border-t  border-gray-800 gap-2 justify-center lg:justify-end items-center p-6 text-[#00ffb2] font-medium whitespace-nowrap w-full transition-all duration-700 ease-out hover:bg-green-400/5"
            >
              Create account now
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </div>
      
      {/* FAQ Grid */}
      <div className="max-w-[1184px] mx-auto grid grid-cols-1 lg:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-800 border-l border-r border-gray-800 border-b">
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

// --- FAQ Item Component ---
const FAQItem = ({ faq, isOpen, toggle }) => {
  
  // 1. Container Height Animation
  const contentVariants = {
    hidden: { 
      height: 0, 
      opacity: 0,
      transition: {
        height: { duration: 0.3, ease: "easeInOut" },
        opacity: { duration: 0.2 }
      }
    },
    visible: { 
      height: "auto", 
      opacity: 1,
      transition: {
        height: { duration: 0.3, ease: "easeInOut" },
        opacity: { duration: 0.3 }
      }
    }
  };

  // 2. Answer Text Animation (Slides DOWN from inside)
  const answerTextVariants = {
    hidden: { y: -40, opacity: 0 }, // -20 ensures it feels like it's just behind the question
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.55, ease: "easeOut", delay: 0.1 } // Slight delay to sync with height opening
    },
    exit: {
        y: -30,
        opacity: 0,
        transition: { duration: 0.2 }
    }
  };

  return (
    <div className="border-b border-gray-800 last:border-b-0 md:last:border-b-0 group hover:bg-white/[0.02] transition-colors duration-300 py-6">
      
      <button
        onClick={toggle}
        className="w-full text-left px-6 flex items-start justify-between transition-colors bg-transparent cursor-pointer z-10 relative overflow-hidden"
      >
        <motion.span 
          animate={{ y: isOpen ? -3 : 0, color: isOpen ? "#ffffff" : "" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={`text-base md:text-lg font-semibold pr-8 transition-colors ${!isOpen && 'text-gray-300 group-hover:text-white'}`}
        >
          {faq.question}
        </motion.span>

        <div className="relative flex items-center justify-center shrink-0 mt-1">
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0, color: isOpen ? "#ffffff" : "#6b7280" }}
            transition={{ duration: 0.3 }}
          >
            <Plus size={24} className="text-[#1bf1a1]" />
          </motion.div>
        </div>
      </button>

      {/* Answer Container */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={contentVariants}
            // className="overflow-hidden" 
          >
            <div className="px-6 md:px-8 pb-8"> 
              <motion.p 
                variants={answerTextVariants} // Parent এর variant inherit করবে না, নিজস্ব variant ব্যবহার করবে
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-gray-400 leading-relaxed font-medium text-sm md:text-base"
              >
                {faq.answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQ;