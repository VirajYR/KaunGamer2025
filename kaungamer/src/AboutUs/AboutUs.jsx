import React from "react";
import { FaGamepad, FaTrophy, FaUniversity, FaUsers, FaStar } from "react-icons/fa"; 
import bgImg3 from "../assets/bgImg3.jpg"

const AboutUs = () => {
  const sections = [
    {
      title: "Why eSports?",
      icon: <FaGamepad className="text-indigo-400 text-5xl mb-4" />,
      content: (
        <>
          <p>
            Esports is more than just gaming—it's a rapidly growing industry that combines competition, strategy, and teamwork at the highest level.
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>🔥 <strong>Thrilling Competitive Scene</strong> – Skill, strategy, precision.</li>
            <li>🏆 <strong>A Path to Glory</strong> – Compete in Kaun Gamer? 1.0.</li>
            <li>🎓 <strong>Career & Growth</strong> – Pro gaming, content creation, coaching.</li>
            <li>🌍 <strong>Global Community</strong> – Connect with gamers & industry pros.</li>
            <li>🚀 <strong>The Future of Sports & Entertainment</strong> – A booming industry.</li>
          </ul>
        </>
      ),
    },
    {
      title: "What is Kaun Gamer? 1.0?",
      icon: <FaTrophy className="text-yellow-400 text-5xl mb-4" />,
      content: (
        <>
          <p>
            Kaun Gamer? 1.0 is more than just a tournament—it’s a battlefield where casual players become legends, and only the best rise to the top.
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>🎮 BGMI (4 + 1 substitute)</li>
            <li>🎮 Valorant (5 + 1 substitute)</li>
            <li>🎮 CoDM (4 + 1 substitute)</li>
            <li>🎮 CS2 (5 + 1 substitute)</li>
          </ul>
          <p className="mt-4"><strong>💥 Prize Pool:</strong> ₹1 Lakh – Ultimate bragging rights!</p>
          <a
            href="https://forms.gle/X9bVCbngKzhissDKA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 underline block mt-2"
          >
            🔗 Register Now
          </a>
        </>
      ),
    },
    {
      title: "About The NorthCap University (NCU)",
      icon: <FaUniversity className="text-blue-400 text-5xl mb-4" />,
      content: (
        <>
          <p>
            The NorthCap University (NCU) is a premier multidisciplinary university in Gurugram, Haryana, fostering academic excellence for 30+ years.
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>✅ Top Rankings & Accreditations</li>
            <li>✅ World-Class Education & Industry Integration</li>
            <li>✅ Global Research & Career Readiness</li>
            <li>✅ Strong Corporate Collaborations</li>
          </ul>
        </>
      ),
    },
    {
      title: "Why Kaun Gamer? 1.0?",
      icon: <FaUsers className="text-red-400 text-5xl mb-4" />,
      content: (
        <>
          <p>
            Kaun Gamer? 1.0 isn’t just another esports event—it’s an immersive gaming experience with unique challenges and surprises!
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>🎮 Inclusive for all skill levels</li>
            <li>🏆 Mystery Rounds & Surprises</li>
            <li>🎯 Mini-Games & Side Challenges</li>
            <li>🤝 Community-Centric with influencers</li>
            <li>🚀 Hybrid Online & Offline Gaming Experience</li>
          </ul>
        </>
      ),
    },
    {
      title: "What Makes Kaun Gamer? 1.0 Stand Out? 🎮🔥",
      icon: <FaStar className="text-yellow-400 text-5xl mb-4" />,
      content: (
        <>
          <ul className="list-disc pl-5 mt-2">
            <li>1️⃣ <strong>Hybrid Format:</strong> Online qualifiers + offline finals</li>
            <li>2️⃣ <strong>Multi-Game, Multi-Platform:</strong> PC & mobile gamers compete together</li>
            <li>3️⃣ <strong>Zero Entry Fee:</strong> ₹1 Lakh prize pool</li>
            <li>4️⃣ <strong>More Than a Tournament:</strong> A full-fledged gamer’s festival</li>
            <li>5️⃣ <strong>Live Battles & Streaming:</strong> Real-time audience engagement</li>
            <li>6️⃣ <strong>Pro Esports Career Pathway:</strong> Gain recognition & network with top gamers</li>
          </ul>
          <p className="mt-4 font-bold">🚀 This is not just a tournament—this is Kaun Gamer? 1.0, a revolution in esports! Are you ready?</p>
        </>
      ),
    },
  ];

  return (
    <div
      className="min-h-screen text-white py-12 px-4 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImg3})` }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center text-red-500 mb-10">About Us</h2>
        <div className="space-y-12">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-lg shadow-md transition-transform duration-300 
                         hover:scale-105 hover:shadow-lg hover:shadow-red-500/50"
            >
              <div className="flex items-center">
                {section.icon} 
                <h3 className="text-3xl font-semibold text-indigo-400 ml-4">{section.title}</h3>
              </div>
              <div className="text-gray-300 mt-4">{section.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
