import React from "react"; 
import { FaGavel, FaUsers, FaClock, FaMoneyBillWave, FaExclamationTriangle } from "react-icons/fa";
import bgImg2 from "../assets/bgImg2.jpg";  

const Rules = () => {
  const rules = [
    {
      icon: <FaGavel className="text-indigo-500 text-3xl" />, 
      title: "General Rules",
      description: "All participants must adhere to fair play and sportsmanship. Any form of cheating, hacking, or toxic behavior will lead to disqualification."
    },
    {
      icon: <FaUsers className="text-green-500 text-3xl" />, 
      title: "Team Requirements",
      description: "Each game has specific team compositions. Ensure your team meets the required player count before registering."
    },
    {
      icon: <FaClock className="text-yellow-500 text-3xl" />, 
      title: "Match Timings",
      description: "Players must be available at least 15 minutes before their scheduled match time. Delays beyond 10 minutes may lead to forfeiture."
    },
    {
      icon: <FaMoneyBillWave className="text-blue-500 text-3xl" />, 
      title: "Prize Distribution",
      description: "Prizes will be distributed within 14 days post-event. Winners must provide valid bank details for fund transfers."
    },
    {
      icon: <FaExclamationTriangle className="text-red-500 text-3xl" />, 
      title: "Code of Conduct",
      description: "Offensive language, discrimination, or harassment will not be tolerated. Maintain a positive and respectful gaming environment."
    },
  ];

  return (
    <div
      className="min-h-screen text-white py-12 px-6 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImg2})` }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center text-red-500 mb-8">
          Tournament Rules
        </h2>
        <div className="space-y-6">
          {rules.map((rule, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md flex items-start gap-4 transition-transform duration-300 
                         hover:scale-105 hover:shadow-lg hover:shadow-red-500/50"
            >
              {rule.icon}
              <div>
                <h3 className="text-2xl font-semibold mb-2">{rule.title}</h3>
                <p className="text-gray-400">{rule.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rules;
