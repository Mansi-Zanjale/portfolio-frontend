import { useState } from "react";
import "./AdminDashboard.css";

const AdminLogin = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hardcoded credentials for demo
    const demoUsername = "admin";
    const demoPassword = "admin123";

    if (username === demoUsername && password === demoPassword) {
      onLogin(true);
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="admin-login">
      {" "}
      {/* add this class */}
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default AdminLogin;
