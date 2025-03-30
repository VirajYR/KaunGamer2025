import React from "react";
import bgmiImg from "../assets/eventbgmi.jpg";
import codImg from "../assets/eventcod.jpg";
import cs2Img from "../assets/eventcs2.jpg";
import valoImg from "../assets/eventvalo.jpg";

const Home = () => {
  const events = [
    {
      name: "Valorant Championship",
      description: "Experience intense 5v5 tactical combat.",
      image: valoImg,
    },
    {
      name: "Call of Duty: Modern Warfare",
      description: "Engage in thrilling warfare with cutting-edge weapons.",
      image: codImg,
    },
    {
      name: "CS2 Pro League",
      description: "Master tactical gameplay and compete in Counter-Strike 2.",
      image: cs2Img,
    },
    {
      name: "BGMI Mega Tournament",
      description: "Prove your mettle in the most intense battleground.",
      image: bgmiImg,
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Event Dates Section */}
      <div className="text-center py-12">
        <h2 className="text-3xl font-bold text-indigo-500 mb-2">
          Event Dates:
        </h2>
        <p className="text-lg mb-4">
          <strong>Online:</strong> 6-10 April 2025
        </p>
        <p className="text-lg">
          <strong>Offline:</strong> 11 & 12 April 2025
        </p>
      </div>

      {/* Card Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 cursor-pointer">
        <h2 className="text-4xl font-bold text-center mb-8">
          Featured Esports Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{event.name}</h3>
                <p className="text-gray-400 mb-4">{event.description}</p>
                <a
                  href="https://forms.gle/your-google-form-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg inline-block"
                >
                  Register Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
