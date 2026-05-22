import React from "react";

function FilterBox({ filter, setFilter }) {
  return (
    <input
      type="text"
      placeholder="Search users..."
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      style={styles.input}
    />
  );
}

const styles = {
  input: {
    padding: "10px",
    width: "250px",
    marginBottom: "20px",
    marginRight: "10px",
  },
};

export default FilterBox;