import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>
        Home
      </Link>

      <Link to="/about" style={styles.link}>
        About
      </Link>

      <Link to="/users" style={styles.link}>
        Users
      </Link>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: "#222",
    padding: "15px",
  },
  link: {
    color: "white",
    marginRight: "20px",
    textDecoration: "none",
    fontSize: "18px",
  },
};

export default Navbar;