import { useState, useEffect } from "react";
import usersData from "./data/users";
import UserGrid from "./Components/UserGrid";
import "./index.css";

function App() {
  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);

  const handleLoadUsers = () => {
    setShowUsers(true);
  };

  useEffect(() => {
    if (showUsers) {
      // delay to simulate fetch
      setTimeout(() => {
        setUsers(usersData);
      }, 800);
    }
  }, [showUsers]);

  useEffect(() => {
    document.title = `Users Loaded: ${users.length}`;
  }, [users]);

  return (
    <div className="app-container">
      <h1>User Directory</h1>

      {!showUsers && (
        <button className="loadBtn" onClick={handleLoadUsers}>
          Show All Users 🚀
        </button>
      )}

      {showUsers && <UserGrid users={users} />}
    </div>
  );
}

export default App;


