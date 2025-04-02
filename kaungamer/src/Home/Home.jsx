import React, { useState, useEffect } from "react";
import bgmiImg from "../assets/eventbgmi.jpg";
import codImg from "../assets/eventcod.jpg";
import cs2Img from "../assets/eventcs2.jpg";
import valoImg from "../assets/eventvalo.jpg";

const Home = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const eventDate = new Date("April 11, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
      name: "Counter Strike 2 Pro League",
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
      {/* Countdown Timer Section */}
      <div className="text-center py-8">
        <h2 className="text-3xl font-bold text-indigo-500 mb-4">
          Countdown to Event:
        </h2>
        {timeLeft.days === 0 &&
        timeLeft.hours === 0 &&
        timeLeft.minutes === 0 &&
        timeLeft.seconds === 0 ? (
          <p className="text-2xl font-bold text-red-500">Event has started!</p>
        ) : (
          <div className="flex justify-center space-x-6 text-2xl font-bold">
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <p className="text-indigo-400">{timeLeft.days}</p>
              <p className="text-sm">Days</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <p className="text-indigo-400">{timeLeft.hours}</p>
              <p className="text-sm">Hours</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <p className="text-indigo-400">{timeLeft.minutes}</p>
              <p className="text-sm">Minutes</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <p className="text-indigo-400">{timeLeft.seconds}</p>
              <p className="text-sm">Seconds</p>
            </div>
          </div>
        )}
      </div>

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

      {/* Event Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
                <h3 className="text-2xl font-bold text-center mb-2">{event.name}</h3>
                <p className="text-gray-400 mb-4">{event.description}</p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdVVVW-xCHHsd2oNZsnGfbZcLEoPpwY51WAtdNO8cDnNjaf-w/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg inline-block text-center flex justify-center"
                >
                  Register Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Register as Spectator Section */}
      <div className="text-center py-12">
        <h2 className="text-3xl font-bold text-indigo-500 mb-4">
          Want to watch the action live?
        </h2>
        <p className="text-lg mb-6">
          Register as a spectator and witness top-tier esports competition!
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdVVVW-xCHHsd2oNZsnGfbZcLEoPpwY51WAtdNO8cDnNjaf-w/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg"
        >
          Register as Spectator
        </a>
      </div>
    </div>
  );
};

export default Home;
