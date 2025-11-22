import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion"; // ✅ import

const Work = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("https://portfolio-backend-wcaq.onrender.com/api/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <div className="work-section">
      <h1>My Work</h1>

      <motion.div
        className="work-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.length === 0 ? (
          <p>Loading projects...</p>
        ) : (
          projects.map((p) => (
            <motion.div
              className="work-card"
              key={p._id}
              variants={cardVariants}
              whileHover="hover"
            >
              <img
                src={p.image || "/images/default.png"}
                alt={p.title}
                className="work-img"
              />
              <div className="card-content">
                <h2>{p.title}</h2>
                <p className="desc">{p.description}</p>
                <p className="stack">Tech Stack: {p.stack || "N/A"}</p>
                <div className="btns">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn primary"
                    >
                      Live Preview
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn secondary"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))
        )}
      </motion.div>
    </div>
  );
};

export default Work;
