import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminPanel = () => {
  const [teams, setTeams] = useState([]);
  const [fixtures, setFixtures] = useState([]);
  const [newTeam, setNewTeam] = useState({ name: "", score: 0 });
  const [newFixture, setNewFixture] = useState({
    team1: "",
    team2: "",
    date: "",
    time: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("adminToken")) {
      navigate("/admin-login");
    }
    fetchTeams();
    fetchFixtures();
  }, []);

  const fetchTeams = async () => {
    const res = await axios.get("http://localhost:5000/api/teams");
    setTeams(res.data);
  };

  const fetchFixtures = async () => {
    const res = await axios.get("http://localhost:5000/api/fixtures");
    setFixtures(res.data);
  };

  const updateScore = async (id, score) => {
    await axios.put(`http://localhost:5000/api/teams/${id}`, { score });
    fetchTeams();
  };

  const updateTeam = async (id, updatedTeam) => {
    await axios.put(`http://localhost:5000/api/teams/${id}`, updatedTeam);
    fetchTeams();
  };

  const updateFixture = async (id, updatedFixture) => {
    await axios.put(`http://localhost:5000/api/fixtures/${id}`, updatedFixture);
    fetchFixtures();
  };

  const addTeam = async () => {
    if (!newTeam.name.trim()) return;
    await axios.post("http://localhost:5000/api/teams", newTeam);
    setNewTeam({ name: "", score: 0 });
    fetchTeams();
  };

  const addFixture = async () => {
    if (!newFixture.team1 || !newFixture.team2) return;
    await axios.post("http://localhost:5000/api/fixtures", newFixture);
    setNewFixture({ team1: "", team2: "", date: "", time: "" });
    fetchFixtures();
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Admin Panel</h1>
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
          Logout
        </button>
      </div>

      {/* Add New Team */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Add New Team</h2>
        <input
          type="text"
          placeholder="Team Name"
          value={newTeam.name}
          onChange={(e) => setNewTeam({ ...newTeam, name: e.target.value })}
          className="border p-2 mr-2"
        />
        <button onClick={addTeam} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Team
        </button>
      </div>

      {/* Manage Teams */}
      <h2 className="text-xl font-semibold mt-8">Manage Team Scores</h2>
      <table className="w-full border mt-2">
        <thead>
          <tr className="bg-gray-300">
            <th className="border p-2">Team Name</th>
            <th className="border p-2">Score</th>
            <th className="border p-2">Update</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team._id} className="border">
              <td className="border p-2">
                <input
                  type="text"
                  defaultValue={team.name}
                  onBlur={(e) => updateTeam(team._id, { ...team, name: e.target.value })}
                  className="border p-1 w-24"
                />
              </td>
              <td className="border p-2">
                <input
                  type="number"
                  defaultValue={team.score}
                  onBlur={(e) => updateScore(team._id, e.target.value)}
                  className="border p-1 w-16"
                />
              </td>
              <td className="border p-2">
                <button
                  onClick={() => updateScore(team._id, team.score)}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Save
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add New Fixture */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Add New Fixture</h2>
        <input
          type="text"
          placeholder="Team 1"
          value={newFixture.team1}
          onChange={(e) => setNewFixture({ ...newFixture, team1: e.target.value })}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Team 2"
          value={newFixture.team2}
          onChange={(e) => setNewFixture({ ...newFixture, team2: e.target.value })}
          className="border p-2 mr-2"
        />
        <input
          type="date"
          value={newFixture.date}
          onChange={(e) => setNewFixture({ ...newFixture, date: e.target.value })}
          className="border p-2 mr-2"
        />
        <input
          type="time"
          value={newFixture.time}
          onChange={(e) => setNewFixture({ ...newFixture, time: e.target.value })}
          className="border p-2 mr-2"
        />
        <button onClick={addFixture} className="bg-green-500 text-white px-4 py-2 rounded">
          Add Fixture
        </button>
      </div>

      {/* Manage Fixtures */}
      <h2 className="text-xl font-semibold mt-8">Manage Fixtures</h2>
      <table className="w-full border mt-2">
        <thead>
          <tr className="bg-gray-300">
            <th className="border p-2">Team 1</th>
            <th className="border p-2">Team 2</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Time</th>
            <th className="border p-2">Update</th>
          </tr>
        </thead>
        <tbody>
          {fixtures.map((fixture) => (
            <tr key={fixture._id} className="border">
              <td className="border p-2">
                <input
                  type="text"
                  defaultValue={fixture.team1}
                  onBlur={(e) => updateFixture(fixture._id, { ...fixture, team1: e.target.value })}
                  className="border p-1 w-24"
                />
              </td>
              <td className="border p-2">
                <input
                  type="text"
                  defaultValue={fixture.team2}
                  onBlur={(e) => updateFixture(fixture._id, { ...fixture, team2: e.target.value })}
                  className="border p-1 w-24"
                />
              </td>
              <td className="border p-2">{fixture.date}</td>
              <td className="border p-2">{fixture.time}</td>
              <td className="border p-2">
                <button
                  onClick={() => updateFixture(fixture._id, fixture)}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Save
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
