import React from "react";

// TeamCard Component
const TeamCard = ({ name, role, image, description, email }) => {
  const imagePath = `${window.location.origin}/assets/team/${image}`;

  return (
    <div className="relative flex w-80 flex-col rounded-xl bg-gray-900 bg-clip-border text-white shadow-lg p-4 transition-transform transform hover:scale-105">
      <div className="relative mx-auto mt-4 h-64 w-64 overflow-hidden rounded-xl shadow-lg">
        <img
          className="object-cover w-full h-full"
          src={imagePath}
          alt={name}
          onError={(e) => (e.target.src = `${window.location.origin}/assets/team/default.jpg`)}
        />
      </div>
      <div className="p-4 text-center">
        <h4 className="mb-2 text-xl font-semibold text-white">{name}</h4>
        <p className="text-sm text-indigo-400">{role}</p>
        {description && <p className="mt-2 text-gray-300 text-sm">{description}</p>}
        {email && (
          <p className="mt-2 text-sm text-indigo-300">
            <a href={`mailto:${email}`} className="hover:underline">{email}</a>
          </p>
        )}
      </div>
    </div>
  );
};

// Team Data
const teams = [
  {
    role: "Faculty Coordinator",
    members: [
      { name: "Ms. Akanksha Kaushik", email: "akankashakaushik@ncuindia.edu", image: "akanksha_kaushik.jpg" },
      { name: "Ms. Sneha Kandacharam", email: "snehakandacharam@ncuindia.edu", image: "sneha_kandacharam.jpg" },
      { name: "Dr. Nidhi Malik", email: "nidhimalik@ncuindia.edu", image: "nidhi_malik.jpg" }
    ]
  },
  {
    role: "Event Organiser",
    members: [
      { name: "Jatin Dalal", image: "jatin_dalal.jpg", description: "Organizer of Kaun Gamer? 1.0, ensuring each detail is perfect as Sachin's straight drive!" }
    ]
  },
  {
    role: "Sponsorship Coordinator",
    members: [
      { name: "Rakshat Chawla", image: "rakshat_chawla.jpg", description: "Dedicated to securing partnerships and ensuring flawless execution." }
    ]
  },
  {
    role: "Content Strategist",
    members: [
      { name: "Leana", image: "leana.jpg", description: "Ensuring event content is engaging and aligned with the event’s theme." },
      { name: "Rishika Jain", image: "rishika_jain.jpg", description: "Creative & meticulous, always up for learning and improving!" }
    ]
  },
  {
    role: "Operations",
    members: [
      { name: "Chesta Chauhan", image: "chesta_chauhan.jpg", description: "Loves gaming, event planning, and handling chaos with ease." },
      { name: "Nayan Anand", image: "nayan_anand.jpg", description: "A tech enthusiast ensuring smooth event execution!" }
    ]
  },
  {
    role: "Design",
    members: [
      { name: "Oditi Agarwal", image: "oditi_agarwal.png", description: "Creates stunning visuals for the event." },
      { name: "Gayatri Rao", image: "gayatri_rao.jpg", description: "Loves design & animation, turning imagination into reality!" }
    ]
  },
  {
    role: "Digital Outreach",
    members: [
      { name: "Siya Yadav", image: "siya_yadav.jpg", description: "Head of Social Media, passionate about gaming psychology." }
    ]
  },
  {
    role: "Event Coordinator",
    members: [
      { name: "Dipender", image: "dipender.jpg", description: "Loves organizing and ensuring smooth execution." },
      { name: "Madhur", image: "madhur.jpg", description: "Manages event chaos while enjoying the excitement of gaming." }
    ]
  },
  {
    role: "Email Communication",
    members: [
      { name: "Vanshika Jain", image: "vanshika_jain.jpg", description: "Handles all emails and reports for the event." },
      { name: "Kamakshee Jeena", image: "kamakshee_jeena.jpg", description: "Expert in writing and editing official communications." }
    ]
  },
  {
    role: "Data Compilation",
    members: [
      { name: "Simran Yadav", image: "simran_yadav.jpg", description: "Optimizing event data for seamless execution." },
      { name: "Amandeep Singh", image: "amandeep_singh.jpg", description: "Excited to collaborate and witness exceptional gaming skills." }
    ]
  },
  {
    role: "Videography",
    members: [
      { name: "Dhriti Adlakha", image: "dhriti_adlakha.jpg", description: "Capturing emotions through lenses!" },
      { name: "Gaurang", image: "gaurang.jpg", description: "Ensuring dynamic and engaging event coverage." }
    ]
  },
  {
    role: "Photography",
    members: [
      { name: "Sneha", image: "sneha.jpg", description: "Capturing intense gaming moments and victory poses." }
    ]
  },
  {
    role: "Certification",
    members: [
      { name: "Anandita Gaya", image: "anandita_gaya.jpg", description: "Managing participant certifications and smooth distribution." }
    ]
  }
];

// MeetTheTeam Component
const MeetTheTeam = () => {
  return (
    <div className="w-full bg-gray-800 py-12">
      <section className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white uppercase tracking-widest">
            Meet The Team
          </h2>
          <p className="text-gray-400 mt-2">The masterminds behind Kaun Gamer? 1.0</p>
        </div>

        {/* Team Members */}
        <div className="flex flex-wrap justify-center gap-8">
          {teams.map((team, index) => (
            <div key={index} className="w-full">
              <h3 className="text-xl font-semibold text-indigo-400 mb-4 text-center">{team.role}</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {team.members.map((member, i) => (
                  <TeamCard
                    key={i}
                    name={member.name}
                    role={team.role}
                    image={member.image}
                    description={member.description}
                    email={member.email}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MeetTheTeam;
