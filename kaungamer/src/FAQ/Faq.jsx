import React from "react";

const FAQ = () => {
  const faqData = [
    {
      question: "Who is eligible to participate in Kaun Gamer 1.0?",
      answer: "Anyone residing in India can take part.",
    },
    {
      question: "What is the tournament format?",
      answer: "The format will be determined based on participant responses.",
    },
    {
      question: "Is the ₹1 Lakh prize pool for a single game or shared among all games?",
      answer: "The ₹1 Lakh prize pool is distributed across all games.",
    },
    {
      question: "How many players are required per team?",
      answer: (
        <span>
          Each game has specific team requirements:
          <ul className="list-disc pl-5 mt-2">
            <li>BGMI & CoDM: 4 players + 1 substitute</li>
            <li>CS2 & Valorant: 5 players + 1 substitute</li>
          </ul>
          A minimum of 48 teams is needed for a fair competition.
        </span>
      ),
    },
    {
      question: "How can teams register?",
      answer: (
        <span>
          Each team member must individually complete the registration through the Google Form. <br />
          <a
            href="https://forms.gle/X9bVCbngKzhissDKA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 underline"
          >
            🔗 Registration Link
          </a>
        </span>
      ),
    },
    {
      question: "Can a player compete in multiple games?",
      answer: "No, a participant can register for only one game.",
    },
    {
      question: "Can spectators attend the event?",
      answer: "Yes, spectators are welcome only for the offline days. The entry fee is ₹200 per person per day.",
    },
    {
      question: "Will there be activities apart from the main tournament?",
      answer: "Yes, there will be exciting mini-games alongside the main competition.",
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
