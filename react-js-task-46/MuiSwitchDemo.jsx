import { useState } from "react";
import { FormControlLabel, Switch, Typography } from "@mui/material";
function MuiSwitchDemo() {
  const [darkMode, setDarkMode] = useState(false);
  const [bColour, setBColour] = useState("white");

  function handleDarkMode() {
    setDarkMode(!darkMode);
  }

  function handleDarkMode() {
    setDarkMode(!darkMode);
    setBColour(darkMode ? "white" : "black");
  }

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#000000" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
        padding: "30px",
        borderRadius: "8px",
        minHeight: "300px",
        transition: "all 0.3s ease",
      }}
    >
      <box sx={{ backgroundColour: bColour, p: 5 }}></box>

      <FormControlLabel
        control={<Switch 
            checked={darkMode} 
            onChange={handleDarkMode} />}
        label="Dark Mode">

      </FormControlLabel>

      <Typography>
        Dark Mode is {darkMode ? "On" : "Off"}
      </Typography>
    </div>
  );
}
export default MuiSwitchDemo;
