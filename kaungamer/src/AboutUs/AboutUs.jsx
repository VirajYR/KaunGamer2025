import React from "react";
import { FaGamepad, FaTrophy, FaUniversity, FaUsers, FaStar } from "react-icons/fa"; // Import Icons

const AboutUs = () => {
  const sections = [
    {
      title: "Why eSports?",
      icon: <FaGamepad className="text-indigo-400 text-5xl mb-4" />, // 🎮 Game Controller Icon
      content: (
        <>
          <p>
            Esports is more than just gaming—it's a rapidly growing industry that combines competition, strategy, and teamwork at the highest level. Unlike traditional sports, where physical limitations or location can be barriers, esports is accessible to anyone with an internet connection.
          </p>
          <p>Here’s why eSports is making an impact worldwide:</p>
          <ul className="list-disc pl-5">
            <li>🔥 <strong>Thrilling Competitive Scene</strong> – Players showcase skill, strategy, and precision.</li>
            <li>🏆 <strong>A Path to Glory</strong> – Compete in Kaun Gamer? 1.0 for prizes & recognition.</li>
            <li>🎓 <strong>Career & Growth Opportunities</strong> – From pro gaming to content creation & coaching.</li>
            <li>🌍 <strong>A Global Community</strong> – Connect with gamers, fans & industry pros worldwide.</li>
            <li>💡 <strong>Building Skills Beyond Gaming</strong> – Develop teamwork, communication, and decision-making.</li>
            <li>🚀 <strong>The Future of Sports & Entertainment</strong> – A booming industry with global recognition.</li>
          </ul>
        </>
      ),
    },
    {
      title: "What is Kaun Gamer? 1.0?",
      icon: <FaTrophy className="text-yellow-400 text-5xl mb-4" />, // 🏆 Trophy Icon
      content: (
        <>
          <p>
            Think you have what it takes to be the ultimate gamer? Kaun Gamer? 1.0 is more than just a tournament—it’s a battlefield where skill meets destiny, casual players become legends, and only the best rise to the top.
          </p>
          <h3 className="font-bold mt-4">Tournament Details 🏆</h3>
          <ul className="list-disc pl-5">
            <li>🎮 BGMI (4 + 1 substitute)</li>
            <li>🎮 Valorant (5 + 1 substitute)</li>
            <li>🎮 CoDM (4 + 1 substitute)</li>
            <li>🎮 CS2 (5 + 1 substitute)</li>
          </ul>
          <p className="mt-4"><strong>💥 Prize Pool:</strong> ₹1 Lakh – Glory, rewards & ultimate bragging rights!</p>
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
      icon: <FaUniversity className="text-blue-400 text-5xl mb-4" />, // 🎓 University Icon
      content: (
        <>
          <p>
            The NorthCap University (NCU) is a premier multidisciplinary university in Gurugram, Haryana, fostering academic excellence for 30+ years.
          </p>
          <p><strong>Why Choose NCU?</strong></p>
          <ul className="list-disc pl-5">
            <li>✅ Top Rankings & Accreditations</li>
            <li>✅ World-Class Education & Industry-Integrated Learning</li>
            <li>✅ Global Opportunities & Research-Driven Curriculum</li>
            <li>✅ Strong Corporate Collaborations & Career Readiness</li>
          </ul>
        </>
      ),
    },
    {
      title: "Why Kaun Gamer? 1.0?",
      icon: <FaUsers className="text-red-400 text-5xl mb-4" />, // 👥 Community Icon
      content: (
        <>
          <p>
            Kaun Gamer? 1.0 isn’t just another esports event—it’s an immersive gaming experience with unique challenges and surprises!
          </p>
          <ul className="list-disc pl-5">
            <li>🎮 Inclusive & Interactive for all skill levels</li>
            <li>🏆 Beyond Just Winning – Expect surprises & mystery rounds</li>
            <li>🎯 Mini-Games & Side Challenges for extra fun</li>
            <li>🤝 Community-Centric with influencer-led challenges</li>
            <li>🚀 Hybrid Online & Offline Gaming Experience</li>
          </ul>
        </>
      ),
    },
    {
      title: "What Makes Kaun Gamer? 1.0 Stand Out? 🎮🔥",
      icon: <FaStar className="text-yellow-400 text-5xl mb-4" />, // ⭐ Star Icon
      content: (
        <>
          <ul className="list-disc pl-5">
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
    <div className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-indigo-500 mb-10">About Us</h2>
        <div className="space-y-12">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition-transform"
            >
              <div className="flex items-center">
                {section.icon} {/* Icon for each section */}
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
