import React from "react";

function Stats({ averageNameLength }) {
  return (
    <div className="mb-5 p-4 bg-gray-100 rounded">
      <h2 className="text-xl font-bold">User Statistics</h2>
      <p>Average Name Length: {averageNameLength}</p>
    </div>
  );
}

const styles = {
  card: {
    marginBottom: "20px",
    padding: "15px",
    backgroundColor: "#f4f4f4",
    borderRadius: "5px",
  },
};

export default Stats;