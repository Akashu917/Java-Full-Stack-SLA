import React, { useState } from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const themeStyle = {
    backgroundColor: darkMode ? "#222" : "#fff",
    color: darkMode ? "#fff" : "#000",
    padding: "20px",
    minHeight: "200px",
    transition: "0.3s",
  };

  return (
    <div style={themeStyle}>
      <h2>{darkMode ? "Dark Mode" : "Light Mode"}</h2>

      <button onClick={() => setDarkMode(!darkMode)}>
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default ThemeToggle;