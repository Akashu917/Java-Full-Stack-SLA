import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function UserDeltails() {
  const { id } = useParams();

  const navigate = useNavigate();

  return (
    <div>
      <h1>User Details</h1>

      <p>User ID: {id}</p>

      {/* Back Button */}
      <button onClick={() => navigate("/users")} style={styles.button}>
        Back to Users
      </button>
    </div>
  );
}

const styles = {
  button: {
    padding: "10px 15px",
    cursor: "pointer",
    marginTop: "20px",
  },
};

export default UserDeltails;