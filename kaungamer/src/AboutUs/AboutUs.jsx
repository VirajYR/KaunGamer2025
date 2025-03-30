import React from "react";
import logo1 from "../assets/KaunLogo.jpeg";
import logo2 from "../assets/nculogo.png";

const AboutUs = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h2 className="text-4xl font-bold text-center text-indigo-500 mb-8">
          About Us
        </h2>

        {/* Intro Section */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-400 leading-relaxed">
            Welcome to <span className="text-indigo-400 font-semibold">KaunGamer</span>, the ultimate battleground where passion meets skill. 
            Our goal is to bring together the best gaming talents from across the nation and create a 
            platform for intense, adrenaline-fueled competitions.
          </p>
        </div>

        {/* Logos Section */}
        <div className="flex justify-center space-x-12 mb-12">
          <img
            src={logo1}
            alt="KaunGamer Logo"
            className="h-24 w-24 md:h-32 md:w-32 rounded-full hover:scale-105 transition-transform"
          />
          <img
            src={logo2}
            alt="NCU Logo"
            className="h-24 w-24 md:h-32 md:w-32 rounded-full hover:scale-105 transition-transform"
          />
        </div>

        {/* Our Mission */}
        <div className="bg-gray-800 rounded-lg p-8 mb-8 shadow-md hover:scale-105 transition-transform">
          <h3 className="text-3xl font-bold mb-4 text-indigo-400">Our Mission</h3>
          <p className="text-gray-400 leading-relaxed">
            At <span className="text-indigo-400">KaunGamer</span>, we aim to promote the spirit of esports by fostering healthy competition and building 
            a thriving community of passionate gamers. Our mission is to provide a platform where gamers can showcase 
            their skills, learn, and grow.
          </p>
        </div>

        {/* Our Vision */}
        <div className="bg-gray-800 rounded-lg p-8 mb-8 shadow-md hover:scale-105 transition-transform">
          <h3 className="text-3xl font-bold mb-4 text-indigo-400">Our Vision</h3>
          <p className="text-gray-400 leading-relaxed">
            Our vision is to establish <span className="text-indigo-400">KaunGamer</span> as India’s leading esports platform, recognized 
            for its inclusivity, professionalism, and cutting-edge events. We envision a future where every aspiring gamer 
            has an opportunity to compete at the highest level.
          </p>
        </div>

        {/* Why Join Us */}
        <div className="bg-gray-800 rounded-lg p-8 mb-8 shadow-md hover:scale-105 transition-transform">
          <h3 className="text-3xl font-bold mb-4 text-indigo-400">Why Join Us?</h3>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Participate in high-stakes esports tournaments.</li>
            <li>Connect with fellow gamers and industry experts.</li>
            <li>Win exciting prizes and gain recognition.</li>
            <li>Be part of an ever-growing esports community.</li>
          </ul>
        </div>

        {/* Event Highlights */}
        <div className="bg-gray-800 rounded-lg p-8 mb-8 shadow-md hover:scale-105 transition-transform">
          <h3 className="text-3xl font-bold mb-4 text-indigo-400">Event Highlights</h3>
          <p className="text-gray-400 leading-relaxed">
            Our upcoming event features thrilling competitions across multiple games like Valorant, BGMI, 
            Call of Duty, and Counter Strike 2. Get ready for an electrifying experience with top-tier teams 
            battling it out for ultimate glory!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
