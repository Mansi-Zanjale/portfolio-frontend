import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const tools = [
  { name: "VS Code", icon: "bi bi-terminal" },
  { name: "npm", icon: "bi bi-box-seam" },
  { name: "Vite", icon: "bi bi-lightning-charge-fill" },
  { name: "Netlify", icon: "bi bi-cloud-upload-fill" },
  { name: "GitHub", icon: "bi bi-github" },
  { name: "Git", icon: "bi bi-git" },
];

const Tools = () => {
  return (
    <div className="tools-section">
      <h2>Tools & Technologies</h2>

      <div className="tools-grid">
        {tools.map((tool) => (
          <div className="tool-card" key={tool.name}>
            <i
              className={tool.icon}
              style={{ fontSize: "3rem", color: "#fff" }}
            ></i>
            <p>{tool.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
