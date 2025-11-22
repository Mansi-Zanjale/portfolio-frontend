import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./pages/home";
import About from "./pages/about";
import Work from "./pages/work";
import Contact from "./pages/contact";
import AdminDashboard from "./admin/AdminDashboard";
import AdminLogin from "./admin/AdminLogin";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [isAdmin, setIsAdmin] = useState(false);

  const location = useLocation(); // get current route

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      {/* Render Nav only if NOT on /admin */}
      {location.pathname !== "/admin" && (
        <Nav toggleTheme={toggleTheme} theme={theme} />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />

        {/* Protected Admin Route */}
        <Route
          path="/admin"
          element={
            isAdmin ? (
              <AdminDashboard
                onLogout={() => setIsAdmin(false)}
                theme={theme} // pass current theme
                toggleTheme={toggleTheme} // pass toggle function
              />
            ) : (
              <AdminLogin onLogin={setIsAdmin} />
            )
          }
        />
      </Routes>
    </>
  );
};

export default App;
