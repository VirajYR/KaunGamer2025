import React from "react";
import logo1 from "../assets/KaunLogo.jpeg";
import logo2 from "../assets/nculogo.png";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        {/* Top Section - Horizontal Layout */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-8">
          {/* Left Logo */}
          <div className="flex items-center space-x-3">
            <img
              src={logo1}
              alt="Kaun Logo"
              className="h-16 w-16 md:h-20 md:w-20 rounded-full hover:scale-105 transition-transform"
            />
          </div>

          {/* Contact Details */}
          <div className="text-center md:text-left text-gray-400">
            <p className="text-lg font-bold text-indigo-500">Contact Us</p>
            <p>Email: jatin21csu539@ncuindia.edu</p>
            <p>Phone: +91 93154 31144 ( Jatin )</p>
            <p>Address: The NorthCap University, Gurugram, India</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            {/* WhatsApp */}
            <a
              href="https://whatsapp.com/channel/0029VbAXTG65Ui2UYxj5Lf0s"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                alt="WhatsApp"
                className="h-10 w-10 hover:scale-110 transition-transform"
              />
            </a>

            {/* Discord */}
            <a
              href="https://discord.gg/295RayraQZ"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3670/3670157.png"
                alt="Discord"
                className="h-10 w-10 hover:scale-110 transition-transform"
              />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/kaun_gamer.ncu/?utm_source=ig_web_button_share_sheet"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
                alt="Instagram"
                className="h-10 w-10 hover:scale-110 transition-transform"
              />
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@AnmolMittalGametech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3670/3670147.png"
                alt="YouTube"
                className="h-10 w-10 hover:scale-110 transition-transform"
              />
            </a>
          </div>

          {/* Google Map (Using Iframe) */}
          <div className="w-64 h-40 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Event Location"
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.674424091965!2d77.02665737529467!3d28.495674575764857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19472d657b25%3A0xe33e3cdb8fbb8993!2sThe%20NorthCap%20University!5e0!3m2!1sen!2sin!4v1711818243456!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Right Logo */}
          <div className="flex items-center space-x-3">
            <img
              src={logo2}
              alt="NCU Logo"
              className="h-16 w-16 md:h-20 md:w-20 rounded-full hover:scale-105 transition-transform"
            />
          </div>
        </div>

        {/* Copyright & Horizontal Line */}
        <hr className="border-gray-600 my-6" />
        <p className="w-full text-center text-gray-500 text-sm">
          Copyright © 2025 KaunGamer & NCU Esports. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
