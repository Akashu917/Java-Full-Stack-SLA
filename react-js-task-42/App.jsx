import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import UserDeltails from "./pages/UserDeltails";

function App() {
  return (
    <div>
      <Navbar />

      <div style={styles.container}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />

          {/* Dynamic Route */}
          <Route path="/users/:id" element={<UserDeltails />} />
        </Routes>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
  },
};

export default App;
