import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqData = [
  {
    question: "How to place an order from the website?",
    answer: `Step 1: Click on your preferred category.\nStep 2: Add product to cart.\nStep 3: Review and place the order.`,
  },
  {
    question: "What payment modes are available?",
    answer: `UPI, Netbanking, Debit/Credit cards, Wallets and COD (where available).`,
  },
  {
    question: "What payment modes are available?",
    answer: `UPI, Netbanking, Debit/Credit cards, Wallets and COD (where available).`,
  },
  {
    question: "What payment modes are available?",
    answer: `UPI, Netbanking, Debit/Credit cards, Wallets and COD (where available).`,
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleIndex = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="py-[4rem] px-[4rem] sm:px-[8rem]">
      <div className="text-sm text-gray-500 mb-2">
        <Link to="/" className="hover:underline text-blue-600">Home</Link>
        <span className="mx-1">{'>'}</span> FAQs
      </div>

      <h2 className="">We're Here to Help</h2>
      <h3 className="mb-[2rem] font-bold">Faq's</h3>

      {faqData.map((faq, index) => (
        <div key={index} className="mb-4 border border-yellow-200 rounded-md overflow-hidden transition-all duration-300">
          <button
            onClick={() => toggleIndex(index)}
            className="w-full flex justify-between items-center !bg-[#f8f8f8] !text-[#1c94c4] px-4 py-3 hover:!bg-yellow-100 font-semibold text-left hover:!text-yellow-900 text-sm md:text-base"
          >
            <span>{`${index + 1}. ${faq.question}`}</span>
            {activeIndex === index ? (
              <FaChevronUp className="ml-2 text-yellow-700" />
            ) : (
              <FaChevronDown className="ml-2 text-yellow-700" />
            )}
          </button>

          <div
            ref={(el) => (contentRefs.current[index] = el)}
            style={{
              maxHeight: activeIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : "0px",
            }}
            className="transition-max-height duration-300 ease-in-out overflow-hidden"
          >
            <div className="px-5 py-4 text-sm text-gray-700 whitespace-pre-line bg-gray-50">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqSection;
