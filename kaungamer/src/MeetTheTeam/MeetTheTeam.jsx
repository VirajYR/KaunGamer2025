import React from "react";
import { FaEnvelope } from "react-icons/fa";

// TeamCard Component
const TeamCard = ({ name, role, image, description, email }) => {
  const imagePath = `${window.location.origin}/assets/team/${image}`;

  return (
    <div className="relative flex w-80 flex-col rounded-xl bg-gray-900 bg-clip-border text-white shadow-lg p-4 transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/50">
      <div className="relative mx-auto mt-4 h-64 w-64 overflow-hidden rounded-xl shadow-md border-2 border-indigo-400">
        <img
          className="object-cover w-full h-full"
          src={imagePath}
          alt={name}
          onError={(e) => (e.target.src = `${window.location.origin}/assets/team/default.jpg`)}
        />
      </div>
      <div className="p-4 text-center">
        <h4 className="mb-2 text-xl font-bold text-indigo-400">{name}</h4>
        <p className="text-sm text-gray-300">{role}</p>
        {description && <p className="mt-2 text-gray-400 text-sm">{description}</p>}
        {email && (
          <p className="mt-2 text-sm text-indigo-300 flex items-center justify-center gap-1">
            <FaEnvelope className="text-indigo-400" />
            <a href={`mailto:${email}`} className="hover:underline">{email}</a>
          </p>
        )}
      </div>
    </div>
  );
};

// Team Data
const teams = [
  { role: "Faculty Coordinator", members: [
    { name: "Ms. Akanksha Kaushik", email: "akankashakaushik@ncuindia.edu", image: "akanksha_kaushik.jpg" },
    { name: "Ms. Sneha Kandacharam", email: "snehakandacharam@ncuindia.edu", image: "sneha_kandacharam.jpg" },
    { name: "Dr. Nidhi Malik", email: "nidhimalik@ncuindia.edu", image: "nidhi_malik.jpg" }
  ]},
  { role: "Event Organiser", members: [
    { name: "Jatin Dalal", image: "jatin_dalal.jpg", description: "Organizer of Kaun Gamer? 1.0, ensuring every detail is perfect!" }
  ]},
  { role: "Sponsorship Coordinator", members: [
    { name: "Rakshat Chawla", image: "rakshat_chawla.jpg", description: "Securing partnerships & ensuring flawless execution." }
  ]},
  { role: "Content Strategist", members: [
    { name: "Leana", image: "leana.jpg", description: "Ensuring event content aligns with the theme & engages audiences." },
    { name: "Rishika Jain", image: "rishika_jain.jpg", description: "Creative & meticulous, always learning and improving!" }
  ]},
  { role: "Development Team", members: [
    { name: "Viraj Yadav", image: "viraj_yadav.jpg", description: "Leading web development to enhance the tournament experience." },
    { name: "Hardik Sati", image: "hardik_sati.jpg", description: "Ensuring smooth functionality and innovative digital solutions." }
  ]},
  { role: "Operations", members: [
    { name: "Chesta Chauhan", image: "chesta_chauhan.jpg", description: "Loves gaming & managing event logistics with ease." },
    { name: "Nayan Anand", image: "nayan_anand.jpg", description: "Tech enthusiast ensuring smooth execution!" }
  ]},
  { role: "Design", members: [
    { name: "Oditi Agarwal", image: "oditi_agarwal.png", description: "Creates stunning visuals for the event." },
    { name: "Gayatri Rao", image: "gayatri_rao.jpg", description: "Loves design & animation, turning imagination into reality!" }
  ]},
  { role: "Digital Outreach", members: [
    { name: "Siya Yadav", image: "siya_yadav.jpg", description: "Spreading the word & engaging gaming communities!" }
  ]},
  { role: "Photography", members: [
    { name: "Sneha", image: "sneha.jpg", description: "Capturing epic gaming moments & victories." },
    { name: "Dhriti Adlakha", image: "dhriti_adlakha.jpg", description: "Photography ninja ensuring no moment goes unnoticed!" }
  ]},
  { role: "Videography", members: [
    { name: "Gaurang", image: "gaurang.jpg", description: "Chronicling the event through creative videography." }
  ]},
  { role: "Certification", members: [
    { name: "Anandita Gaya", image: "anandita_gaya.jpg", description: "Ensuring well-deserved recognition for participants." }
  ]},
];

// MeetTheTeam Component
const MeetTheTeam = () => {
  return (
    <div className="w-full bg-gray-800 py-12">
      <section className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-indigo-400 uppercase tracking-widest">Meet The Team</h2>
          <p className="text-gray-400 mt-2">The masterminds behind Kaun Gamer? 1.0</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {teams.map((team, index) => (
            <div key={index} className="w-full">
              <h3 className="text-2xl font-semibold text-indigo-500 mb-6 text-center border-b-2 border-indigo-400 pb-2">{team.role}</h3>
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
