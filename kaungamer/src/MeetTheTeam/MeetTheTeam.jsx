import React from "react";

// Team member card component
const TeamCard = ({ name, role, image }) => (
  <div className="w-full bg-gray-900 rounded-lg shadow-lg p-6 flex flex-col justify-center items-center">
    <div className="mb-4">
      <img
        className="object-center object-cover rounded-full h-36 w-36"
        src={image}
        alt={name}
      />
    </div>
    <div className="text-center">
      <p className="text-xl text-white font-bold mb-2">{name}</p>
      <p className="text-base text-gray-400 font-normal">{role}</p>
    </div>
  </div>
);

// Main MeetTheTeam component
const MeetTheTeam = () => {
  // Team data
  const teamMembers = [
    {
      name: "Dany Bailey",
      role: "Software Engineer",
      image:
        "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    },
    {
      name: "Lucy Carter",
      role: "Graphic Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    },
    {
      name: "Jade Bradley",
      role: "Dev Ops",
      image:
        "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80",
    },
  ];

  return (
    <div className="w-full bg-gray-800">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Heading */}
        <div className="text-center pb-12">
          <h2 className="text-base font-bold text-indigo-600">
            We have the best equipment in the market
          </h2>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
            Meet Our Awesome Team
          </h1>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MeetTheTeam;
