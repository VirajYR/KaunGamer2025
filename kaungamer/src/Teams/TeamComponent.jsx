import React from "react";

const teams = [
  { name: "Team Alpha", score: 35 },
  { name: "Team Beta", score: 28 },
  { name: "Team Gamma", score: 40 },
  { name: "Team Delta", score: 22 },
];

const fixtures = [
  { team1: "Team Alpha", team2: "Team Beta", date: "April 5, 2025", time: "6:00 PM" },
  { team1: "Team Gamma", team2: "Team Delta", date: "April 6, 2025", time: "7:30 PM" },
  { team1: "Team Alpha", team2: "Team Gamma", date: "April 7, 2025", time: "5:00 PM" },
  { team1: "Team Beta", team2: "Team Delta", date: "April 8, 2025", time: "8:00 PM" },
];

const TeamComponent = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <h2 className="text-3xl font-bold text-center text-indigo-500 mb-6">Teams & Scores</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {teams.map((team, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">{team.name}</h3>
            <p className="text-indigo-400 text-2xl font-bold">Score: {team.score}</p>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold text-center text-indigo-500 mt-10 mb-6">Fixture Schedule</h2>
      <table className="w-full max-w-4xl mx-auto bg-gray-800 text-white rounded-lg shadow-md overflow-hidden">
        <thead className="bg-indigo-500 text-gray-100">
          <tr>
            <th className="p-3">Match</th>
            <th className="p-3">Date</th>
            <th className="p-3">Time</th>
          </tr>
        </thead>
        <tbody>
          {fixtures.map((match, index) => (
            <tr key={index} className="border-b border-gray-700">
              <td className="p-3 text-center">{match.team1} vs {match.team2}</td>
              <td className="p-3 text-center">{match.date}</td>
              <td className="p-3 text-center">{match.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamComponent;
