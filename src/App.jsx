import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

import Nav from "./components/nav";
import Home from "./pages/home";
import About from "./pages/about";
import Work from "./pages/work";
import Contact from "./pages/contact";
import AdminDashboard from "./pages/AdminDashboard";

import "./App.css";

const App = () => {
  // Theme state (default dark)
  const [theme, setTheme] = useState("dark");

  // Update body attribute whenever theme changes
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      {/* Pass toggleTheme and current theme to Nav */}
      <Nav toggleTheme={toggleTheme} theme={theme} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </>
  );
};

export default App;
