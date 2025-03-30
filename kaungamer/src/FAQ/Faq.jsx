import React from "react";

const FAQ = () => {
  const faqData = [
    {
      question: "What is KaunGamer?",
      answer:
        "KaunGamer is a premier esports event organized at The NorthCap University, featuring top-tier competitions across multiple games.",
    },
    {
      question: "When will the event be held?",
      answer:
        "The online event will be held from 6-10 April 2025, followed by the offline event on 11 & 12 April 2025.",
    },
    {
      question: "How do I register for the event?",
      answer:
        "You can register for the event by clicking on the 'Register Now' button available on the homepage or in the navigation menu.",
    },
    {
      question: "What games will be featured?",
      answer:
        "The event will feature popular esports titles like Valorant, BGMI, Call of Duty, and Counter Strike 2.",
    },
    {
      question: "Is there an age limit to participate?",
      answer:
        "Yes, participants must be 16 years or older to compete in the tournaments.",
    },
    {
      question: "What are the prizes for the winners?",
      answer:
        "Winners will receive cash prizes, gaming gear, and certificates of excellence.",
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-indigo-500 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition-transform"
            >
              <h3 className="text-2xl font-semibold mb-2">{item.question}</h3>
              <p className="text-gray-400">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
