import { useState } from "react";
import "../styles/home.css";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [users] = useState([
    { id: 1, name: "John Doe", username: "johndoe", mutual: 5 },
    { id: 2, name: "Jane Smith", username: "janesmith", mutual: 3 },
    { id: 3, name: "Mike Johnson", username: "mikej", mutual: 2 },
    { id: 4, name: "Sarah Williams", username: "sarahw", mutual: 4 },
  ]);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home-container">
      <div className="search-section">
        <h1>Find Friends</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search users by name or username..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <h2>People You May Know</h2>
      <div className="users-grid">
        {filteredUsers.map((user) => (
          <div key={user.id} className="user-card">
            <div className="user-avatar">{user.name.charAt(0)}</div>
            <div className="user-info">
              <h3>{user.name}</h3>
              <p>@{user.username}</p>
              <p className="mutual-friends">{user.mutual} mutual friends</p>
            </div>
            <button className="add-friend-btn">Add Friend</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
