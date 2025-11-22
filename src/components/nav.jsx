import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = ({ toggleTheme, theme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      {/* Hamburger */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Navbar List */}
      <ul className={`list ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/work" onClick={() => setMenuOpen(false)}>
            Work
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </li>

        <button onClick={toggleTheme} className="btn">
          {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </ul>
    </div>
  );
};

export default Nav;
